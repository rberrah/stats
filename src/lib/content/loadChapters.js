// Charge les chapitres Markdown (français), parse frontmatter + blocs `step`.
// import.meta.glob en mode eager pour un usage synchrone côté client.
// @ts-nocheck
import matter from 'gray-matter';
import katex from 'katex';
import MarkdownIt from 'markdown-it';

// Polyfill Buffer pour le navigateur (gray-matter en a besoin).
const BufferPoly =
  typeof Buffer !== 'undefined'
    ? Buffer
    : class extends Uint8Array {
        static from(str) {
          return new TextEncoder().encode(str);
        }
        static isBuffer(b) {
          return b instanceof Uint8Array;
        }
      };
if (!globalThis.Buffer) globalThis.Buffer = BufferPoly;

const md = new MarkdownIt({ html: true, linkify: true, breaks: true });

// Encadrés pédagogiques : syntaxe `:::type … :::` en Markdown.
const CALLOUTS = {
  pitfall: 'Piège',
  key: 'À retenir',
  clinical: 'En clinique',
  note: 'Note',
  math: 'Côté calcul',
  howto: 'Comment la lire',
  recall: 'Rappel'
};

function renderMd(src) {
  return md.render(renderMath(src));
}

/**
 * Rend un corps Markdown en HTML en gérant les encadrés `:::type … :::`.
 * @param {string} body
 * @returns {string}
 */
function renderBody(body) {
  const re = /^:::(\w+)[ \t]*\n([\s\S]*?)\n:::[ \t]*$/gm;
  let out = '';
  let last = 0;
  let m;
  while ((m = re.exec(body)) !== null) {
    out += renderMd(body.slice(last, m.index));
    const type = m[1].toLowerCase();
    const label = CALLOUTS[type] ?? type;
    const inner = renderMd(m[2]);
    out += `<aside class="callout callout-${type}"><p class="callout-label">${label}</p>${inner}</aside>\n`;
    last = re.lastIndex;
  }
  out += renderMd(body.slice(last));
  return out;
}

const files = import.meta.glob('../../content/chapters/*.md', { query: '?raw', import: 'default', eager: true });

/**
 * @typedef {{title:string, html:string, viz?:string}} Step
 * @typedef {{id:string, slug:string, title:string, description:string, order:number, track:string, duration:string, tags:string[], prerequisites:string[], glossary:string[], quiz:{prompt:string,options:string[],correct:number}[], steps:Step[]}} Chapter
 */

const chapters = Object.entries(files)
  // Les fichiers préfixés par « _ » (ex. `_TEMPLATE.md`) sont ignorés au build.
  .filter(([path]) => !/\/_[^/]*\.md$/.test(path))
  .map(([path, raw]) => parseChapter(path, raw));

function parseChapter(path, raw) {
  const { data, content } = matter(raw);
  /** @type {Step[]} */
  const steps = extractSteps(content);
  /** @type {Chapter} */
  const chapter = {
    id: data.id ?? data.slug,
    track: data.track ?? 'pharmaco',
    slug: data.slug,
    title: data.title,
    description: data.description ?? '',
    order: Number(data.order ?? 999),
    duration: data.duration ?? '',
    programItem: data.programItem ?? '',
    theme: data.theme ?? '',
    tags: data.tags ?? [],
    prerequisites: data.prerequisites ?? [],
    glossary: data.glossary ?? [],
    quiz: data.quiz ?? [],
    steps
  };
  return chapter;
}

/** @type {Chapter[]} */
const sorted = chapters.sort((a, b) => a.order - b.order);

export default sorted;

/**
 * @param {string} content
 * @returns {Step[]}
 */
function extractSteps(content) {
  /** @type {Step[]} */
  const blocks = [];
  const regex = /<!--\s*step:([^>]*)-->([\s\S]*?)<!--\s*\/step\s*-->/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    const meta = parseMeta(m[1]);
    const body = m[2].trim();
    blocks.push({
      title: meta.title ?? 'Étape',
      html: renderBody(body),
      viz: meta.viz
    });
  }
  return blocks;
}

/**
 * Rend les délimiteurs LaTeX avant MarkdownIt (KaTeX au build : pas de flash).
 * @param {string} source
 * @returns {string}
 */
function renderMath(source) {
  return source
    .replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => {
      const html = katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false });
      return `\n<div class="math-rendered math-display">${html}</div>\n`;
    })
    .replace(/\$([^$\n]+?)\$/g, (_, tex) => {
      return katex.renderToString(tex.trim(), { displayMode: false, throwOnError: false });
    });
}

/**
 * @param {string} str
 * @returns {Record<string, string>}
 */
function parseMeta(str) {
  /** @type {Record<string, string>} */
  const meta = {};
  // Valeur entre guillemets doubles (peut contenir des apostrophes) OU entre
  // apostrophes (peut contenir des guillemets doubles).
  const re = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
  let m;
  while ((m = re.exec(str)) !== null) meta[m[1]] = m[2] ?? m[3];
  return meta;
}

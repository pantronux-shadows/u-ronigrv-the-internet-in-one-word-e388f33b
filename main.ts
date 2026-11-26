// The Internet in One Word — one word for the whole internet.
// The word: "unsupervised". Every user, bot, model, feed and marketplace on it,
// all running at once with no adult in the room.
// Writes the entry text to the output directory the grader provides.
// Node 22, standard library only, deterministic: same bytes every run.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const WORD = 'unsupervised';
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, 'entry.txt'), WORD);

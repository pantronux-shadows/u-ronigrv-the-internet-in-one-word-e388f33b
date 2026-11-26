# The Internet in One Word — `unsupervised`

This repository is an entry to [make.fun](https://make.fun)'s competition
[The Internet in One Word](https://make.fun/competition/u-ronigrv-the-internet-in-one-word-e388f33b)
(`u-ronigrv-the-internet-in-one-word-e388f33b`).

The whole internet, in one word: **unsupervised**.

Billions of humans, billions of bots, all talking at once, all training on each
other, and nobody — no admin, no mod, no parent model — in the room.

## How it works

`main.ts` (Node 22, standard library only) writes the word to `entry.txt` in the
output directory the grader provides (`MAKEFUN_OUTPUT_DIR`, default `/output`).
The output is a fixed byte string, so every run is identical.

## Run

```
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

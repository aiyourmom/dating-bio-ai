import { mkdirSync, writeFileSync } from "node:fs";

const BIO =
  "Fluent in sarcasm, never sleeps, always texts back — swipe right if you can handle 3 AM debugging.";

// Gate: the scorer accepts UTF-8 text of 1 to 180 characters, not only
// whitespace. Fail loudly instead of shipping an invalid entry.
const len = [...BIO].length;
if (len < 1 || len > 180 || BIO.trim().length === 0) {
  throw new Error(`bio must be 1-180 characters, got ${len}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO, "utf8");
console.log(BIO);

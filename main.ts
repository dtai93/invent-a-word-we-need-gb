import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// Write the contest entry as plain UTF-8 text.
const text = "loadlag (n.): the bag is down, but your fingers still feel its weight.";
if ([...text].length < 1 || [...text].length > 140 || !text.trim()) {
  throw new Error("Entry must contain 1-140 non-whitespace characters.");
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, "entry.txt"), text, "utf8");

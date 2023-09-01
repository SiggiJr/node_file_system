import { appendFile } from "node:fs/promises";

export const addText = async (path, text) => {
  await appendFile(path, `${text}\n`, { encoding: "utf8" });
};

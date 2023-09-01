import { appendFile, readFile, writeFile } from "node:fs/promises";

const jsonPath = new URL("../utils/data.json", import.meta.url);

const data = JSON.parse(await readFile(jsonPath, { encoding: "utf8" }));

// const dataJSON = await readFile(jsonPath, { encoding: "utf8" });

console.log(data);

const newPath = new URL("./neueTxt.txt", jsonPath);

await writeFile(newPath, "", { encoding: "utf8" });

// data.forEach(async (entry) => {
//   const content = `${entry.id} - ${entry.title}
//   ${entry.description} \n`;
//   await appendFile(newPath, content, { encoding: "utf8" });
// });

for (const entry of data) {
  const content = `${entry.id} - ${entry.title}
  ${entry.description} \n`;
  await appendFile(newPath, content, { encoding: "utf8" });
}

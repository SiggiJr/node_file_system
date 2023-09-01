import { mkdir, rename, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const utilsPath = new URL("../utils/", import.meta.url);

if (!existsSync(utilsPath)) {
  mkdir(utilsPath);
}

const blog1Path = new URL("../utils/blog1.txt", import.meta.url);

await writeFile(blog1Path, "Ich bin ein Webdeveloper", { encoding: "utf8" });

const blog2Path = new URL("../utils/blog2.txt", import.meta.url);

await writeFile(blog2Path, "Irgend ein Text", { encoding: "utf8" });

const assetsPath = new URL("../assets/", import.meta.url);

if (!existsSync(assetsPath)) {
  mkdir(assetsPath);
}

const deletePath = new URL("./delete.txt", utilsPath);

if (existsSync(deletePath)) {
  await rm(deletePath);
}

await writeFile(deletePath, "", { encoding: "utf8" });

const helloPath = new URL("./Hello.txt", utilsPath);

await writeFile(helloPath, "beliebiger Text", { encoding: "utf8" });

const helloWorldPath = new URL("./HelloWorld.txt", utilsPath);

await rename(helloPath, helloWorldPath);

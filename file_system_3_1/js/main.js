import { addText } from "./functions.js";

const newTxtPath = new URL("../utils/newTxt.txt", import.meta.url);

addText(newTxtPath, "Hallo ich bin Felix");
addText(newTxtPath, "Ich bin 24 Jahre alt.");

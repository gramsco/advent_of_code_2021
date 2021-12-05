import path from "path";
import fs from "fs";

function readFileContentAsUTF8String(filepath: string) {
  const completePath = path.join(process.cwd(), filepath);
  try {
    const inputFile = fs.readFileSync(completePath, "utf-8");
    return inputFile;
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
    return "";
  }
}

function readLines(txtSource: string) {
  return txtSource.split("\n");
}

function readSource(sourceFileName = "source") {
  const data = readFileContentAsUTF8String(sourceFileName);
  return data;
}

export { readFileContentAsUTF8String, readSource, readLines };


import { join } from "path";
import fs from "fs";

const getDir = (path: string) => join(process.cwd(), path);

const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir);
}

const getItemInPath = (filePath: string): string => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
}

export {
  getFileNames,
  getItemInPath,
  getDir
}

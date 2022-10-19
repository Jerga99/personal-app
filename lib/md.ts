
import { join } from "path";
import fs from "fs";

const getDir = (path: string) => join(process.cwd(), path);

const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir);
}

export {
  getFileNames,
  getDir
}

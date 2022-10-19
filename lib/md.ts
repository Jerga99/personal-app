
import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { MarkdownItem } from "@interfaces/Markdown";

const getDir = (path: string) => join(process.cwd(), path);

const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir);
}

const getItemInPath = (filePath: string): MarkdownItem => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  return { ...data, content } as MarkdownItem;
}

const getAllItems = (
  fileNames: string[],
  get: (name: string) => MarkdownItem
) => {
  const items = fileNames.map((name) => get(name));
  return items;
}

export {
  getDir,
  getFileNames,
  getItemInPath,
  getAllItems
}

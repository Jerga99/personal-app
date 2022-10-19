
import { join } from "path";
import fs from "fs";
import { Blog } from "../interfaces/Blog";

const getDir = (path: string) => join(process.cwd(), path);

const BLOG_DIR = getDir("/content/blogs");

const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir);
}

const getBlogFileNames = () => {
  return getFileNames(BLOG_DIR);
}

const getItemInPath = (filePath: string): string => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
}

const getBlog = (fileName: string) => {
  const blog = getItemInPath(join(BLOG_DIR, fileName));
  return blog;
}

export {
  getBlogFileNames,
  getBlog
}

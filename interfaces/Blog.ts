
import { MarkdownItem } from "./Markdown";

export interface Blog extends MarkdownItem {
  coverImage: string;
  authorImage: string;
  author: string;
}

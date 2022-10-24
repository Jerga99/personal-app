
import { MarkdownItem } from "./Markdown";

export interface Portfolio extends MarkdownItem {
  coverImage: string;
  employee: string;
  employmentTime: number;
  employeeImage: string;
  highlights: string[];
}

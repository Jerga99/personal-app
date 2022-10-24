import { join } from "path";
import { Portfolio } from "@interfaces/Portfolio";
import { getAllItems, getDir, getFileNames, getItemInPath } from "./md";

const PORTFOLIO_DIR = getDir("/content/portfolios");

const getPortfoliosFileNames = () => {
  return getFileNames(PORTFOLIO_DIR);
}

const getPortfolio = (fileName: string): Portfolio => {
  const portfolio = getItemInPath(join(PORTFOLIO_DIR, fileName)) as Portfolio;
  portfolio.slug = fileName.replace(/\.md$/, "");
  return portfolio;
}

const getPortfolios = (): Portfolio[] => {
  const names = getPortfoliosFileNames();
  return getAllItems(names, getPortfolio) as Portfolio[];
}

export { getPortfolios };

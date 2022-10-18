import { PortfolioItem } from "./PortfolioItem";

const portfolios = [
  {
    slug: "software-engineer-siemens",
    title: "Software Engineer Siemens",
    description: "Working as C++ and C# software engineer",
    employmentDate: "2022-01-12",
    coverImage: "https://images.unsplash.com/photo-1622473590773-f588134b6ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=50",
  },
]

const PortfolioList = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {portfolios.map((portfolio) => (
        <PortfolioItem 
          key={portfolio.slug}
          portfolio={portfolio} 
        />
      ))}
    </div>
  ) 
}

export default PortfolioList;

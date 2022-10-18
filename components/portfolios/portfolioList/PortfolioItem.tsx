
import Image from "next/image";
import Link from "next/link";

export const PortfolioItem = ({portfolio}: any) => {

  return (
    <div className="group relative">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <Image
          layout="fill"
          src={portfolio.coverImage}
          alt={""}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <Link href={`/portfolios/${portfolio.slug}`}>
          <a>
            <span className="absolute inset-0" />
            { portfolio.title }
          </a>
        </Link>
      </h3>
      <p className="text-base font-semibold text-gray-900">{ portfolio.description }</p>
    </div>
  )
}

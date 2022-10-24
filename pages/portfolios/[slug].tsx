import { PageLayout } from "@components/layouts";
import { Portfolio } from "@interfaces/Portfolio";
import { getPortfolioBySlugWithMarkdown, getPortfolioSlugs } from "@lib/portfolios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

type Props = {
  portfolio: Portfolio
}


const PortfolioDetail: NextPage<Props> = ({portfolio}) => {

  return (
    <PageLayout pageTitle={portfolio.title}>
      <div className="w-2/3 m-auto">
        {portfolio.title}
      </div>
    </PageLayout>
  )
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const { slug } = context.params!;
  const portfolio = await getPortfolioBySlugWithMarkdown(slug);

  return {
    props: { portfolio }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getPortfolioSlugs();
  const paths = slugs.map(slug => ({params: {slug}}));

  return {
    paths,
    fallback: false
  }
}

export default PortfolioDetail;

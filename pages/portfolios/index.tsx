import { PageLayout } from "@components/layouts";
import { PortfolioList } from "@components/portfolios";
import { Portfolio } from "@interfaces/Portfolio";
import { getPortfolios } from "@lib/portfolios";
import { GetStaticProps, NextPage } from "next";

type Props = {
  portfolios: Portfolio[]
}

const PortfoliosPage: NextPage<Props> = ({portfolios}) => {
  return (
    <PageLayout pageTitle="All Portfolios">
      <h2 
        className="text-2xl font-bold tracking-tight text-gray-900">
          All Portfolios
      </h2>
      <PortfolioList portfolios={portfolios} />
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const portfolios = getPortfolios();

  return {
    props: {portfolios}
  }
}

export default PortfoliosPage;

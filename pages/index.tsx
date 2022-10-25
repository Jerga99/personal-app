import type { GetStaticProps, NextPage } from 'next'
import Link from "next/link";
import { BlogList } from '@components/blogs';
import { PortfolioList } from '@components/portfolios';
import { BaseLayout } from '@components/layouts';
import { getBlogs } from '@lib/blogs';
import { Blog } from '@interfaces/Blog';
import { saveSearchData } from '@lib/md';
import { getPortfolios } from '@lib/portfolios';
import { Portfolio } from '@interfaces/Portfolio';

type Props = {
  blogs: Blog[];
  portfolios: Portfolio[]
}

const Home: NextPage<Props> = ({blogs, portfolios}) => {
  return (
    <BaseLayout>
      <h2 
        className="text-2xl font-bold tracking-tight text-gray-900">
          Newest Blogs
          <Link href="/blogs">
            <a className='text-sm ml-1 text-indigo-600'>
              (See All)
            </a>
          </Link>
      </h2>
      <BlogList blogs={blogs} />
      <br></br>
      <h2 
        className="text-2xl font-bold tracking-tight text-gray-900">
          Portfolios
          <Link href="/portfolios">
            <a className='text-sm ml-1 text-indigo-600'>
              (See All)
            </a>
          </Link>
      </h2>
      <PortfolioList portfolios={portfolios} />
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const blogs = getBlogs();
  const portfolios = getPortfolios();

  const content = {
    blogs,
    portfolios
  }

  saveSearchData(content);
  
  return {
    props: {
      blogs: blogs.slice(0, 4), 
      portfolios: portfolios.slice(0, 4)
    }
  }
}

export default Home

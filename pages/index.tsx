import type { GetStaticProps, NextPage } from 'next'
import Link from "next/link";
import { BlogList } from '@components/blogs';
import { PortfolioList } from '@components/portfolios';
import { BaseLayout } from '@components/layouts';
import { getBlogs } from '@lib/blogs';
import { Blog } from '@interfaces/Blog';

type Props = {
  blogs: Blog[]
}

const Home: NextPage<Props> = ({blogs}) => {
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
      <PortfolioList />
    </BaseLayout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const blogs = getBlogs();
  
  return {
    props: {blogs}
  }
}

export default Home

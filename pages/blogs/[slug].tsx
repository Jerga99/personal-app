import {  GetStaticPaths, GetStaticProps, NextPage } from 'next/types'
import Image from "next/image";
import { PageLayout } from '@components/layouts';
import { getBlogBySlug, getBlogsSlugs } from '@lib/blogs';
import { Blog } from '@interfaces/Blog';
import { ParsedUrlQuery } from 'querystring';

type Props = {
  blog: Blog
}

const BlogDetail: NextPage<Props> = ({blog}) => {
  return (
    <>
      <PageLayout pageTitle={blog.title}>
        <div className="w-2/3 m-auto">
          {/* Blog Header Starts */}
          <div className="blog-detail-header">
            <div className="flex flex-row justify-between mb-2">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="#">
                    <span className="sr-only">{blog.author}</span>
                    <div className="relative h-10 w-10 !mb-0" >
                      <Image 
                        priority
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        src={blog.authorImage} alt="" 
                      />
                    </div>
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 !mb-0">
                    <a href="#" className="hover:underline">
                      {blog.author}
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={blog.date}>{blog.date}</time>
                  </div>
                </div>
              </div>
              <div className="flex self-end">
                {/* Social Links Here */}
              </div>
            </div>
            <h1 className="font-bold text-4xl mb-1">{blog.title}</h1>
            <h2 className="blog-detail-header-subtitle mb-2 text-xl text-gray-600">{blog.description}</h2>
            <div className="h-96 bg-black mx-auto w-full relative">
              <Image
                priority
                layout="fill"
                objectFit="cover"
                src={blog.coverImage} alt=""/>
            </div>
          </div>
          {/* Blog Header Ends */}
          <article className="prose lg:prose-lg markdown-image-50">
            {/* Blog Content Here */}
            {blog.content}
          </article>
        </div>
      </PageLayout>
    </>
  )
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = (context) => {
  const { slug } = context.params!;
  const blog = getBlogBySlug(slug);

  return {
    props: { blog }
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = getBlogsSlugs();
  const paths = slugs.map(slug => ({params: {slug}}));

  return {
    paths,
    fallback: false
  }
}

export default BlogDetail;

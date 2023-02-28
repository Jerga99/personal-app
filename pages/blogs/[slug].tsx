import React from 'react';
import {  GetStaticPaths, GetStaticProps, NextPage } from 'next/types'
import { PageLayout } from '@components/layouts';
import { getBlogBySlugWithMarkdown, getBlogsSlugs } from '@lib/blogs';
import { Blog } from '@interfaces/Blog';
import { ParsedUrlQuery } from 'querystring';
import { BlogHeader } from '@components/blogs';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import html from "remark-html";

import {Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// Check all styles, you can use also this one
// <SyntaxHighlighter style={materialLight} ...
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  blog: Blog
}


const wtf: {[key: string]: React.CSSProperties } = darcula;
 
const BlogDetail: NextPage<Props> = ({blog}) => {
  return (
    <>
      <PageLayout pageTitle={blog.title}>
        <div className="w-2/3 m-auto">
          <BlogHeader blog={blog} />
          <article className="prose lg:prose-lg markdown-image-50">
            {/* Blog Content Here */}
            <ReactMarkdown
              remarkPlugins={[html, remarkGfm]}
              components={{
                code({node, inline, className, children, style, ...props}) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={darcula}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }
              }}
            >
              {blog.content}
            </ReactMarkdown>

          </article>
        </div>
      </PageLayout>
    </>
  )
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const { slug } = context.params!;
  const blog = await getBlogBySlugWithMarkdown(slug);

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

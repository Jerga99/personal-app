import { FunctionComponent } from "react";
import { Blog } from "@interfaces/Blog";
import { BlogItem } from "./BlogItem";

type Props = {
  blogs: Blog[]
}

const BlogList: FunctionComponent<Props> = ({blogs}) => {

  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {blogs.map((blog) => (
        <BlogItem 
          key={blog.slug}
          blog={blog} 
        />
      ))}
    </div>
  )
}

export default BlogList;

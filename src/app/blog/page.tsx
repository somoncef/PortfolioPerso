import { BlogList } from "@/components/blog-list";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";

export const metadata = {
  title: "Blog",
  description: DATA.ui.blogMetaDescription,
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return <BlogList posts={posts} />;
}

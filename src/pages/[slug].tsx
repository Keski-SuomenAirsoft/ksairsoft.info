import { Box, Flex } from "theme-ui";
import { allPosts } from "contentlayer/generated";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { PageBox } from "src/components/page-box";

const PostLayout: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const post = allPosts.find((post) => {
    console.log(post._raw.flattenedPath);
    console.log(slug);
    return post._raw.flattenedPath === slug;
  });

  if (post) {
    return <PageBox post={post} />;
  } else return <>Not found</>;
};

export default PostLayout;

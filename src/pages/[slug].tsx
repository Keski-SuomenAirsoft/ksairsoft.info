import { allPages, Page } from "contentlayer/generated";
import { NextPage } from "next";
import { PageBox } from "src/components/page-box";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths } from "next";
interface Params extends ParsedUrlQuery {
  slug: string;
}
interface ContentPageProps {
  mdPage: Page;
}

export const getStaticProps: GetStaticProps<ContentPageProps, Params> = async (
  context
) => {
  const { slug } = context.params!;
  const page = allPages.find((page) => page._raw.flattenedPath === slug);

  if (page) {
    return {
      props: {
        mdPage: page,
      },
    };
  } else {
    throw new Error("Page was not found");
  }
};

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const paths = allPages.map((page) => page.url);
  return {
    paths,
    fallback: false,
  };
};

const PageLayout: NextPage<ContentPageProps> = ({ mdPage }) => (
  <PageBox post={mdPage} />
);

export default PageLayout;

import { Box, Flex, NavLink, Text } from "theme-ui";
import { allPages, Page } from "contentlayer/generated";
import { GetStaticProps } from "next";

interface NavBarProps {
  pages: Page[];
}

export const getStaticProps: GetStaticProps<NavBarProps> = async () => {
  const sortedPages = allPages.sort((postA, postB) => postA.sort - postB.sort);

  return {
    props: {
      pages: sortedPages,
    },
  };
};

export const NavBar: React.FC<NavBarProps> = ({ pages }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "muted",
      }}
    >
      <Box sx={{ backgroundColor: "primary", color: "white", px: 2, py: 1 }}>
        <Text>Päävalikko</Text>
      </Box>
      <Box sx={{ p: 2 }}>
        <Flex sx={{ flexDirection: "column", gap: 1 }}>
          {pages.map((post, idx) => (
            <NavLink key={idx} href={`/${post.slug}`}>
              {post.title}
            </NavLink>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

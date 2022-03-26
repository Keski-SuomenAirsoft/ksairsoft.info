import { Box, Flex, NavLink, Text } from "theme-ui";
import { allPosts } from "contentlayer/generated";
export const NavBar: React.FC = () => {
  const sortedPosts = allPosts.sort((postA, postB) => postA.sort - postB.sort);
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
          {sortedPosts.map((post, idx) => (
            <NavLink key={idx} href={`/${post.slug}`}>
              {post.title}
            </NavLink>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

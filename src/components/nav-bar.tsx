import { Box, Flex, NavLink, Text } from "theme-ui";
import { allPages } from "contentlayer/generated";
import { useRouter } from "next/router";

export const NavBar: React.FC = () => {
  const router = useRouter();
  const pathname = router.asPath.slice(1);
  const pages = allPages.sort((postA, postB) => postA.sort - postB.sort);

  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "muted",
        borderRadius: "soft",
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary",
          color: "white",
          px: 2,
          py: 1,
          borderRadius: "softTop",
        }}
      >
        <Text>Päävalikko</Text>
      </Box>
      <Box sx={{ p: 2 }}>
        <Flex sx={{ flexDirection: "column", gap: 1 }}>
          {pages.map((post, idx) => (
            <NavLink
              key={idx}
              href={`/${post.slug}`}
              sx={{
                color: pathname === post.slug ? "secondary" : "text",
              }}
            >
              {post.title}
            </NavLink>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

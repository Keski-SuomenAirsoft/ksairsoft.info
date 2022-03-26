import { Page } from "contentlayer/generated";
import { Box, Flex } from "theme-ui";

export interface PageBoxProps {
  post: Page;
}

export const PageBox: React.FC<PageBoxProps> = ({ post }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "muted",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "secondary",
          color: "white",
          px: 2,
          py: 1,
        }}
      >
        {post.title}
      </Box>
      <Box
        sx={{ px: 3 }}
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      ></Box>
    </Flex>
  );
};

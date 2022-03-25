/** @jsxImportSource theme-ui */
import { Box, Flex } from "theme-ui";

export const MainContentBox: React.FC = ({ children }) => (
  <Flex
    sx={{
      flexDirection: "column",
      backgroundColor: "muted",
    }}
  >
    <Box
      sx={{
        backgroundColor: "secondary",
        color: "white",
        px: 2,
        py: 1,
      }}
    >
      Title
    </Box>
    <Box sx={{ px: 3 }}> {children}</Box>
  </Flex>
);

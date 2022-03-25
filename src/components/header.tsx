import { Link } from "next-theme-ui";
import { Box, Container, Flex, Heading, NavLink } from "theme-ui";

export const Header = () => (
  <Container>
    <Box sx={{ background: "primary", color: "white", p: 3 }}>
      <Link href={"/"} sx={{ textDecoration: "none", color: "white" }}>
        <Heading>ksairsoft ry</Heading>
      </Link>
    </Box>
  </Container>
);

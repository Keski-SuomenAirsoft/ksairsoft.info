import { Box, Container, Flex, Heading, NavLink } from "theme-ui";

export const Header = () => (
  <Box sx={{ background: "muted", color: "background" }}>
    <Container>
      <Heading>KS Airsoft Ry</Heading>
      <Flex sx={{ gap: 2 }}>
        <NavLink href={"/"}>Home</NavLink>
      </Flex>
    </Container>
  </Box>
);

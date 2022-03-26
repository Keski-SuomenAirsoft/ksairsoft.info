import { Box, Container, Flex } from "theme-ui";
import { Header } from "./header";
import { Footer } from "./footer";
import Head from "next/head";
import { NavBar } from "./nav-bar";
import { SponsorBox } from "./sponsor-box";
import { Socials } from "./socials";

export const Layout: React.FC = ({ children }) => {
  return (
    <Box>
      <Head>
        <title>KS Airsoft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex sx={{ flexDirection: "column", minHeight: "100vh", gap: 3 }}>
        <Box sx={{ mt: 3 }}>
          <Header />
        </Box>
        <Container sx={{ flex: "1 1 auto" }}>
          <Flex sx={{ flexDirection: ["column", "row"], gap: 3 }}>
            <Flex sx={{ minWidth: "15rem", flexDirection: "column", gap: 3 }}>
              <NavBar />
              <Socials />
            </Flex>
            <Box sx={{ flex: 2 }}>{children}</Box>
            <Box sx={{ minWidth: "15rem", flex: 1 }}>
              <SponsorBox />
            </Box>
          </Flex>
        </Container>

        <Box>
          <Footer />
        </Box>
      </Flex>
    </Box>
  );
};

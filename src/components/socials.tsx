import { Box, Flex, Link, Text } from "theme-ui";
import { SiDiscord, SiFacebook, SiGithub } from "react-icons/si";
import { theme } from "../theme";

export const Socials: React.FC = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "muted",
      }}
    >
      <Box sx={{ backgroundColor: "primary", color: "white", px: 2, py: 1 }}>
        <Text>Yhteistyössä</Text>
      </Box>
      <Box sx={{ p: 2, maxWidth: "100%" }}>
        <Flex sx={{ gap: 2 }}>
          <Link href="http://www.facebook.com/?ref=home#!/pages/Keski-Suomen-Airsoft-Ry/247713627239?ref=ts">
            <SiFacebook size={48} color={theme.colors.primary} />
          </Link>
          <Link href="https://discordapp.com/invite/RDCAeB8">
            <SiDiscord size={48} color={theme.colors.primary} />
          </Link>
          <Link href="https://github.com/braaar/ksairsoft.info">
            <SiGithub size={48} color={theme.colors.primary} />
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

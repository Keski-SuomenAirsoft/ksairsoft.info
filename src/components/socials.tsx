import { Box, Flex, Image, Link, NavLink, Text } from "theme-ui";

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
        <Flex sx={{ flexDirection: "column", gap: 1 }}>
          <Link href="http://www.facebook.com/?ref=home#!/pages/Keski-Suomen-Airsoft-Ry/247713627239?ref=ts">
            <Image src={"/facebook.png"} alt="Facebook banner" />
          </Link>
          <Link href="https://discordapp.com/invite/RDCAeB8">
            <Image src={"/discord.png"} alt="Discord banner" />
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

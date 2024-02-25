import { Box, Flex, Image, Link, NavLink, Text } from "theme-ui";

export const SponsorBox: React.FC = () => {
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
        <Text>Yhteistyössä</Text>
      </Box>
      <Box sx={{ p: 2, maxWidth: "100%" }}>
        <Flex sx={{ flexDirection: "column", gap: 1 }}>
          <Link href="https://tierone.fi/" target={"_blank"}>
            <Image
              src={"/sponsors/tierone.png"}
              alt="Tierone banner"
              sx={{ borderRadius: "soft" }}
            />
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

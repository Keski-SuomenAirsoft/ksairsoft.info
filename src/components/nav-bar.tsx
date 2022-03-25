import { Box, Flex, NavLink, Text } from "theme-ui";

export const NavBar: React.FC = () => {
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
          <NavLink href={"/"}>Etusivu</NavLink>
          <NavLink href={"/yhdistys"}>Yhdistys</NavLink>
          <NavLink href={"/jasenhakemus"}>Jäsenhakemus</NavLink>
          <NavLink href={"/airsoft"}>Airsoft?</NavLink>
          <NavLink href={"/pelisaannot"}>Pelisäännöt</NavLink>
          <NavLink href={"/ukk"}>UKK / FAQ</NavLink>
          <NavLink href={"/yhteystiedot"}>Yhteystiedot</NavLink>
          <NavLink href={"/pelit"}>Tulevat pelit</NavLink>
        </Flex>
      </Box>
    </Flex>
  );
};

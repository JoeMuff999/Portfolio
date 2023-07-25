import { Box, Flex, Link, HStack, IconButton } from "@chakra-ui/react";
import { ReactNode } from "react";
import HomeIcon from "./icons/home";

const Links = ["About", "Experience", "Projects"];
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
    }}
    href={children}
  >
    {children}
  </Link>
);


export default function Navbar() {
  return (
    <Box display={{ md: "flex" }} align="center" >
      <Box flexGrow={1}>
        <Flex p="4" alignItems={"center"} justifyContent={"space-between"}>
          <Link href='/'>
            <IconButton icon={<HomeIcon />} />
          </Link>
          <HStack as={"nav"} spacing={4} display={{ base: "flex", md: "flex" }}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

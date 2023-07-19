import {
  Container,
  Box,
  Heading,
  Flex,
  Center,
  Text,
  SimpleGrid,
  GridItem,
  Icon,
  createIcon,
  HStack,
  Link,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { domMax } from "framer-motion";
import GithubIcon from "../components/icons/github";
import LinkedinIcon from "../components/icons/linkedin"



/* 'export default' is used to specify the entry component for rendering this page */
export default function LandingPage() {
  return (
    <Center h="80vh">
      <Box display={{ md: "flex" }} align="center">
        <Box flexGrow={1}>
          <Heading variant="page-title">Joseph Muffoletto</Heading>
          <p>Software Engineer</p>
          <Flex pt={4} w='12em'>
            <Box>
              <Link href="https://github.com/joemuff999" isExternal>
                <IconButton icon={<GithubIcon />} />
              </Link>
            </Box>
            <Spacer/>
            <Box>
              <Link href="https://linkedin.com/in/joeymuffoletto" isExternal>
                <IconButton icon={<LinkedinIcon />} />
              </Link>
            </Box>
            <Spacer/>
            <Box>
              <Link href="https://github.com/joemuff999" isExternal>
                <IconButton icon={<LinkedinIcon />} />
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Center>
  );
}

import {
  Box,
  Heading,
  Flex,
  Center,
  Link,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { domMax } from "framer-motion";
import GithubIcon from "../components/icons/github";
import LinkedinIcon from "../components/icons/linkedin"
import MailIcon from '../components/icons/mail'



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
              <Link href="mailto:joeymuffoletto10@gmail.com" isExternal>
                <IconButton icon={<MailIcon />} />
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Center>
  );
}

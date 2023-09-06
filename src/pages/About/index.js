import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

function Education() {
    return (
      <Box mt={6}>
        <Heading size="md">Education</Heading>
        <SimpleGrid columns={2}>
          <Text>The University of Texas at Austin</Text>
          <Text align="right">2019-2023</Text>
          <Text fontStyle="italic">MS Computer Science</Text>
          <Text></Text>
          <Text fontStyle="italic">BS Computer Science</Text>
        </SimpleGrid>
      </Box>
    );
  }

export default function About() {
  return (
    <Box display={{ md: "flex" }}>
      <Box flexGrow={1}>
        <Heading as='h2' variant='page-title' pb={5}>About Me</Heading>
        <Text >

           <Text as='b'>Hello! I'm Joey.</Text> <br/> 
           I'm a 21 year old software developer in Austin. Originally from Houston, I moved to Austin in 2019 to pursue a computer science degree at UT. During my time there, I led the software system for our school's FSAE team, developed tools for published research, and invested time into my fraternity. After graduating with my bachelors and masters in 2023, I now spend my time developing software for the Privacy team at Amazon. 
        </Text>
        <br/>
        <Text>
            {/* Contact me at joeymuffoletto10@gmail.com */}
        </Text>
      </Box>
    </Box>
  );
}

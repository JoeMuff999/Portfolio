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
        <Text>
            Hello, I recently graduated from the University of Texas at Austin with a bachelors and masters in computer science. I am currently a software engineer at Amazon in SDO Privacy.
        </Text>
        <br/>
        <Text>
            I am originally from Houston and currently reside in Austin. 
        </Text>
        <br/>

        <Text>
            I am interested in software development. I have experience with distributed systems, game development, robotics, AI, and VR/AR. 
        </Text>
      </Box>
    </Box>
  );
}

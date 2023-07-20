import {
  Box,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Link,
} from "@chakra-ui/react";


function ProjectCard({ pImageSrc, pTitle, pDesc, pTech, pLink }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={pImageSrc} borderRadius="lg" />
        <Stack pb={5} mt="6" spacing="3">
          <Heading>{pTitle}</Heading>
          <Text>{pDesc}</Text>
          <Text as='b'>{pTech}</Text>
        </Stack>
        <Link href={pLink} isExternal>
          <Button maxW="sm" align="center">
            Click me
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default function Projects() {
  return (
    <Box display={{ md: "flex" }}>
      <Box flexGrow={1}>
        <Heading pb={5}>Projects</Heading>
        <Text as='i' >A collection of personal and school projects</Text>
        <SimpleGrid pt="10" columns={2} spacing={10}>
          <ProjectCard
            pImageSrc='/buddibot.jpg'
            pTitle="BuddiBot"
            pDesc="Educational puzzle game for teaching machine learning."
            pTech='Unity, C#, Blender'
            pLink="https://store.steampowered.com/app/1414090/Buddi_Bot__Your_Machine_Learning_AI_Helper_With_Advanced_Neural_Networking/"
          />
        <ProjectCard
            pImageSrc="/Portfolio.PNG"
            pTitle="Portfolio"
            pDesc="Professional website for learning frontend development"
            pTech='Next.js, Chakra-UI, AWS Amplify'
            pLink="https://github.com/JoeMuff999/Portfolio"
          />
        <ProjectCard
            pImageSrc="/uamToolkit.PNG"
            pTitle="UAM Toolkit"
            pDesc="Toolkit for researching Urban Air Mobility planning. Published in NASA Formal Methods 2021"
            pTech='Python'
            pLink="https://github.com/JoeMuff999/UAM-Planning-Toolkit/tree/master"
          />
        <ProjectCard
            pImageSrc="/whatTheFlock.PNG"
            pTitle="What The Flock!"
            pDesc="A 3D Duck Hunt parody where the player teams up with local geese to eliminate noisy airplanes"
            pTech='Unity, C#, Blender'
            pLink="https://github.com/JoeMuff999/WhatTheFlock"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}

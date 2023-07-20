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
        <Heading>Projects</Heading>
        <SimpleGrid pt="10" columns={2} spacing={10}>
          <ProjectCard
            pImageSrc="/buddibot.jpg"
            pTitle="BuddiBot"
            pDesc="Educational puzzle game for teaching machine learning."
            pTech='Unity, C#, Blender'
            pLink="https://store.steampowered.com/app/1414090/Buddi_Bot__Your_Machine_Learning_AI_Helper_With_Advanced_Neural_Networking/"
          />
          {/* <ProjectCard pImageSrc="/buddibot.jpg" /> */}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  HStack,
} from "@chakra-ui/react";

function WorkExperience({ companyName, role, tenure, description }) {
  return (
    <AccordionItem p={4}>
      <h2>
        <AccordionButton bgColor="blackAlpha.100">
          <Box as="span" flex="1" textAlign="left">
            <HStack>
              <Text as="b">{companyName}</Text>
              <Text>{role}</Text>
            </HStack>
            <Text as="i" fontSize="xs">
              {tenure}
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{description}</AccordionPanel>
    </AccordionItem>
  );
}

export default function Experience() {
  return (
    <Box display={{ md: "flex" }}>
      <Box flexGrow={1}>
        <Heading variant="page-title">Work Experience</Heading>
        <Accordion defaultIndex={[0]} allowMultiple pt={5}>
          <WorkExperience
            companyName="Amazon"
            role="Software Engineer"
            tenure="2023 - Present"
            description="Kale, CDO Privacy. Go, Typescript, Java, AWS"
          />
          <WorkExperience 
            companyName="Amazon"
            role="Software Engineer Intern"
            tenure="Summer 2022"
            description="Delivery Date Improvements. Java, Scala, AWS"
          />
          <WorkExperience
            companyName="Autonomous Systems Group, UT Austin"
            role="Research Assistant"
            tenure="Fall 2019 - Summer 2022"
            description="Autonomous Vehicle Planner. Python"
          />
          <WorkExperience
            companyName="NASA"
            role="Autonomous Vehicle Intern"
            tenure="Summer 2021"
            description="Autonomous Vehicle Simulations. Python"
          />
          <WorkExperience
            companyName="SAGA Lab, UT Austin"
            role="Software Engineer Intern"
            tenure="Summer 2020"
            description="Game Developer. Unity, C#"
          />
          <WorkExperience
            companyName="Tietronix"
            role="AR/VR Developer Intern"
            tenure="Summer 2020"
            description="VR EMS Trainings. Unity, C#, VRTK"
          />
          <WorkExperience
            companyName="Tietronix"
            role="Software Engineer Intern"
            tenure="Summer 2019"
            description="3D Model Viewer. Unity, C#"
          />
        </Accordion>
      </Box>
    </Box>
  );
}

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Link,
} from "@chakra-ui/react";

const ProjectCard = (props) => {
  const { img, link, description, stack, name } = props.project;
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${img})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"fit"}
            src={img}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading
            color={"gray.500"}
            fontSize={"1.2rem"}
            textTransform={"uppercase"}
          >
            {name}
          </Heading>
          <Text fontSize={"1.1rem"} align={"left"} w={"80%"}>
            {description}
          </Text>

          <Text fontSize={"1rem"} align={"left"} w={"80%"} fontWeight={800}>
            Live demo :
            <Link href={link} textDecoration={"none"} color={"purple.400"}>
              {name}
            </Link>
          </Text>

          <Text fontWeight={800} fontSize={"xl"} w={"80%"} align={"left"}>
            Stack : {stack}
          </Text>
        </Stack>
      </Box>
    </Center>
  );
};

export default ProjectCard;

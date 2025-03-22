import {useEffect, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faMedium, faStackOverflow} from "@fortawesome/free-brands-svg-icons";
import {Text, Box, HStack} from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const socialList = socials.map((social) => (
    <a href={social.url} key={social.url}>
      <FontAwesomeIcon icon={social.icon} size="2x" />
    </a>
  ));


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8} // color={!isHeaderVisible ? "transparent" : "#2A4365"}
            >
              {socialList}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#" onClick={handleClick("landing")}>
                <HStack>
                  <FontAwesomeIcon icon={faHome} size="lg" />
                  <Text fontSize={14} fontWeight="bold">
                    Home
                  </Text>
                </HStack>
              </a>
              <a href="#project-section" onClick={handleClick("projects")}>
                <HStack>
                  <FontAwesomeIcon icon={faBriefcase} size="lg" />
                  <Text fontSize={14} fontWeight="bold">
                    Projects
                  </Text>
                </HStack>
              </a>
              <a href="#contactme-section" onClick={handleClick("contactme")}>
                <HStack>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  <Text fontSize={14} fontWeight="bold">
                    Contact Me
                  </Text>
                </HStack>
              </a>


            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

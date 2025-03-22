import {useEffect, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faToolbox} from "@fortawesome/free-solid-svg-icons";
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


{/* <NavItem href="#" onClick={handleClick("landing")} icon={faHome} text="Home" />
<NavItem href="#project-section" onClick={handleClick("projects")} icon={faToolbox} text="Projects" />
<NavItem href="#contactme-section" onClick={handleClick("contactme")} icon={faEnvelope} text="Context me" />;
 */}

const internals = [
  {
    anchor: "home",
    icon: faHome,
    path: "#",
    text: "Home",
  },
  {
    anchor: "projects",
    icon: faToolbox,
    path: "#project-section",
    text: "Projects",
  },
  {
    anchor: "contactme",
    icon: faEnvelope,
    path: "#contactme-section",
    text: "Context me",
  },
];


const NavItem = function(props) {
  return (
    <>
      <a href={props.href} onClick={props.onClick}>
        <HStack>
          {/* <FontAwesomeIcon icon={props.icon} size="lg" /> */}
          <Text fontSize={14} fontWeight="bold">
            {props.text}
          </Text>
        </HStack>
      </a>
    </>
  );
};

const Header = function() {

  const handleClick = (anchor) => function() {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Create list of Social Network links
  const socialList = socials.map((social) => (
    <a href={social.url} key={social.url}>
      <FontAwesomeIcon icon={social.icon} size="2x" />
    </a>
  ));

  // // Create list of Internal links
  // const listList = internals.map((item) => (
  //   <NavItem
  //     href={item.path}
  //     onClick={handleClick(item.anchor)}
  //     icon={item.icon}
  //     text={item.text} />
  // ));

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
              <NavItem href="#" onClick={handleClick("landing")} icon={faHome} text="Home" />
              <NavItem href="#project-section" onClick={handleClick("projects")} icon={faToolbox} text="Projects" />
              <NavItem href="#contactme-section" onClick={handleClick("contactme")} icon={faEnvelope} text="Context me" />
            </HStack>
          </nav>

        </HStack>
      </Box>
    </Box>
  );
};

export default Header;

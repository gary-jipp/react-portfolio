import {useState, useEffect, useRef} from "react";
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

const internals = [
  {
    anchor: "landing",
    icon: faHome,
    path: "/#",
    text: "Home",
  },
  {
    anchor: "projects",
    icon: faToolbox,
    path: "/#projects",
    text: "Projects",
  },
  {
    anchor: "contactme",
    icon: faEnvelope,
    path: "/#contactme",
    text: "Contact me",
  },
];


const NavItem = function(props) {
  return (
    <>
      <a href={props.href} onClick={props.onClick}>
        <HStack>
          <FontAwesomeIcon icon={props.icon} size="1x" />
          <Text fontSize={14} fontWeight="bold">
            {props.text}
          </Text>
        </HStack>
      </a>
    </>
  );
};

const Header = function() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const prevScrollY = useRef(0);

  const handleClick = (anchor) => function(e) {
    e.preventDefault();  // Prevent href from snapping to view too fast
    const id = `${anchor}-section`;
    console.log("Scroll to:  ", id);

    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({top: element.offsetTop, behavior: "smooth"});
    }
  };

  // Determine which dirction the window is scrolling
  const handleScroll = function(e) {
    const scrollY = window.scrollY;
    setIsHeaderHidden(scrollY > prevScrollY.current);
    prevScrollY.current = scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Create list of Social Network links (open in a new window)
  const socialList = socials.map((social) => (
    <a href={social.url} key={social.url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={social.icon} size="2x" />
    </a>
  ));

  // Create list of Internal links
  const listList = internals.map((item) => (
    <NavItem key={item.path}
      href={item.path}
      onClick={handleClick(item.anchor)}
      icon={item.icon}
      text={item.text} />
  ));

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${isHeaderHidden ? "-200px" : 0})`}
      transitionProperty="transform"
      transitionDuration=".4s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              {socialList}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              {listList}
            </HStack>
          </nav>

        </HStack>
      </Box>
    </Box>
  );
};

export default Header;

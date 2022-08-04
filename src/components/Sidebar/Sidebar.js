import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Box,
  Text,
  Image,
  Center,
  Link,
  Flex,
} from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import { MdWorkOutline, MdOutlineWeb } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BsCloudDownload } from 'react-icons/bs';

import './Sidebar.css';
import Me from '../../assets/me.jpg';
import CV from '../../assets/cv.pdf';

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        <HamburgerIcon />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent backgroundColor='lightgray'>
          <DrawerCloseButton />
          <DrawerHeader>
            <Center>
              {/* Image is here */}
              <Image
                src={Me}
                alt='My image'
                boxSize='150px'
                borderRadius='full'
                border='8px solid #BBB'
                filter='grayscale(100%)'
              />
            </Center>

            <Center>
              {/* My Name is here */}
              <Text fontSize='3xl' fontWeight='bolder'>
                Vikash Kumar
              </Text>
            </Center>

            <Flex justifyContent='space-evenly' marginTop='5px'>
              {/* Icons */}
              <Link
                href='https://github.com/vikash9932'
                target='_blank'
                rel='noreferrer'>
                <AiOutlineGithub size='25' />
              </Link>
              <Link
                href='https://www.linkedin.com/in/vikash-kumar-729702103'
                target='_blank'
                rel='noreferrer'>
                <AiOutlineLinkedin size='25' />
              </Link>
              <Link
                href={CV}
                download
                // borderRadius='full'
                // border='8px solid #678780'
                // backgroundColor='#678780'
                // color='white'
              >
                <BsCloudDownload size='25' />
              </Link>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Flex flexDirection='column'>
              <RLink to='/' onClick={onClose}>
                <AiOutlineHome size='25' />
                Home
              </RLink>
              <RLink to='/about' onClick={onClose}>
                <CgProfile size='25' />
                About
              </RLink>
              <RLink to='/contact' onClick={onClose}>
                <AiOutlineMail size='25' />
                Contact
              </RLink>
              <RLink to='/projects' onClick={onClose}>
                <MdOutlineWeb size='25' />
                Projects
              </RLink>
              <RLink to='/resume' onClick={onClose}>
                <MdWorkOutline size='25' />
                Resume
              </RLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const Sidebar = () => {
  return (
    <div>
      Sidebar
      <DrawerExample />
    </div>
  );
};

export default Sidebar;

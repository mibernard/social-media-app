import { Avatar, Box, Button, Flex, Link, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from '../../assets/constants';

import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: 'Home',
      link: '/',
    },
    {
      icon: <SearchLogo />,
      text: 'Search(stub)',
    },
    {
      icon: <NotificationsLogo />,
      text: 'Notifications(stub)',
    },
    {
      icon: <CreatePostLogo />,
      text: 'Create(stub)',
    },
    {
      icon: <Avatar size={'sm'} name='username1' src='/profilepic.png' />,
      text: 'Profile',
      link: '/username1',
    },
  ];

  const { handleLogout, isLoggingOut } = useLogout();
  const navigate = useNavigate();
  const handleGuestContinue = () => {
    navigate('/auth'); // Navigate to home page
  };

  return (
    <Box
      height={'100vh'}
      borderRight={'1px solid'}
      borderColor={'whiteAlpha.300'}
      py={8}
      position={'sticky'}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={'column'} gap={10} w={'full'} height={'full'}>
        <Link to={'/'} as={RouterLink} pl={2} display={{ base: 'none', md: 'block' }} cursor={'pointer'}>
          {/* display base: small screen, md: medium screen and above */}
          <InstagramLogo></InstagramLogo>
        </Link>
        <Link
          to={'/'}
          as={RouterLink}
          p={2}
          display={{ base: 'block', md: 'none' }}
          borderRadius={6}
          _hover={{
            bg: 'whiteAlpha.400',
          }}
          w={10}
          cursor={'pointer'}
        >
          <InstagramMobileLogo></InstagramMobileLogo>
        </Link>
        <Flex direction={'column'} gap={5} cursor={'pointer'}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              hasArrow
              label={item.text}
              placement='right'
              key={index}
              ml={1}
              openDelay={500}
              display={{ base: 'block', md: 'none' }}
            >
              <Link
                display={'flex'}
                to={item.link || null}
                as={RouterLink}
                alignItems={'center'}
                gap={4}
                _hover={{ bg: 'whiteAlpha.400' }}
                borderRadius={6}
                p={2}
                w={{ base: 10, md: 'full' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
              >
                {item.icon}
                <Box display={{ base: 'none', md: 'block' }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>

        {/* LOG OUT */}
        <Tooltip
          hasArrow
          label={'Logout'}
          placement='right'
          ml={1}
          openDelay={500}
          display={{ base: 'block', md: 'none' }}
        >
          <Flex
            // onClick={handleLogout} uncomment this and comment below for not demo purposes
            onClick={handleGuestContinue}
            alignItems={'center'}
            gap={4}
            _hover={{ bg: 'whiteAlpha.400' }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: 'full' }}
            mt={'auto'}
            justifyContent={{ base: 'center', md: 'flex-start' }}
          >
            <BiLogOut size={25}></BiLogOut>
            <Button
              display={{ base: 'none', md: 'block' }}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              isLoading={isLoggingOut}
            >
              Logout
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;

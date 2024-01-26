import { Avatar, Box, Flex, Link, Tooltip } from '@chakra-ui/react';
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

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: 'Home',
      link: '/',
    },
    {
      icon: <SearchLogo />,
      text: 'Search (WIP)',
    },
    {
      icon: <NotificationsLogo />,
      text: 'Notifications (WIP)',
    },
    {
      icon: <CreatePostLogo />,
      text: 'Create (WIP)',
    },
    {
      icon: <Avatar size={'sm'} name='Matthew Bernard' src='/profilepic.png' />,
      text: 'Profile (WIP)',
      link: '/matthewbernard',
    },
  ];

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
        <Tooltip
          hasArrow
          label={'Logout'}
          placement='right'
          ml={1}
          openDelay={500}
          display={{ base: 'block', md: 'none' }}
        >
          <Link
            display={'flex'}
            to={'/auth'}
            as={RouterLink}
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
            <Box display={{ base: 'none', md: 'block' }}>Logout (Finished)</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;

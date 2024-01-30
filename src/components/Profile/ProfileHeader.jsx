import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const ProfileHeader = () => {
  return (
    <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: 'column', sm: 'row' }}>
      <AvatarGroup size={{ base: 'x1', md: '2xl' }} justifySelf={'center'} alignSelf={'flex-start'} mx={'auto'}>
        <Avatar name='Matthew Bernard' src='/profilepic.png' alt='profilepic.png'></Avatar>
      </AvatarGroup>
      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        <Flex
          gap={4}
          direction={{ base: 'column', sm: 'row' }}
          justifyContent={{ base: 'column', sm: 'flex-start' }}
          alignItems={'center'}
          w={'full'}
        >
          <Text fontSize={{ base: 'sm', md: 'lg' }}>mthwbrnd</Text>
          <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
            <Button bg={'white'} color={'black'} _hover={{ bg: 'whiteAlpha.800' }} size={{ base: 'xs', md: 'sm' }}>
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex alignItems={'center'} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: 'x-small', md: 'small' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: 'x-small', md: 'small' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              400
            </Text>
            Followers
          </Text>
          <Text fontSize={{ base: 'x-small', md: 'small' }}>
            <Text as={'span'} fontWeight={'bold'} mr={1}>
              432
            </Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'small'} fontWeight={'bold'}>
            mthwbrnd
          </Text>
        </Flex>
        <Text fontSize={'small'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto id nobis perspiciatis reprehenderit saepe quae,
          delectus autem unde mollitia, magnam tenetur itaque eos? Ut magnam id magni voluptas repellat eos.
        </Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;

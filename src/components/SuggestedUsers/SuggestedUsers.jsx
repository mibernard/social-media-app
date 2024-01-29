import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import SuggestedHeader from './SuggestedHeader';
import SuggestedUser from './SuggestedUser';

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader></SuggestedHeader>
      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
        <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
          Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={'bold'} _hover={{ color: 'gray.500' }} cursor={'pointer'}>
          See All
        </Text>
      </Flex>
      <SuggestedUser name='name1' followers={1234} avatar={'https://bit.ly/dan-abramov'}></SuggestedUser>
      <SuggestedUser></SuggestedUser>
      <SuggestedUser></SuggestedUser>

      <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
        © 2023 Built By{' '}
        <Link href='https://www.linkedin.com/in/matthewbernard/' target='_blank' color={'blue.600'} fontSize={14}>
          Matthew Bernard
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;

import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import FeedPost from './FeedPost';

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={'container.sm'} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size='10' />
              <VStack gap={2} alignItems={'flex-start'}>
                <Skeleton height='10px' width='200px' />
                <Skeleton height='10px' width='200px' />
              </VStack>
            </Flex>
            <Skeleton w={'full'}>
              <Box height={'500px'}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost img='/img1.png' username='username1' avatar='/img1.png'></FeedPost>
          <FeedPost img='/img2.png' username='username2' avatar='/img2.png'></FeedPost>
          <FeedPost img='/img3.png' username='username3' avatar='/img3.png'></FeedPost>
          <FeedPost img='/img4.png' username='username4' avatar='/img4.png'></FeedPost>
        </>
      )}
    </Container>
  );
};

export default FeedPosts;

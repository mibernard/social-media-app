import React from 'react';
import PostHeader from './PostHeader';
import { Box, Image } from '@chakra-ui/react';
import PostFooter from './PostFooter';

const FeedPost = () => {
  return (
    <>
      <PostHeader></PostHeader>
      <Box>
        <Image src='/img1.png' alt='user profile pic'></Image>
      </Box>
      <PostFooter></PostFooter>
    </>
  );
};

export default FeedPost;

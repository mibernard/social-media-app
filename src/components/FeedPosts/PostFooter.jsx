import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/constants';

const PostFooter = ({ username, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };
  return (
    <Box mb={10} mt={'auto'}>
      <Flex alignItems={'center'} gap={4} width={'full'} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} cursor={'pointer'} fontSize={18}>
          {!liked ? <NotificationsLogo></NotificationsLogo> : <UnlikeLogo></UnlikeLogo>}
        </Box>
        <Box cursor={'pointer'} fontSize={18}>
          <CommentLogo></CommentLogo>
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={'small'}>
        {likes} likes
      </Text>

      {!isProfilePage && (
        <>
          <Text fontWeight={700} fontSize={'small'}>
            {username}{' '}
            <Text fontWeight={400} as={'span'}>
              Feeling good
            </Text>
          </Text>
          <Text color={'gray'} fontSize={'small'}>
            View all 1,000 comments
          </Text>
        </>
      )}

      <Flex alignItems={'center'} gap={2} justifyContent={'space-between'} width={'full'}>
        <InputGroup>
          <Input variant={'flushed'} placeholder={'Add a comment...'} fontSize={14}></Input>
          <InputRightElement>
            <Button
              fontSize={14}
              color={'blue.500'}
              fontWeight={600}
              cursor={'pointer'}
              _hover={{ color: 'white' }}
              bg={'transparent'}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;

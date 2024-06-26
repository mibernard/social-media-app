import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import GoogleAuth from './GoogleAuth';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();
  const handleGuestContinue = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <>
      <Box border={'1px solid gray'} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src='/logo.png' h={24} cursor={'pointer'} alt='Instagram'></Image>

          {isLogin ? <Login></Login> : <Signup></Signup>}

          {/* -----------OR------------    my = margin y, w = width */}
          <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'}>
            <Box flex={2} h={'1px'} bg={'gray.400'}></Box>
            <Text mx={1} color={'white'}>
              OR
            </Text>
            <Box flex={2} h={'1px'} bg={'gray.400'}></Box>
          </Flex>

          <GoogleAuth></GoogleAuth>
        </VStack>
      </Box>

      <Box border={'1px solid gray'} borderRadius={4} padding={5}>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </Box>
          <Box onClick={() => setIsLogin(!isLogin)} color={'blue.500'} cursor={'pointer'}>
            {isLogin ? 'Sign Up' : 'Log In '}
          </Box>
        </Flex>
        <Flex justifyContent='center'>
          <Box color={'blue.500'} cursor={'pointer'} onClick={handleGuestContinue}>
            Continue as Guest
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;

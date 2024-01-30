import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Input
        placeholder='Email'
        fontSize={14}
        type='email'
        value={inputs.email}
        size={'sm'}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      ></Input>
      <Input
        placeholder='Username'
        fontSize={14}
        type='text'
        value={inputs.username}
        size={'sm'}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      ></Input>
      <Input
        placeholder='Full Name'
        fontSize={14}
        type='text'
        value={inputs.fullName}
        size={'sm'}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      ></Input>

      <InputGroup>
        <Input
          placeholder='Password'
          fontSize={14}
          type={showPassword ? 'text' : 'password'}
          value={inputs.password}
          size={'sm'}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        ></Input>
        <InputRightElement h={'full'}>
          <Button variant={'ghost'} size={'sm'} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ViewIcon></ViewIcon> : <ViewOffIcon></ViewOffIcon>}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button w={'full'} colorScheme='blue' size={'sm'} fontSize={14}>
        Sign up
      </Button>
    </>
  );
};

export default Signup;

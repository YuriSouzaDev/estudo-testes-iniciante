'use client';

import { LoginFormData } from '@/schemas/login-schema';
import React from 'react';
import LoginForm from './LoginForm';

const LoginWrapper: React.FC = () => {
  const singInWithEmailAndPasswordHandler = async (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <LoginForm
      singInWithEmailAndPasswordHandler={singInWithEmailAndPasswordHandler}
    />
  );
};

export default LoginWrapper;

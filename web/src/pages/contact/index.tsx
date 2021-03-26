import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import { FormControl } from '@chakra-ui/form-control';
import { Button, Input, Textarea, useStyleConfig } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

interface IContactData {
  firstName: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm<IContactData>();
  const styles = useStyleConfig('Button', { variant: 'outline', size: 'lg' });
  const onSubmit = handleSubmit((data) => {
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      data,
      process.env.REACT_APP_USER_ID
    );
  });
  return (
    <Layout title='Contact'>
      <Head>
        <title>Contact</title>
      </Head>
      <form onSubmit={onSubmit}>
        <FormControl id='firstName' isRequired>
          <Input
            placeholder='First name'
            name='firstName'
            size='lg'
            mb='1em'
            ref={register({ required: true })}
          />
        </FormControl>
        <FormControl id='email' isRequired>
          <Input
            placeholder='Email'
            name='email'
            size='lg'
            mb='1em'
            ref={register({ required: true })}
          />
        </FormControl>
        <FormControl id='message' isRequired>
          <Textarea
            placeholder='Message'
            name='message'
            size='lg'
            mb='1em'
            ref={register({ required: true })}
          />
        </FormControl>
        <Button
          type='submit'
          transition='all 0.4s cubic-bezier(.08,.52,.52,1)'
          className='animationOne'
          sx={styles}
        >
          Submit
        </Button>
      </form>
    </Layout>
  );
};

export default Contact;

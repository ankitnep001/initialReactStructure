import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { endpoint } from '@config/endpoint/endpoint'
import { userLoginSchema } from '@config/schema/login'
import EncryptDecrypt from '@functions/encryptDecrypt'
import { yupResolver } from '@hookform/resolvers/yup'
import useAPI from '@hooks/useHook'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface ILogin {
  username: string
  password: string
}
export default function LoginForm() {
  const navigate = useNavigate()
  const { post } = useAPI<ILogin>()
  const { encrypt } = EncryptDecrypt
  const [error, setError] = useState<string>('')

  const onSubmit = async (data: ILogin) => {
    const response = await post({
      url: endpoint.auth,
      data: {
        username: data.username,
        password: data.password,
      },
    })
    if (response.status) {
      const encrypted = encrypt(response.data)
      localStorage.setItem('aaryae_user', encrypted as string)
      setError('')
      navigate('/dashboard', {
        replace: true,
      })
    } else {
      setError(response.message)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILogin>({
    resolver: yupResolver(userLoginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>

          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
            <Text color='red' display={error === '' ? 'none' : 'block'} pb={error === '' ? 0 : 4}>
              {error}
            </Text>
            <Stack spacing={4}>
              <FormControl id='email' isInvalid={errors.username != null}>
                <FormLabel>Username / Email</FormLabel>
                <Input variant={errors?.username != null ? 'error' : ''} {...register('username')} />
                <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
              </FormControl>
              <FormControl id='password' isInvalid={errors.password != null}>
                <FormLabel>Password</FormLabel>
                <Input {...register('password')} variant={errors?.password != null ? 'error' : ''} type='password' />
                <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  type='submit'
                  _hover={{
                    bg: 'blue.500',
                  }}
                  isLoading={isSubmitting}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  )
}

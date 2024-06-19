import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { IoLogInOutline } from 'react-icons/io5'
import { Link as RectLink, useNavigate } from 'react-router-dom'

const Links = [
  { name: 'Home', url: '/' },
  { name: 'About us', url: '/about' },
  { name: 'Help', url: '/help' },
]

const NavLink = ({ children, url }: { children: ReactNode; url: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    as={RectLink}
    to={url}
    whiteSpace={'nowrap'}
  >
    {children}
  </Link>
)

const WithAction = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <RectLink to='/'>
              <Image src={'https://infocarenepal.com/assets/logo-b5c084c7.svg'} width={'100%'} height={'40px'} />
            </RectLink>
            <HStack pt='3' as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link, index) => (
                <NavLink key={index} url={link.url}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              onClick={() => {
                navigate('/login')
              }}
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<IoLogInOutline />}
            >
              Login
            </Button>
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, index) => (
                // <Link key={link.url} children=>
                //   {link.name}
                // </NavLink>
                <a href={link.url} key={index}>
                  {link.name}
                </a>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default WithAction

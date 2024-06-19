import { Box, Flex } from '@chakra-ui/react'
import Footer from '@ui/organisms/Footer'
import Navbar from '@ui/organisms/Navbar'
import { Outlet } from 'react-router-dom'

const LandingPageTemplate = () => {
  return (
    <Flex
      overflowX={'hidden'}
      minH={'100vh'}
      direction={'column'}
      justifyContent={'space-between'}
      position={'relative'}
    >
      <Box position={'sticky'} top='0' zIndex={99} bg='white'>
        <Navbar />
      </Box>
      <Outlet />
      <Footer />
    </Flex>
  )
}

export default LandingPageTemplate

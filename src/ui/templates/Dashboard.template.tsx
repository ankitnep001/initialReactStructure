import { Box, Flex } from '@chakra-ui/react'
import { SideBar } from '@ui/organisms/Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardTemplate = () => {
  return (
    <Box>
      <Flex width={'100%'}>
        <Box height={'100vh'}>
          <SideBar />
        </Box>
        <Box width={'100%'} p='4'>
          <Outlet />
        </Box>
      </Flex>
    </Box>
  )
}

export default DashboardTemplate

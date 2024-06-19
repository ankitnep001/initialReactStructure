import { Box, Heading, List, ListItem } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FiUsers } from 'react-icons/fi'
import { IoSettingsOutline } from 'react-icons/io5'
import { LuLayoutDashboard } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

export const SideBar = () => {
  return (
    <Box width={'250px'} height={'100vh'} bg='gray' p='4'>
      <Heading size={'md'} color={'white'}>
        Admin panel
      </Heading>

      <List pt='10' spacing={3}>
        {itemList?.map((item, index) => (
          <SidebarItem key={index} title={item.title} icon={item.icon} link={item.link} />
        ))}
      </List>
    </Box>
  )
}

const SidebarItem = ({ title, icon, link }: { title: string; icon: ReactNode; link: string }) => {
  const navigate = useNavigate()
  return (
    <ListItem
      display={'flex'}
      gap='2'
      alignItems={'center'}
      sx={{
        svg: {
          mb: '2px',
        },
      }}
      p='2'
      color={'white'}
      cursor={'pointer'}
      onClick={() => navigate(link)}
      _hover={{
        bg: 'gray.700',
        pl: '2',
      }}
      transition={'0.3s ease-in-out'}
    >
      {icon}
      {title}
    </ListItem>
  )
}

const itemList = [
  { title: 'Dashboard', icon: <LuLayoutDashboard />, link: '' },
  { title: 'Admins', icon: <FiUsers />, link: 'admin' },
  { title: 'Settings', icon: <IoSettingsOutline />, link: 'setting' },
]

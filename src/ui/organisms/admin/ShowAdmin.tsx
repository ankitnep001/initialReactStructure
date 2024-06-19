import { Box, Button } from '@chakra-ui/react'
import useAPI from '@hooks/useHook'
import { IAdmin } from '@interface/admin.interface'
import { useEffect } from 'react'

const ShowAdmin = () => {
  const { get } = useAPI<IAdmin>()

  const getAdmin = async () => {
    const response = await get({ url: '/admin' })
    console.log(response)
  }

  useEffect(() => {
    getAdmin()
  }, [])

  return (
    <Box pt='5'>
      <table>
        <thead>
          <tr>
            <th style={{ width: '30px' }}>SN</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Username</th>
            <th>Role</th>
            <th
              style={{
                textAlign: 'center',
              }}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>08012345678</td>
            <td>john</td>
            <td>Admin</td>
            <td>
              <Button size={'sm'} variant={'outline'} colorScheme='green'>
                Edit
              </Button>{' '}
              <Button size={'sm'} variant={'outline'} colorScheme='red'>
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  )
}

export default ShowAdmin

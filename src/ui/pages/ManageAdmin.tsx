import { Button, Flex, Heading } from '@chakra-ui/react'
import AddAdmin from '@ui/organisms/admin/AddAdmin'
import ShowAdmin from '@ui/organisms/admin/ShowAdmin'
import { useState } from 'react'

const ManageAdmin = () => {
  const [showAdmin, setShowAdmin] = useState<boolean>(true)
  return (
    <div>
      <Flex justifyContent={'space-between'}>
        <Heading size={'md'}>Manage Admin</Heading>
        <Button size='sm' variant={'solid'} colorScheme='orange' onClick={() => setShowAdmin(!showAdmin)}>
          {showAdmin ? 'Add Admin' : 'Show Admin'}
        </Button>
      </Flex>
      {showAdmin ? <ShowAdmin /> : <AddAdmin />}
    </div>
  )
}

export default ManageAdmin

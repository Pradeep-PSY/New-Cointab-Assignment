import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteUser, FetchUser } from '../Actions/action'


const Home = () => {

    const { msg, Loading, delete_Loader } = useSelector((state)=> state.app)
    const dispatch = useDispatch();

    const handleClick = () =>{
      dispatch(FetchUser());
    }

    const handleDelete = () =>{
      dispatch(DeleteUser());
    }

   
  return (
    <Box textAlign={'center'} m='3'>
        <Box m='3'>
            <Text>Fetched the Data</Text>
        <Button colorScheme={'blue'} disabled={Loading} onClick={handleClick}>Fetch users</Button>

        </Box>
        <Text>Delete the data</Text>
        <Box m='3'>
        <Button disabled={delete_Loader} colorScheme={'red'} onClick={handleDelete}>Delete users</Button>

        </Box>
        <Box m='3'> 
        <Text>Take to Details Page</Text>
        <Button>User Details</Button>
        </Box>
    </Box>
  )
}

export default Home
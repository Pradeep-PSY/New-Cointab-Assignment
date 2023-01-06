import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import axios from 'axios'

const Home = () => {
    const handleClick = () =>{
        axios.get('https://randomuser.me/api/?results=50').then((res)=>console.log(res.data.results))
    }
  return (
    <Box textAlign={'center'} m='3'>
        <Box m='3'>
            <Text>Fetched the Data</Text>
        <Button onClick={handleClick}>Fetch users</Button>

        </Box>
        <Text>Delete the data</Text>
        <Box m='3'>
        <Button>Delete users</Button>

        </Box>
        <Box m='3'> 
        <Text>Take to Details Page</Text>
        <Button>User Details</Button>
        </Box>
    </Box>
  )
}

export default Home
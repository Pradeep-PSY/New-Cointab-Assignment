import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Text,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    Button,
    Flex,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { GetUser } from '../Actions/action'

const UserDetail = () => {

    const { data } = useSelector((state)=> state.app)
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);


    const handlePrev = () =>{
        setPage(page - 1);
        
    }

    const handleNext = () =>{
        setPage(page + 1);
    }
    useEffect(() => {
     dispatch(GetUser(page))
    //  console.log(data)
    }, [page])
    
    return (
        <>

        {
            data.length==0? (
                <Text align='center' fontSize='2xl'>Add more Data to See More</Text>
            ) : (
                <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>USER DETAIL TABLE</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Gender</Th>
                            <Th>Email</Th>
                            <Th isNumeric>Age</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                       {
                        data && data.map((el)=>{
                            return <Tr key={el.email}>
                                <Td>{el.name.first}</Td>
                                <Td>{el.gender}</Td>
                                <Td>{el.email}</Td>
                                <Td>{el.dob.age}</Td>
                            </Tr>
                        })
                       }
    
                    </Tbody>
    
                </Table>
            </TableContainer>
            )
        }

       

        <Flex justify={'center'} m='4' align={'center'}>
            <Button onClick={handlePrev} disabled={page==0} colorScheme='blue'>Prev</Button>
            <Text m='4'>{page+1}</Text>
            <Button onClick={handleNext} disabled={data.length==0} colorScheme='blue'>Next</Button>
        </Flex>
        </>

    )
}

export default UserDetail
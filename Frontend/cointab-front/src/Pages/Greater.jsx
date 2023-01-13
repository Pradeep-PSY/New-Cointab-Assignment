import { Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Greater = () => {
    const [data, setData] = useState('')
    useEffect(() => {
        axios.get('http://localhost:7000/user/agn')
            .then((res) => setData(res.data.total_data))
    })
    return (
        <Text>
            {data}
        </Text>
    )
}

export default Greater
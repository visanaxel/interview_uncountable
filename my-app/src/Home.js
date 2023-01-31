import React from 'react'
import { ChakraProvider, Stack } from '@chakra-ui/react'
import {Image} from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'


const Home = () => {
    return (
      <div>
         <ChakraProvider>
            <Stack align='center' m={100}>
                <Image boxSize='20%' src="/logo.png"/>
            </Stack>

            <Text align='center' fontSize='5xl'>Axel Visan</Text>
            <Text align='center' m={5} fontSize='xl'>Uncountable - Take Home Assignment</Text>
         </ChakraProvider>
      </div>
    )
  
}
export default Home
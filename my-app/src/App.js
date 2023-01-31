import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ScatterChart from './ScatterChart'
import { Button, ChakraProvider } from '@chakra-ui/react';
import Histogram from './Histogram';
import Home from './Home';
import { useState} from "react";

import {
  Box,
  Flex,
  HStack
} from '@chakra-ui/react';
import Info from './Information';

const Links = {'Home': <Home/>, 'Scatter Plot': <ScatterChart/>, 'Histogram': <Histogram/>, 'Info': <Info/>};

function App() {
  const [page, setPage] = useState(<Home/>)

  return (
    
    <div className="container mt-5">
      <ChakraProvider>
      <Box  boxShadow='outline' px='4' rounded='md' bg='white'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Object.keys(Links).map((link) => (
                <Button
                px={2}
                py={1}
                rounded={'md'}
                value={link}
                onClick={(e) => {
                  setPage(Links[e.target.innerHTML])
              }}
                _hover={{
                  textDecoration: 'none',
                  bg: '#b5b5b3',
                }}>
                {link}
              </Button>
              ))}
            </HStack>
          </HStack>
        </Flex>
      </Box>

      {page}

      </ChakraProvider>
    </div>
  )
}
export default App
import React from 'react'
import { ChakraProvider, FormControl, FormLabel } from '@chakra-ui/react'
import {useEffect, useState} from "react";
import { Select, Stack } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const Info = () => {

    let json = require('./Uncountable Front End Dataset.json');

    const [experiment, setExperiment] = useState(Object.keys(json)[0])
    const [inputData, setInputData] = useState([])
    const [outputData, setOutputData] = useState([])
   
    useEffect(() => {

        const indata = []
    
        for (var key in json[experiment]['inputs']) {
            var input_value = json[experiment]['inputs'][key];            
            indata.push([key, input_value])
        }

        setInputData(indata)

        const outdata = []

        for (var key in json[experiment]['outputs']) {
            var output_value = json[experiment]['outputs'][key];            
            outdata.push([key, output_value])
        }

        setOutputData(outdata)
        
    }, [experiment])

    
    
    let experiments = Object.keys(json)

    return (
      <div>

        <ChakraProvider>
        <Stack m={50}>
        <FormControl>
                <FormLabel>Experiment</FormLabel>

            <Select placeholder={experiment} onChange={(event) => {
                                    setExperiment(event.target.value)
                                }}>
                {experiments.map((elem) => {
                    return (
                        <option value={elem}>{elem}</option>
                    );
                })}
            </Select>
            </FormControl>
            </Stack>
                
            <TableContainer m={50}>
            <Stack direction='row' spacing={2} align='center'>
                <Table size='sm'>
                    <Thead>
                    <Tr>
                        <Th>Input Material</Th>
                        <Th>Input Amount</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {inputData.map((elem) => {
                    return (
                        <Tr>
                            <Td>{elem[0]}</Td>
                            <Td>{elem[1]}</Td>
                        </Tr>
                    );
                })}
                    </Tbody>
                </Table>

                <Table size='sm'>
                    <Thead>
                    <Tr>
                        <Th>Output Material</Th>
                        <Th>Output Amount</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {outputData.map((elem) => {
                    return (
                        <Tr>
                            <Td>{elem[0]}</Td>
                            <Td>{elem[1]}</Td>
                        </Tr>
                    );
                })}
                    </Tbody>
                </Table>
                </Stack>
                </TableContainer>

        

        </ChakraProvider>
      </div>
    )
  
}
export default Info
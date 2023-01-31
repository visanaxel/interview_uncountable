import React from 'react'
import Chart from 'react-google-charts'
import { ChakraProvider, FormControl, FormLabel } from '@chakra-ui/react'
import {useEffect, useState} from "react";
import { Select, Stack } from '@chakra-ui/react'

const ScatterChart = () => {

    const [input, setInput] = useState("Polymer 1")
    const [output, setOutput] = useState("Viscosity")
    const [scatterData, setScatterData] = useState([[input, output]])

    useEffect(() => {

        const data = [
            [input, output],
        ]
    
        for (var key in json) {
            var input_value = json[key]['inputs'][input];
            var output_value = json[key]['outputs'][output];
            
            data.push([input_value, output_value])
        }

        setScatterData(data)
        
    }, [input, output])


    let json = require('./Uncountable Front End Dataset.json');
    
    let input_keys = Object.keys(json[Object.keys(json)[0]]['inputs']);
    let output_keys = Object.keys(json[Object.keys(json)[0]]['outputs']);
    
      const scatterOptions = {
        title: 'Uncountable Front End Dataset',
        hAxis: { title: "Input: " + input},
        vAxis: { title: "Output: " + output},
        legend: 'none'
      }

    return (
      <div>
         

        <ChakraProvider>
        <Stack m={50} direction='row' spacing={2} align='center'>

            <FormControl>
                <FormLabel>Input</FormLabel>

            <Select placeholder={input} onChange={(event) => {
                                    setInput(event.target.value)
                                }}>
                {input_keys.map((elem) => {
                    return (
                        <option value={elem}>{elem}</option>
                    );
                })}
            </Select>
            </FormControl>

            <FormControl>
                <FormLabel>Output</FormLabel>

            <Select placeholder={output} onChange={(event) => {
                                    setOutput(event.target.value)
                                }}>
                {output_keys.map((elem) => {
                    return (
                        <option value={elem}>{elem}</option>
                    );
                })}
            </Select>
            </FormControl>
            </Stack>

            <Stack align='center'>
            <Chart
                width={'700px'}
                height={'420px'}
                chartType="ScatterChart"
                loader={<div>Loading Chart</div>}
                data={scatterData}
                options={scatterOptions}
                rootProps={{ 'data-testid': '1' }}
                />
            </Stack>

        </ChakraProvider>

        
        
       
      </div>
    )
  
}
export default ScatterChart
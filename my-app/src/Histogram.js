import React from 'react'
import Chart from 'react-google-charts'
import { ChakraProvider, FormControl, FormLabel } from '@chakra-ui/react'
import {useEffect, useState} from "react";
import { Select, Stack } from '@chakra-ui/react'

const Histogram = () => {
    let json = require('./Uncountable Front End Dataset.json');

    const [experiment, setExperiment] = useState(Object.keys(json)[0])
    const [inputData, setInputData] = useState([["Material", "Amount"]])
    const [outputData, setOutputData] = useState([["Material", "Amount"]])


    useEffect(() => {

        const indata = [["Material", "Amount"]]
    
        for (var key in json[experiment]['inputs']) {
            var input_value = json[experiment]['inputs'][key];            
            indata.push([key, input_value])
        }

        setInputData(indata)

        const outdata = [["Material", "Amount"]]

        for (var key in json[experiment]['outputs']) {
            var output_value = json[experiment]['outputs'][key];            
            outdata.push([key, output_value])
        }

        setOutputData(outdata)
        
    }, [experiment])


    
    let experiments = Object.keys(json)

      const inputMaterials = {
        title: 'Input Materials',
        hAxis: {
          title: "Material"
        },
        vAxis: {
          title: "Amount",
        },
        legend: 'none'
      };


      const outputMaterials = {
        title: 'Output Materials',
        hAxis: {
          title: "Material"
        },
        vAxis: {
          title: "Amount",
        },
        legend: 'none'
      };

    return (
      <div>
         

        <ChakraProvider>
        <Stack m={50} direction='row' spacing={2} align='center'>

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

        </ChakraProvider>
        
        <Stack m={50} direction='row' spacing={2} align='center'>
        <Chart
            chartType="ColumnChart"
            data={inputData}
            options={inputMaterials}
            width={"100%"}
            height={"400px"}
            />
        
        <Chart
            chartType="ColumnChart"
            data={outputData}
            options={outputMaterials}
            width={"100%"}
            height={"400px"}
            />
        </Stack>
      </div>
    )
  
}
export default Histogram
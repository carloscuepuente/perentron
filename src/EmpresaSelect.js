import React, { useEffect } from 'react'
import useInputState from "./hooks/useInputState"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function EmpresaSelect(props) {
    const [value, setValue] = useInputState("")

    const addCompany = props.addCompany;


    // const handleChange = (event) => {
    //     setValue();
    //     addCompany(value);
    //     console.log(value)
    // };


    // console.log(value)

    useEffect(() => {

        function updateAppState() {
            addCompany(value)
        };
        updateAppState()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])


    return (
        <FormControl>
            <FormLabel id="demo-empresa-Select">Seleccione Empresa</FormLabel>
            <RadioGroup
                aria-labelledby="demo-empresa-Select"
                name="empresa-Select"
                value={value}
                onChange={setValue}

            >
                <FormControlLabel value="ryanair" control={<Radio />} label="Ryanair" />
                <FormControlLabel value="iHandling" control={<Radio />} label="iHandling" />
            </RadioGroup>
        </FormControl>
    )
}

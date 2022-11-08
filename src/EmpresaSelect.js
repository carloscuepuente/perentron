import React, { useEffect } from 'react'
import useInputState from "./hooks/useInputState";
import useToggle from "./hooks/useToggle"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



export default function EmpresaSelect(props) {
    const [value, setValue] = useInputState("");

    const [isRyanair, setIsRyanair] = useToggle();
    const [isIhandling, setIsIhandling] = useToggle();

    const addCompany = props.addCompany;
    const addCompanyBoolean = props.addCompanyBoolean;


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

        updateAppState();
        if (value === "ryanair") {
            setIsRyanair()

        }
        if (value === "iHandling") {
            setIsIhandling()
        }

        if (value === "iHandling" && isRyanair) {
            setIsRyanair()
        }

        if (value === "ryanair" && isIhandling) {
            setIsIhandling()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    useEffect(() => {
        function updateCompanyBoolean() {
            addCompanyBoolean(isRyanair, isIhandling)
        }
        updateCompanyBoolean()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRyanair, isIhandling])

    return (
        <FormControl fullWidth sx={{ marginTop: "1.5rem" }} >
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

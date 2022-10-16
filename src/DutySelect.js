import React, { useEffect } from 'react'
import useInputState from './hooks/useInputState';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DutySelect(props) {
    const [supervisor, setSupervisor] = useInputState("");

    const addSupervisor = props.addSupervisor

    // const handleChange = (event) => {
    //     setSupervisor(event.target.value);
    // };


    useEffect(() => {
        function updateAppState() {
            addSupervisor(supervisor)
        };
        updateAppState()

        // console.log("corri dutySelect")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [supervisor])

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="supervisor-select-label">Ramco/Duty</InputLabel>
                <Select
                    labelId="supervisor-select-label"
                    id="supervisor-select"
                    value={supervisor}
                    label="Supervisor"
                    onChange={setSupervisor}
                >

                    <MenuItem value={"Ramco1"}>Ramco1</MenuItem>
                    <MenuItem value={"Ramco2"}>Ramco2</MenuItem>
                    <MenuItem value={"Ramco3"}>Ramco3</MenuItem>
                    <MenuItem value={"Duty1"}>Duty1</MenuItem>
                    <MenuItem value={"Duty2"}>Duty2</MenuItem>
                    <MenuItem value={"Duty3"}>Duty3</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

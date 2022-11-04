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

                    <MenuItem value={"Alverto Couceiro"}>Alverto Couceiro</MenuItem>
                    <MenuItem value={"Pablo Mendez"}>Pablo Mendez</MenuItem>
                    <MenuItem value={"Alberto Pereiro"}>Alberto Pereiro</MenuItem>
                    <MenuItem value={"Sergio Paderne"}>Sergio Paderne</MenuItem>
                    <MenuItem value={"Manuel Rilo"}>Manuel Rilo</MenuItem>
                    <MenuItem value={"Andres Rico"}>Andres Rico</MenuItem>
                    <MenuItem value={"Iñaqui Crespo"}>Iñaqui Crespo</MenuItem>
                    <MenuItem value={"Elena Camaño"}>Elena Camaño</MenuItem>
                    <MenuItem value={"Paloma Quevedo"}>Paloma Quevedo</MenuItem>
                    <MenuItem value={"Beatriz Rivas"}>Beatriz Rivas</MenuItem>
                    <MenuItem value={"Olaya Barral"}>Olaya Barral</MenuItem>
                    <MenuItem value={"Raquel Fernandez"}>Raquel Fernandez</MenuItem>
                    <MenuItem value={"Clara Alvarez"}>Clara Alvarez</MenuItem>
                    <MenuItem value={"Alba Fernandez"}>Alba Fernandez</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

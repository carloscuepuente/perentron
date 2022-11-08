import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import useInputState from './hooks/useInputState';

export default function MotivoInput(props) {

    const [motivo, setMotivo] = useInputState("");
    const [chekedMotivo, setChekedMotivo] = useState({
        impuntualAC: false,
        retrasoRel: false,
        ausencia: false,
        otraCircus: false
    })

    const addMotivo = props.addMotivo;
    const addChekedMotivo = props.addChekedMotivo;
    const { impuntualAC, retrasoRel, ausencia, otraCircus } = chekedMotivo;

    const handleChange = (event) => {
        setChekedMotivo({ ...chekedMotivo, [event.target.name]: event.target.checked })
    }

    // considera poner este use effect detras de un debouncer
    useEffect(() => {
        addMotivo(motivo)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [motivo])

    // const [motivoOptions, setMotivoOption] = useInputState([])

    useEffect(() => {
        addChekedMotivo({ impuntualAC, retrasoRel, ausencia, otraCircus })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chekedMotivo])

    return (
        <Box sx={{ marginTop: "1.5rem" }}>
            <FormControl component="fieldset" variant='standard'>
                <FormLabel component="legend">Causa de la perentoria</FormLabel>
                <FormGroup>
                    <FormControlLabel control={<Checkbox checked={impuntualAC} onChange={handleChange} name="impuntualAC"></Checkbox>} label="Impuntualidad de Aeronaves" />
                    <FormControlLabel control={<Checkbox checked={retrasoRel} onChange={handleChange} name="retrasoRel"></Checkbox>} label="Retraso en relevo de turno" />
                    <FormControlLabel control={<Checkbox checked={ausencia} onChange={handleChange} name="ausencia"></Checkbox>} label="Ausencia imprevista de trabajadores" />
                    <FormControlLabel control={<Checkbox checked={otraCircus} onChange={handleChange} name="otraCircus"></Checkbox>} label="Otra circunstancia excepcional" />
                </FormGroup>
            </FormControl>

            <TextField sx={{ marginTop: "1.5rem" }} multiline fullWidth id="outlined-basic" value={motivo} onChange={setMotivo} label="Motivo" variant="outlined" />
        </Box>
    )
}

import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import useInputState from './hooks/useInputState';

export default function MotivoInput(props) {

    const [motivo, setMotivo] = useInputState("")

    const addMotivo = props.addMotivo

    // considera poner este use effect detras de un debouncer
    useEffect(() => {
        addMotivo(motivo)
        // console.log("corri 1 vez")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [motivo])

    // const [motivoOptions, setMotivoOption] = useInputState([])

    return (
        <Box>
            <Typography>{motivo}</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox></Checkbox>} label="Inpuntualidad de Aeronaves" />
                <FormControlLabel control={<Checkbox></Checkbox>} label="Retraso en relevo de turno" />
                <FormControlLabel control={<Checkbox></Checkbox>} label="Ausencia imprevista de trabajadores" />
                <FormControlLabel control={<Checkbox></Checkbox>} label="Otra circunstancia excepcional" />
            </FormGroup>
            <TextField multiline fullWidth id="outlined-basic" value={motivo} onChange={setMotivo} label="Motivo" variant="outlined" />
        </Box>
    )
}

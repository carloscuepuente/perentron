import React, { useState } from 'react'
import { ListItem, ListItemSecondaryAction, ListItemText, TextField, IconButton } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker'
// import { LocalizationProvider } from '@mui/x-date-pickers'
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// import moment from 'moment';

export default function EmpleadoItem(props) {

    const nombre = props.nombre;
    const id = props.id
    const addTurno = props.addTurno
    // turnoProgramadoIni=props.turnoProgramadoIni
    // turnoProgramadoFin=props.turnoProgramadoFin
    // turnoSalida=props.turnoSalida

    const [turnoProgramadoIni, setTurnoProgramadoIni] = useState(props.turnoProgramadoIni)
    const [turnoProgramadoFin, setTurnoProgramadoFin] = useState(props.turnoProgramadoFin)
    // const [turnoProgramadoIni, setTurnoProgramadoIni] = useState("")
    const [turnoRealizadoFin, setTurnoRealizadoFin] = useState(props.turnoSalida)

    const handleIniChange = (event) => {
        setTurnoProgramadoIni(event.target.value)
    }

    const handleFinChange = (event) => {
        setTurnoProgramadoFin(event.target.value)
    }

    const handleRealizadoChange = (event) => {
        setTurnoRealizadoFin(event.target.value)
    }

    const handleSaveClick = () => {
        addTurno(id, turnoProgramadoIni, turnoProgramadoFin, turnoRealizadoFin)
    }

    let renderThis = <React.Fragment>

        <TextField
            value={turnoProgramadoIni}
            onChange={handleIniChange}
            id="turnoProgramadoIni"
            label="Inicio Programado"
            type="time"
            InputLabelProps={{
                shrink: true,
            }}
            sx={{ width: 150 }}
        />
        <TextField
            value={turnoProgramadoFin}
            onChange={handleFinChange}
            id="turnoProgramadoFin"
            label="Fin Programado"
            type="time"
            InputLabelProps={{
                shrink: true,
            }}
            sx={{ width: 150 }}
        />
        <TextField
            value={turnoRealizadoFin}
            // onBlur={handleRealizadoChange}
            onChange={handleRealizadoChange}
            id="turnoRealizadoFin"
            label="Hora Salida"
            type="time"
            InputLabelProps={{
                shrink: true,
            }}
            sx={{ width: 150 }}
        />


    </React.Fragment>


    // let renderThis = <React.Fragment>
    //     <LocalizationProvider dateAdapter={AdapterMoment}>
    //         <TimePicker ampm={false}
    //             label="Time"
    //             value={turnoProgramadoIni}
    //             onChange={handleChange}
    //             renderInput={(params) => <TextField {...params} />}
    //         />
    //         <TimePicker ampm={false}
    //             label="Time"
    //             value={turnoProgramadoIni}
    //             onChange={handleChange}
    //             renderInput={(params) => <TextField {...params} />}
    //         />
    //         <TimePicker ampm={false}
    //             label="Time"
    //             value={turnoProgramadoIni}
    //             onChange={handleChange}
    //             renderInput={(params) => <TextField {...params} />}
    //         />
    //         <TimePicker ampm={false}
    //             label="Time"
    //             value={turnoProgramadoIni}
    //             onChange={handleChange}
    //             renderInput={(params) => <TextField {...params} />}
    //         />
    //     </LocalizationProvider>

    // </React.Fragment>

    return (
        <React.Fragment>
            <ListItem sx={{ margin: "1rem", padding: "1rem" }} alignItems='flex-start'>
                <ListItemText primary={nombre} />

                <ListItemSecondaryAction sx={{ padding: 5 }} >
                    {renderThis}

                    <IconButton edge="end" onClick={handleSaveClick}>
                        <SaveIcon />
                    </IconButton>
                </ListItemSecondaryAction>


            </ListItem>
        </React.Fragment>

    )
}

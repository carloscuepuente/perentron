import React, { useState } from 'react'
// import useInputState from './hooks/useInputState'

// import debounce from './utils'

import optionsForAutocomplete from './optionsForAutocomplete';

import { TextField, Autocomplete } from '@mui/material'


// const optionsForAutocomplete = ["Nombre", "Carlos Cue", "Ruben Galvez", "David Boo", "Pablo Mendez"]

export default function GroupGenerator(props) {
    // const defaultGroupInfo = [
    //     {
    //         id: "uuidv4()",
    //         nombre: "Carlos Cue",
    //         turnoProgramado: "15:05/18:35",
    //         turnoRealizado: "15:05/19:35"
    //     },
    //     {
    //         nombre: "trabajador 2",
    //         turnoProgramado: "15:05/18:35",
    //         turnoRealizado: "15:05/19:35"
    //     },
    //     {
    //         nombre: "trabajador 3",
    //         turnoProgramado: "15:05/18:35",
    //         turnoRealizado: "15:05/19:35"
    //     },
    // ]

    // controla el nombre y la funcion para cambiar el state de este componente
    const [empleado, empleadoChange] = useState(optionsForAutocomplete[0]);

    // para controlar el valor que sale en el textbox (aka lo que se ve en pantalla renderizado)
    const [inputValue, setInputValue] = useState("")


    const addEmpleado = props.addEmpleado

    // useEffect(() => {
    //     addEmpleado(empleado)
    // }, [empleado])

    return (
        <div>
            <Autocomplete
                multiple={false}
                value={empleado}
                onChange={(event, newValue) => {
                    // agregada la condicional para prevenir la generacion de item list con valor null
                    if (newValue !== null) {
                        empleadoChange(newValue);
                        addEmpleado(newValue)
                    }
                }}
                onClose={(event) => {
                    // alert("sasd")
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="empleado-autocomplete"
                options={optionsForAutocomplete}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Nombre Empleado" />}
            />


        </div>
    )
}

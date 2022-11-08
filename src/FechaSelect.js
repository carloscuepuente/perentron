import React, { useEffect } from 'react'
import { useState } from 'react';

import moment from 'moment';


import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

export default function FechaSelect(props) {

    const addDate = props.addDate

    const [date, setDate] = useState("");
    // const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

    const parseNewDate = (event) => {
        let newDate = moment(event.target.value).format("YYYY-MM-DD");
        // console.log(newDate)
        setDate(newDate)
    };

    useEffect(() => {
        // console.log(date)
        addDate(moment(date).format("DD/MM/YYYY"))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [date])

    return (
        <FormControl fullWidth>
            <TextField
                id="date"
                label="Fecha"
                type="date"
                onChange={parseNewDate}
                sx={{ width: 220 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </FormControl>

    )
}

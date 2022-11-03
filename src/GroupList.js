import { List } from '@mui/material'
import React from 'react'
import EmpleadoItem from './EmpleadoItem'
import { v4 as uuidv4 } from 'uuid';

export default function GroupList(props) {

    if (props.groupInfo.length)
        return (
            <List>
                {props.groupInfo.map((item) => (
                    <React.Fragment key={uuidv4()}>
                        <EmpleadoItem nombre={item.nombre}
                            id={item.id}
                            turnoProgramadoIni={item.turnoProgramadoIni}
                            turnoProgramadoFin={item.turnoProgramadoFin}
                            turnoSalida={item.turnoSalida}
                            addTurno={props.addTurno}
                        />
                    </React.Fragment>
                )
                )}

                {/* <ListItem sx={{ margin: "1rem", padding: "1rem" }} alignItems='flex-start'>
                    <ListItemText primary={"Guardar Grupo"} />

                    <ListItemSecondaryAction sx={{ padding: 5 }} >


                        <IconButton edge="end" >
                            <SaveIcon />
                        </IconButton>
                    </ListItemSecondaryAction>


                </ListItem> */}

            </List>
        )
}

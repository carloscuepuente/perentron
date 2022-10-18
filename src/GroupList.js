import { List, ListItem } from '@mui/material'
import React from 'react'

export default function GroupList(props) {

    if (props.groupInfo.length)
        return (
            <List>
                {props.groupInfo.map((item) => (<ListItem>
                    {item.nombre}
                </ListItem>)

                )}

            </List>
        )
}

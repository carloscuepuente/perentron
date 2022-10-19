import React, { useState } from 'react'
// import useInputSelect from "./hooks/useInputState"

import { v4 as uuidv4 } from 'uuid';

import DutySelect from './DutySelect'
import EmpresaSelect from './EmpresaSelect'
import GroupGenerator from './GroupGenerator'
import MotivoInput from './MotivoInput'
import GroupList from './GroupList';



export default function PerentronApp() {

    // const defaultPerentoriaInfo = {

    //     compañia: "",
    //     supervisor: "Ramco1",
    //     motivo: "FR6333 DLY:93/0027",
    //     fecha: "23/08/2022",
    //     
    // }

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

    // informacion que es comun a todos los del grupo
    const [comonGroupInfo, setComonGroupInfo] = useState("")

    // informacion que es particular para cada trabajador
    // const [groupInfo, setGroupInfo] = useState(defaultGroupInfo)
    const [groupInfo, setGroupInfo] = useState("")


    // console.log(comonGroupInfo)

    const addCompany = (compañia) => {
        // console.log("corri")
        // console.log(compañia)
        setComonGroupInfo({ ...comonGroupInfo, compañia: compañia })
    };

    const addSupervisor = (supervisor) => {
        setComonGroupInfo({ ...comonGroupInfo, supervisor: supervisor })
    };

    const addMotivo = (motivo) => {
        setComonGroupInfo({ ...comonGroupInfo, motivo: motivo })
    };

    const addEmpleado = (empleado) => {
        setGroupInfo([...groupInfo, { id: uuidv4(), nombre: empleado }])
        // setGroupInfo([...groupInfo, { id: uuidv4(), nombre: empleado, turnoProgramado: turnoProgramado, turnoRealizado: turnoRealizado }])
    }

    // const addTurnoProgramadoIni = (id, turnoProgramadoIni) => {
    //     const updatedGroupInfo = groupInfo.map(group =>
    //         group.id === id ? { ...group, turnoProgramadoIni: turnoProgramadoIni } : group)
    //     setGroupInfo(updatedGroupInfo)
    // }
    // const addTurnoProgramadoFin = (id, turnoProgramadoFin) => {
    //     const updatedGroupInfo = groupInfo.map(group =>
    //         group.id === id ? { ...group, turnoProgramadoFin: turnoProgramadoFin } : group)
    //     setGroupInfo(updatedGroupInfo)
    // }
    // const addTurnoSalida = (id, turnoSalida) => {
    //     const updatedGroupInfo = groupInfo.map(group =>
    //         group.id === id ? { ...group, turnoSalida: turnoSalida } : group)
    //     setGroupInfo(updatedGroupInfo)
    // }

    const addTurno = (id, turnoProgramadoIni, turnoProgramadoFin, turnoSalida) => {
        const updatedGroupInfo = groupInfo.map(group =>
            group.id === id ? {
                ...group,
                turnoProgramadoIni: turnoProgramadoIni,
                turnoProgramadoFin: turnoProgramadoFin,
                turnoSalida: turnoSalida
            } : group)
        setGroupInfo(updatedGroupInfo)
    }

    return (
        <React.Fragment>
            <EmpresaSelect addCompany={addCompany} />
            <DutySelect addSupervisor={addSupervisor} />
            <MotivoInput addMotivo={addMotivo} />

            <GroupGenerator addEmpleado={addEmpleado} />

            <GroupList groupInfo={groupInfo}
                addTurno={addTurno} />


        </React.Fragment>


    )
}

import React, { useState } from 'react'
// import useInputSelect from "./hooks/useInputState"

import DutySelect from './DutySelect'
import EmpresaSelect from './EmpresaSelect'
import MotivoInput from './MotivoInput'

export default function PerentronApp() {

    // const defaultPerentoriaGroup = {

    //     compañia: "",
    //     supervisor: "Ramco1",
    //     motivo: "FR6333 DLY:93/0027",
    //     fecha: "23/08/2022",
    //     grupo: [
    //         {
    //             nombre: "Carlos Cue",
    //             turnoProgramado: "15:05/18:35",
    //             turnoRealizado: "15:05/19:35"
    //         },
    //         {
    //             nombre: "trabajador 2",
    //             turnoProgramado: "15:05/18:35",
    //             turnoRealizado: "15:05/19:35"
    //         },
    //         {
    //             nombre: "trabajador 3",
    //             turnoProgramado: "15:05/18:35",
    //             turnoRealizado: "15:05/19:35"
    //         },
    //     ]
    // }

    const [groupInfo, setGroupInfo] = useState("")

    // useEffect(() => {
    //     console.log(groupInfo)
    // })

    console.log(groupInfo)

    const addCompany = (compañia) => {
        // console.log("corri")
        // console.log(compañia)
        setGroupInfo({ ...groupInfo, compañia: compañia })
    }

    const addSupervisor = (supervisor) => {
        setGroupInfo({ ...groupInfo, supervisor: supervisor })
    }

    const addMotivo = (motivo) => {
        setGroupInfo({ ...groupInfo, motivo: motivo })
    }

    return (
        <React.Fragment>
            <EmpresaSelect addCompany={addCompany} />
            <DutySelect addSupervisor={addSupervisor} />
            <MotivoInput addMotivo={addMotivo} />
        </React.Fragment>


    )
}

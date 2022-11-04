// react related
import React, { useState } from 'react'
// import useInputSelect from "./hooks/useInputState"

// componentes de material ui
import PrintIcon from '@mui/icons-material/Print';
import { Button } from '@mui/material';

// librerias
import { v4 as uuidv4 } from 'uuid';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from "file-saver"

// componentes propios
import DutySelect from './DutySelect'
import EmpresaSelect from './EmpresaSelect'
import GroupGenerator from './GroupGenerator'
import MotivoInput from './MotivoInput'
import GroupList from './GroupList';

const documento = require("./AH-HR-R07-REGISTRO-HORAS-PERENTORIAS.docx")

// 

// perentron-proyect\src\AH-HR-R07 REGISTRO HORAS PERENTORIAS.docx

// funcion para cargar el documento
function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback)
}


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
    // esto es un array like this
    // [
    //     {
    //         "id": "87a1f6ab-ce9c-4121-8e37-ba7d8df46454",
    //         "nombre": "Enrique Ayguavives",
    //         "turnoProgramadoIni": "20:00",
    //         "turnoProgramadoFin": "21:00",
    //         "turnoSalida": "22:00"
    //     },
    //     {
    //         "id": "dd511c5e-1035-47a5-bcec-d5d6757f400a",
    //         "nombre": "Tamara Macenlle",
    //         "turnoProgramadoIni": "23:00",
    //         "turnoProgramadoFin": "00:00",
    //         "turnoSalida": "01:00"
    //     }
    // ]

    // console.log(groupInfo)

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

    // [
    //     {
    //         "id": "87a1f6ab-ce9c-4121-8e37-ba7d8df46454",
    //         "nombre": "Enrique Ayguavives",
    //         "turnoProgramadoIni": "20:00",
    //         "turnoProgramadoFin": "21:00",
    //         "turnoSalida": "22:00"
    //     },
    //     {
    //         "id": "dd511c5e-1035-47a5-bcec-d5d6757f400a",
    //         "nombre": "Tamara Macenlle",
    //         "turnoProgramadoIni": "23:00",
    //         "turnoProgramadoFin": "00:00",
    //         "turnoSalida": "01:00"
    //     }
    // ]
    const saveOnWord = () => {
        // "perentron-proyect/src/AH-HR-R07-REGISTRO-HORAS-PERENTORIAS.docx"
        // https://docxtemplater.com/tag-example.docx
        for (let i = 0; i < groupInfo.length; i++) {
            loadFile(documento,
                function (error, content) {
                    if (error) {
                        throw error;
                    }
                    let zip = new PizZip(content);
                    // let zip = new PizZip();
                    // zip.file("AH-HR-R07-REGISTRO-HORAS-PERENTORIAS.docx", content, { binary: true })
                    let doc = new Docxtemplater(zip, {
                        paragraphLoop: true,
                        linebreaks: true,
                    });
                    doc.setData({
                        supervisor: comonGroupInfo.supervisor,
                        motivo: comonGroupInfo.motivo,
                        nombre: groupInfo[i].nombre,
                        inicio: groupInfo[i].turnoProgramadoIni,
                        fin: groupInfo[i].turnoProgramadoFin,
                        salida: groupInfo[i].turnoSalida,


                    });
                    try {
                        doc.render();
                    } catch (error) {
                        // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
                        function replaceErrors(key, value) {
                            if (value instanceof Error) {
                                return Object.getOwnPropertyNames(value).reduce(function (
                                    error,
                                    key
                                ) {
                                    error[key] = value[key];
                                    return error;
                                },
                                    {});
                            }
                            return value;
                        }
                        console.log(JSON.stringify({ error: error }, replaceErrors));

                        if (error.properties && error.properties.errors instanceof Array) {
                            const errorMessages = error.properties.errors
                                .map(function (error) {
                                    return error.properties.explanation;
                                })
                                .join('\n');
                            console.log('errorMessages', errorMessages);
                            // errorMessages is a humanly readable message looking like this :
                            // 'The tag beginning with "foobar" is unopened'
                        }
                        throw error;
                    }

                    let out = doc.getZip().generate({
                        type: "blob",
                        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                    });
                    saveAs(out, `AH-HR-R07-REGISTRO-HORAS-PERENTORIAS${groupInfo[0].nombre}.docx`)
                })
        }
        // loadFile(documento,
        //     function (error, content) {
        //         if (error) {
        //             throw error;
        //         }
        //         let zip = new PizZip(content);
        //         // let zip = new PizZip();
        //         // zip.file("AH-HR-R07-REGISTRO-HORAS-PERENTORIAS.docx", content, { binary: true })
        //         let doc = new Docxtemplater(zip, {
        //             paragraphLoop: true,
        //             linebreaks: true,
        //         });
        //         doc.setData({
        //             supervisor: comonGroupInfo.supervisor,
        //             motivo: comonGroupInfo.motivo,
        //             nombre: groupInfo[0].nombre,
        //             inicio: groupInfo[0].turnoProgramadoIni,
        //             fin: groupInfo[0].turnoProgramadoFin,
        //             salida: groupInfo[0].turnoSalida,


        //         });
        //         try {
        //             doc.render();
        //         } catch (error) {
        //             // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
        //             function replaceErrors(key, value) {
        //                 if (value instanceof Error) {
        //                     return Object.getOwnPropertyNames(value).reduce(function (
        //                         error,
        //                         key
        //                     ) {
        //                         error[key] = value[key];
        //                         return error;
        //                     },
        //                         {});
        //                 }
        //                 return value;
        //             }
        //             console.log(JSON.stringify({ error: error }, replaceErrors));

        //             if (error.properties && error.properties.errors instanceof Array) {
        //                 const errorMessages = error.properties.errors
        //                     .map(function (error) {
        //                         return error.properties.explanation;
        //                     })
        //                     .join('\n');
        //                 console.log('errorMessages', errorMessages);
        //                 // errorMessages is a humanly readable message looking like this :
        //                 // 'The tag beginning with "foobar" is unopened'
        //             }
        //             throw error;
        //         }

        //         let out = doc.getZip().generate({
        //             type: "blob",
        //             mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        //         });
        //         saveAs(out, `AH-HR-R07-REGISTRO-HORAS-PERENTORIAS${groupInfo[0].nombre}.docx`)
        //     })

        // alert("correr codigo de docxtemplater pizzip")
        console.log(comonGroupInfo)
        console.log(groupInfo)
    }
    return (
        <React.Fragment>
            <EmpresaSelect addCompany={addCompany} />
            <DutySelect addSupervisor={addSupervisor} />
            <MotivoInput addMotivo={addMotivo} />

            <GroupGenerator addEmpleado={addEmpleado} />

            <GroupList groupInfo={groupInfo}
                addTurno={addTurno} />

            <Button variant="contained" onClick={saveOnWord} endIcon={<PrintIcon />}>
                Guardar para imprimir
            </Button>

        </React.Fragment>


    )
}

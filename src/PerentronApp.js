// react related
import React, { useState } from 'react'
// import useInputSelect from "./hooks/useInputState"

// componentes de material ui
import PrintIcon from '@mui/icons-material/Print';
import { Button, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';

// librerias
import { v4 as uuidv4 } from 'uuid';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from "file-saver";
import moment from 'moment';

// componentes propios
import FechaSelect from './FechaSelect';
import DutySelect from './DutySelect'
// import EmpresaSelect from './EmpresaSelect'
import GroupGenerator from './GroupGenerator'
// import MotivoInput from './MotivoInput'
import GroupList from './GroupList';
import MotivoAccordion from './MotivoAccordion';

const documento = require("./AH-HR-R07-REGISTRO-HORAS-PERENTORIAS.docx")
// TODO simbolitos de cuadrados ☐  ☒
// {^isIhandling }☐{/ isIhandling}

// funcion para cargar el documento
function loadFile(url, callback) {
    PizZipUtils.getBinaryContent(url, callback)
}
const parseTime = function (timeToParse) {
    //parse a string into a date format using moments
    const parsedTime = moment(`1989-08-23 ${timeToParse}`, `YYYY-MM-DD HH:mm`)
    return parsedTime
};

const getDuration = function (time1, time2) {
    // para usar hay que pasarle primero el tiempo mas que ocurra primero y luego el de despues
    let x = parseTime(time1);
    let y = parseTime(time2);
    let diference = x.diff(y) //diference es una diferencia en milisegundos
    // si el momento 1 es antes que el momento 2 la diferencia es negativa
    if (diference < 0) {
        let result = moment.duration(diference)
        let entero = Math.floor(-parseFloat(result.as("hours")));
        let decimal = (-parseFloat(result.as("hours")) % 1).toFixed(2).substring(2)


        if (parseInt(decimal) < 25) {
            return `${entero},00`
        }
        if (parseInt(decimal) >= 25 && parseInt(decimal) < 50) {
            return `${entero},25`
        }
        if (parseInt(decimal) >= 50 && parseInt(decimal) < 75) {
            return `${entero},50`
        }
        if (parseInt(decimal) >= 75 && parseInt(decimal) < 100) {
            return `${entero},75`
        }
    };
    if (diference > 0) {
        x = moment(`1989-08-23 ${time1}`, `YYYY-MM-DD HH:mm`);
        y = moment(`1989-08-24 ${time2}`, `YYYY-MM-DD HH:mm`);

        let newdiff = x.diff(y);
        let result = moment.duration(newdiff);
        // console.log(result)
        let entero = Math.floor(-parseFloat(result.as("hours")));
        let decimal = (-parseFloat(result.as("hours")) % 1).toFixed(2).substring(2)
        // console.log(entero)
        if (parseInt(decimal) < 25) {
            return `${entero},00`
        }
        if (parseInt(decimal) >= 25 && parseInt(decimal) < 50) {
            return `${entero},25`
        }
        if (parseInt(decimal) >= 50 && parseInt(decimal) < 75) {
            return `${entero},50`
        }
        if (parseInt(decimal) >= 75 && parseInt(decimal) < 100) {
            return `${entero},75`
        }
    };

};

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

    // const addCompany = (compañia) => {
    //     // console.log(compañia)
    //     setComonGroupInfo({ ...comonGroupInfo, compañia: compañia })
    // };

    // const addCompanyBoolean = (isRyanair, isIhandling) => {
    //     // console.log(isRyanair, isIhandling)
    //     setComonGroupInfo({ ...comonGroupInfo, isRyanair, isIhandling })
    // }

    const addDate = (date) => {
        setComonGroupInfo({ ...comonGroupInfo, fecha: date })
    }

    const addSupervisor = (supervisor) => {
        setComonGroupInfo({ ...comonGroupInfo, supervisor: supervisor })
    };

    // descontinuada por cambio de las feactures para agregar el motivo
    // const addChekedMotivo = (...checkedMotivo) => {
    //     setComonGroupInfo({ ...comonGroupInfo, checkedMotivo })
    // }

    // cambiada para agregar al comonGroupInfo los diferentes motivos del nuevo formato word
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
                turnoSalida: turnoSalida,
                peren: getDuration(turnoProgramadoFin, turnoSalida)
            } : group)
        setGroupInfo(updatedGroupInfo)
    };



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
                        isRyanair: comonGroupInfo.isRyanair,
                        isIhandling: comonGroupInfo.isIhandling,
                        fecha: comonGroupInfo.fecha,
                        flightNumber: comonGroupInfo.motivo.flightNumber,
                        std: comonGroupInfo.motivo.std,
                        atd: comonGroupInfo.motivo.atd,
                        registration: comonGroupInfo.motivo.registration,
                        cargoRelevada: comonGroupInfo.motivo.cargoPersonaRelevada,
                        nombreRelevada: comonGroupInfo.motivo.nombreRelevada,
                        motivoRelevada: comonGroupInfo.motivo.motivoRelevada,
                        cargoAusente: comonGroupInfo.motivo.cargoPersonaAusente,
                        nombreAusente: comonGroupInfo.motivo.nombreAusente,
                        motivoAusente: comonGroupInfo.motivo.motivoAusente,
                        motivoServicio: comonGroupInfo.motivo.motivoAusente,
                        motivoExcepcional: comonGroupInfo.motivo.motivoExcepcional,
                        // motivo: comonGroupInfo.motivo,
                        // impuntualidad: comonGroupInfo.checkedMotivo[0].impuntualAC ? "☒" : "☐",
                        // retraso: comonGroupInfo.checkedMotivo[0].retrasoRel ? "☒" : "☐",
                        // ausencia: comonGroupInfo.checkedMotivo[0].ausencia ? "☒" : "☐",
                        // otra: comonGroupInfo.checkedMotivo[0].otraCircus ? "☒" : "☐",
                        nombre: groupInfo[i].nombre,
                        inicio: groupInfo[i].turnoProgramadoIni,
                        fin: groupInfo[i].turnoProgramadoFin,
                        salida: groupInfo[i].turnoSalida ? groupInfo[i].turnoSalida : "",
                        peren: groupInfo[i].turnoSalida ? groupInfo[i].peren : ""

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
                    saveAs(out, `AH-HR-R07-REGISTRO-HORAS-PERENTORIAS${groupInfo[i].nombre}.docx`)
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
        // console.log(comonGroupInfo)
        // console.log(groupInfo)
    }
    return (
        <React.Fragment>
            <Paper
                style={{
                    padding: 0,
                    margin: 0,
                    height: "100vh",
                    width: "100vw",
                    backgroundColor: "#fafafa"
                }}>

                <Grid container justifyContent={"space-evenly"} spacing={4} style={{ marginTop: "1.5rem" }} >

                    <Grid item lg={5} style={{ paddingLeft: "4rem" }}>
                        <FechaSelect addDate={addDate} />
                        {/* <EmpresaSelect addCompany={addCompany} addCompanyBoolean={addCompanyBoolean} /> */}
                        <DutySelect addSupervisor={addSupervisor} />

                        {/* <MotivoInput addMotivo={addMotivo} addChekedMotivo={addChekedMotivo} /> */}

                        <MotivoAccordion addMotivo={addMotivo} />

                        <Button sx={{ marginTop: "1.5rem" }} variant="contained" onClick={saveOnWord} endIcon={<PrintIcon />}>
                            Descargar Word
                        </Button>
                    </Grid>


                    <Grid item lg={7}>
                        <GroupGenerator addEmpleado={addEmpleado} />
                        <GroupList groupInfo={groupInfo}
                            addTurno={addTurno} />



                    </Grid>


                </Grid>
            </Paper>
        </React.Fragment>


    )
}

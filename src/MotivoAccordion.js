import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import useInputState from './hooks/useInputState';

export default function MotivoAccordion(props) {

    const [expanded, setExpanded] = useState(false);

    const addMotivo = props.addMotivo

    // para el primer set de inputs panel 1
    const [flightNumber, setFlightNumber] = useInputState("");
    const [std, setStd] = useInputState("");
    const [atd, setAtd] = useInputState("");
    const [registration, setRegistration] = useInputState("");

    // para el segundo set de inputs panel 2
    const [cargoPersonaRelevada, setCargoPersonaRelevada] = useInputState("");
    const [nombreRelevada, setNombreRelevada] = useInputState("");
    const [motivoRelevada, setMotivoRelevada] = useInputState("");

    // para el panal 3
    const [cargoPersonaAusente, setCargoPersonaAusente] = useInputState("");
    const [nombreAusente, setNombreAusente] = useInputState("");
    const [motivoAusente, setMotivoAusente] = useInputState("");

    // para el panel 4
    const [motivoServicio, setMotivoServicio] = useInputState("");

    // para el panel 5
    const [motivoExcepcional, setMotivoExcepcional] = useInputState("");

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        addMotivo({
            flightNumber,
            std,
            atd,
            registration,
            cargoPersonaRelevada,
            nombreRelevada,
            motivoRelevada,
            cargoPersonaAusente,
            nombreAusente,
            motivoAusente,
            motivoServicio,
            motivoExcepcional
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [flightNumber,
        std,
        atd,
        registration,
        cargoPersonaRelevada,
        nombreRelevada,
        motivoRelevada,
        cargoPersonaAusente,
        nombreAusente,
        motivoAusente,
        motivoServicio,
        motivoExcepcional])


    return (



        <div>
            {/* motivo 1 */}
            <Accordion sx={{ marginTop: "1.5rem" }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Impuntualidad Aeronaves
                    </Typography>
                    {/* <Typography sx={{ color: 'text.secondary' }}>Selecciona el motivo para justificar</Typography> */}
                </AccordionSummary>
                <AccordionDetails>
                    <Container component="main">
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    required
                                    id="flightNumber"
                                    name="flightNumber"
                                    label="Flight Number"
                                    value={flightNumber}
                                    onChange={setFlightNumber}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    required
                                    id="std"
                                    name="std"
                                    label="STD"
                                    value={std}
                                    onChange={setStd}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    required
                                    id="atd"
                                    name="atd"
                                    label="ATD"
                                    value={atd}
                                    onChange={setAtd}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    required
                                    id="registration"
                                    name="registration"
                                    label="Matricula"
                                    value={registration}
                                    onChange={setRegistration}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </AccordionDetails>
            </Accordion>
            {/* motivo 2 */}
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Retraso relevo de Turno
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Container component="main">
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    id="cargoPersonaRelevada"
                                    name="cargoPersonaRelevada"
                                    label="Cargo persona debe ser relevada"
                                    value={cargoPersonaRelevada}
                                    onChange={setCargoPersonaRelevada}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    id="nombreRelevada"
                                    name="nombreRelevada"
                                    label="Nombre"
                                    value={nombreRelevada}
                                    onChange={setNombreRelevada}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    id="motivoRelevada"
                                    name="motivoRelevada"
                                    label="Motivo"
                                    value={motivoRelevada}
                                    onChange={setMotivoRelevada}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </AccordionDetails>
            </Accordion>
            {/* motivo 3 */}
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Ausencia imprevista
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Container component="main">
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    id="cargoPersonaAusente"
                                    name="cargoPersonaAusente"
                                    label="Cargo persona ausente"
                                    value={cargoPersonaAusente}
                                    onChange={setCargoPersonaAusente}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    id="nombreAusente"
                                    name="nombreAusente"
                                    label="Nombre"
                                    value={nombreAusente}
                                    onChange={setNombreAusente}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    id="motivoAusente"
                                    name="motivoAusente"
                                    label="Motivo"
                                    value={motivoAusente}
                                    onChange={setMotivoAusente}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </AccordionDetails>
            </Accordion>
            {/* motivo 4 */}
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Servicios o reparaciones urgentes
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Container component="main">
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id="motivoServicio"
                                    name="motivoServicio"
                                    label="Motivo"
                                    value={motivoServicio}
                                    onChange={setMotivoServicio}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </AccordionDetails>
            </Accordion>
            {/* motivo 5 */}
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel5bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Otras circunstancias excepcionales
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Container component="main">
                        <Grid container spacing={3} >
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    required
                                    id="motivoExcepcional"
                                    name="motivoExcepcional"
                                    label="Motivo"
                                    value={motivoExcepcional}
                                    onChange={setMotivoExcepcional}
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

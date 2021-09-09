import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './accordion.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));



export default function SimpleAccordion() {
    const classes = useStyles();

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Calculadora Salarial</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Esta calculadora te permite estimar el ingreso neto a partir de los ingresos brutos,
                        de acuerdo con el esquema de pago pactado con tu compañía.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>1. Ingresos Laborales</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Digite su salario u honorarios percibidos en su totalidad.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>2. Otros Ingresos Laborales</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>
                            Digite los demas ingresos percibidos por conceptos de:
                            <li>Primas Ocasionales</li>
                            <li>Partcipacion Utilidades</li>
                            <li>Primas Extralegales</li>
                            <li>Bonificaciones</li>
                        </p>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>3. Tipo de Riesgo ARL (Prestacion de servicios)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>
                            <p>
                                Elija el tipo de riesgo que se encuentra expuesto:
                            </p>
                            <p>
                                <li>Riesgo 1 - 0.522%</li>
                                <li>Riesgo 2 - 1.044%</li>
                                <li>Riesgo 3 - 2.436%</li>
                                <li>Riesgo 4 - 4.350%</li>
                                <li>Riesgo 5 - 6.960%</li>
                            </p>
                            <p>
                                Todo contratista vinculado mediante un contrato de prestación de servicios sebe estar afiliado a riesgos laborales.
                            </p>
                            <p> El artículo 2.2.4.2.2.2 del decreto 1072 de 2015 señala
                                que la afiliación a una ARL es obligatoria cuando
                                el contrato de prestación de servicios sea superior
                                a 1 mes, es decir, que, si el contrato de prestación
                                de servicios es por un mes o menos, el contratista
                                no está obligado a pagar una ARL.
                            </p>
                        </p>
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}

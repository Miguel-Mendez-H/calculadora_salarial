import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

    return (
        <div className={classes.root}>
            <Accordion>
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

            <Accordion>
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

            <Accordion>
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
        </div>
    );
}

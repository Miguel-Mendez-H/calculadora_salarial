import React from "react"
import './tabla.css'

import { makeStyles, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Table, TableFooter } from '@material-ui/core'

const useStyles = makeStyles({
    table: {
        minWidth: 300,
        
    },
    tittle: {
        color: 'white',
        fontSize: '20px',
    }
});

export default function ObtenerTablaCalduladora(props) {
    
    const classes = useStyles();

    let format = (value) => {
        if (!value) return 0
        return value.toLocaleString('es-CO',{style:'currency',currency:'COP', maximumFractionDigits:0})
    }


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" className={classes.tittle}>Concepto</TableCell>
                        <TableCell align="center" className={classes.tittle}>Valor</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={classes.tittle} align="center" colSpan={2}>
                            Carga prestacional
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="td" scope="row">Vacaciones</TableCell>
                        <TableCell className='cargaPrestacional' align="right" >{format(props.data.vacaciones)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="td" scope="row">Prima</TableCell>
                        <TableCell className='cargaPrestacional' align="right">{format(props.data.prima)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="td" scope="row">Cesantias</TableCell>
                        <TableCell className='cargaPrestacional' align="right">{format(props.data.cesantias)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="td" scope="row">Intereses cesantias</TableCell>
                        <TableCell className='cargaPrestacional' align="right">{format(props.data.intereses)}</TableCell>
                    </TableRow>
                </TableBody>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tittle} align="center" colSpan={2}>
                            Seguridad Social
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="td" scope="row">Pension</TableCell>
                        <TableCell className='seguridadSocial' align="right">{format(props.data.pension)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="td" scope="row">Salud</TableCell>
                        <TableCell className='seguridadSocial' align="right">{format(props.data.salud)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="td" scope="row">Fondo de Solidaridad</TableCell>
                        <TableCell className='seguridadSocial' align="right">{format(props.data.fondoS)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="td" scope="row">ARL</TableCell>
                        <TableCell className='seguridadSocial' align="right">{format(props.data.arl)}</TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter >
                    <TableRow>
                        <TableCell className={classes.tittle} component="td" scope="row">Salario neto</TableCell>
                        <TableCell  className={classes.tittle} align="right">{format(props.data.neto)}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}

import React from "react"
import './tabla.css'

import { makeStyles, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Table } from '@material-ui/core'

const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
    tittle:{
        color:'white',
        fontSize:'20px'
    }
});


export default function DenseTable(props) {
    const classes = useStyles();

    let format = (value) => {
        if (!value) return 0
        return value.toLocaleString('en-US')
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tittle}>Concepto</TableCell>
                        <TableCell className={classes.tittle}>Valor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="td" scope="row">Vacaciones</TableCell>
                        <TableCell align="right" >{format(props.data.vacaciones)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="td" scope="row">Prima</TableCell>
                        <TableCell align="right">{format(props.data.prima)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="td" scope="row">Cesantias</TableCell>
                        <TableCell align="right">{format(props.data.cesantias)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="td" scope="row">Intereses cesantias</TableCell>
                        <TableCell align="right">{format(props.data.intereses)}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell component="td" scope="row">Pension</TableCell>
                        <TableCell align="right">{format(props.data.pension)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="td" scope="row">Salud</TableCell>
                        <TableCell align="right">{format(props.data.salud)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="td" scope="row">Fondo de Solidaridad</TableCell>
                        <TableCell align="right">{format(props.data.fondoS)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="td" scope="row">ARL</TableCell>
                        <TableCell align="right">{format(props.data.arl)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="td" scope="row">Neto</TableCell>
                        <TableCell align="right">{format(props.data.neto)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
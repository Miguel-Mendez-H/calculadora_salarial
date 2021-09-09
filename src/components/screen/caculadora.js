import React, { useState, useEffect } from "react"
import './calculadora.css'

import ObtenerTablaCalduladora from './tabla'
import { TextField, InputAdornment, InputLabel, Select, MenuItem } from '@material-ui/core'

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import obtenerSalarioOrdinario from '../componentsapp/Salarios/Ordinario'
import obtenerPrestacionServicios from '../componentsapp/Salarios/Servicios'
import obtenerSalarioIntegral from '../componentsapp/Salarios/Integral'
import Accordion from './accordion'

function Calculadora() {

    const [salario, setSalario] = useState(0)
    const [otrosIngresos, setOtrosIngresos] = useState(0)
    const [tipoDeRiesgoArl, setTipoDeRiesgoArl] = useState(0)

    const [data, setData] = useState({})

    const [tipoSalario, setTipoSalario] = useState('ordinario');

    useEffect(() => {
        const tiposDeSalarios = {
            ordinario: () => setData(obtenerSalarioOrdinario(salario || 0, otrosIngresos || 0)),
            integral: () => setData(obtenerSalarioIntegral(salario || 0, otrosIngresos || 0)),
            servicios: () => setData(obtenerPrestacionServicios(salario || 0, otrosIngresos || 0, tipoDeRiesgoArl))
        }[tipoSalario]()
    }, [tipoSalario, salario, otrosIngresos, tipoDeRiesgoArl])

    return (
        <div className='containerCalculadora'>
            <div className='accordeonInformacion'>
                <Accordion></Accordion>
            </div>
            <div className='contenidoBotones-Tabla'>
                <div className = 'prueba'>
                <div className='inputParaSalario'>
                    <TextField id="filled-basic"
                        label="Digite el Salario"
                        variant="filled"
                        type='number'
                        onChange={e => setSalario(parseInt(e.target.value))}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                </div>
                <div className='inputParaOtrosIngresos'>
                    <TextField id="filled-basic"
                        label="Digite otros ingresos"
                        variant="filled"
                        type='number'
                        onChange={e => setOtrosIngresos(parseInt(e.target.value))}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                </div>
                <div className='SelectorArl'>
                    <InputLabel id="demo-simple-select-label">Tarifa ARL</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={tipoDeRiesgoArl}
                        onChange={e => setTipoDeRiesgoArl(parseInt(e.target.value))}
                    >
                        <MenuItem value={0}>Riesgo 1 - 0.522%</MenuItem>
                        <MenuItem value={1}>Riesgo 2 - 1.044%</MenuItem>
                        <MenuItem value={2}>Riesgo 3 - 2.436%</MenuItem>
                        <MenuItem value={3}>Riesgo 4 - 4.350%</MenuItem>
                        <MenuItem value={4}>Riesgo 5 - 6.960%</MenuItem>
                    </Select>
                </div>
                </div>
                <div className='contenidoBotones'>
                    <ToggleButtonGroup
                        value={tipoSalario}
                        exclusive
                        onChange={(e, value) => setTipoSalario(value)}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="ordinario" aria-label="left aligned">
                            Ordinario
                        </ToggleButton>
                        <ToggleButton value="integral" aria-label="centered">
                            Integral
                        </ToggleButton>
                        <ToggleButton value="servicios" aria-label="right aligned">
                            Servicios
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>

                <div className='contenidoTabla'>
                    
                    <ObtenerTablaCalduladora data={data}></ObtenerTablaCalduladora>
                </div>
            
            </div>
        </div>
    )
}

export default Calculadora;
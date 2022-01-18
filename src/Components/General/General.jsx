import React from 'react'
import './general.css';
import GraficoFechas from './GraficoFechas';
import GraficoRecuperados from './GraficoRecuperados';

const General = () => {
    return (
        <div>
        <h1 className="text-center">SITUACIÓN GENERAL</h1>

        <GraficoRecuperados />

        <div className="card mt-3">
            <h3 className="card-title text-center">Casos positivos por fecha</h3>
            <GraficoFechas />
        </div>
        <canvas id="graficoSexo"></canvas>
        </div>
    )
}

export default General

import React from 'react'
import './general.css';
import GraficoRecuperados from './GraficoRecuperados';
import GraficoFechas from './GraficoFechas';
import GraficoSexo from './GraficoSexo';
import GraficoEdades from './GraficoEdades';

const General = () => {
    return (
        <div className='container-fluid contenedor'>
            <h2 className="text-center m-2">SITUACIÓN GENERAL</h2>
            <p id='explicacion'>Gráficos realizados con los primeros 500.000 datos registrados en la api SODA del gobierno</p>

            <GraficoRecuperados />

            <div className="grid">
                <div className="card mt-3 pequeño">
                    <h3 className="card-title text-center">Sexo</h3>
                    <GraficoSexo />
                </div>
                <div className="card mt-3 mediano">
                    <h3 className="card-title text-center">Contagios por grupo etario</h3>
                    <GraficoEdades />
                </div>
            </div>
            <div className="card mt-3">
                <h3 className="card-title text-center">Casos positivos por fecha</h3>
                <GraficoFechas />
            </div>
        </div>
    )
}

export default General

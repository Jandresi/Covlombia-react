import React, { useEffect } from 'react'
import './general.css';

let recuperado = [];
let nombresRecuperado = [];
let contarRecuperado = [];
let contador = 1;


const GraficoRecuperados = () => {

    const[data, setData] = React.useState([]);

    useEffect(() => {
        obtenerRecuperados();
    }, []);

    const obtenerRecuperados = async() => {
        const api = await fetch("https://www.datos.gov.co/resource/gt2j-8ykr.json?$$app_token=JCZ5UeNFHiBVgpjn7xmoY4WKg&$limit=100000&$select=recuperado");
        const covid = await api.json();
        setData(covid);
    }

    const ordenarRecuperados = () =>{
        try {
            data.filter(res => {
                recuperado.push(res.recuperado.toLowerCase());
            });
            recuperado.sort();
            for (let i = 0; i < recuperado.length; i++) {
                if(recuperado[i+1] === recuperado[i]) {
                    contador++;
                } else {
                    nombresRecuperado.push(recuperado[i]);
                    contarRecuperado.push(contador);
                    contador = 1;
                }
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="tarjetasIniciales">
            {ordenarRecuperados()}
            <div className="recuperado bien">
                <p className="tituloRecuperado">Recuperados</p>
                <p className="cifra" id="recuperados">{contarRecuperado[2]}</p>
            </div>
            <div className="recuperado mal">
                <p className="tituloRecuperado">Fallecidos</p>
                <p className="cifra" id="fallecidos">{contarRecuperado[0]}</p>
            </div>
        </div>
    )
}

export default GraficoRecuperados;

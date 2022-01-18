import React, { useEffect } from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const GraficoFechas = () => {
    let fecha = [];
    let nombresFecha = [];
    let contarFecha = [];
    let contador = 1;


    const[data, setData] = React.useState([]);
    const [chartData, setChartData] = React.useState({
        datasets: []
    });

    useEffect(() => {
        obtenerRecuperados();
        ordenarFechas();
    }, []);

    const obtenerRecuperados = async() => {
        const api = await fetch("https://www.datos.gov.co/resource/gt2j-8ykr.json?$$app_token=JCZ5UeNFHiBVgpjn7xmoY4WKg&$limit=100000");
        const covid = await api.json();
        setData(covid);
    }
    
    const ordenarFechas = () => {
        try {
            data.filter(res => {
                fecha.push(res.fecha_de_notificaci_n);
            });
            fecha.sort();
            for (let i = 0; i < fecha.length; i++) {
                if(fecha[i+1] === fecha[i]) {
                    contador++;
                } else {
                    nombresFecha.push(fecha[i]);
                    contarFecha.push(contador);
                    contador = 1;
                }
            }
            // eslint-disable-next-line no-undef
            setChartData({
                labels: nombresFecha,
                datasets: [{
                    label: "Casos por fecha",
                    data: contarFecha,
                    backgroundColor: ['rgba(255, 99, 132, 1)'],
                    borderColor: ['rgba(255, 99, 132, 1)']
                }]
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Chart
            type='bar'
            data={chartData}
            options={{
                scales: {
                    y: {
                        type: 'logarithmic'
                    }
                }
            }}
            id='porFechas'
        />
    )
}

export default GraficoFechas

import React, { useEffect } from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const GraficoSexo = () => {
    let sexo = [0, 0];
    let porcentajes = [];

    const[data, setData] = React.useState([]);
    const [chartData, setChartData] = React.useState({
        datasets: []
    });
    const[ejecutado, setEjecutado] = React.useState(false)

    useEffect(() => {
        obtenerFechas()
        ordenarFechas()
    }, [ejecutado]);
 
    const obtenerFechas = async() => {
        const api = await fetch("https://www.datos.gov.co/resource/gt2j-8ykr.json?$$app_token=JCZ5UeNFHiBVgpjn7xmoY4WKg&$limit=100000");
        const covid = await api.json();
        setData(covid);
        setEjecutado(true);
    }

    const ordenarFechas = async() => {
        try {
            data.filter(res => {
                if(res.sexo === "M") {
                    sexo[0]++;
                } else if(res.sexo === "F") {
                    sexo[1]++;
                }
            });
            porcentajes[0] = `M(${Math.round(sexo[0]/1000)}%)`
            porcentajes[1] = `F(${Math.round(sexo[1]/1000)}%)`
            setChartData({
                labels: porcentajes,
                datasets: [{
                    label: "Casos por fecha",
                    data: [sexo[0], sexo[1]],
                    backgroundColor: [
                        'rgba(129, 212, 238, 0.8)',
                        'rgba(255, 99, 132, 0.8)'
                    ],
                    borderColor: [
                        'rgba(129, 212, 238, 0.8)',
                        'rgba(255, 99, 132, 0.8)'
                    ],
                }]
            });
        } catch (e) {
            console.log(e)
        }
    }
    

    return (
        <Chart
            type='doughnut'
            data={chartData}
            options={{
                rotation: 180
            }}
        />
    )
}

export default GraficoSexo

import React, { useEffect } from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const GraficoEdades = () => {
    let edades = ["0 - 5", "6 - 11", "12 - 18", "14 - 26", "27 - 59", "Mayor de 60"];
    let nombreEdades = ["Bebés", "Infantes", "Adolescentes", "Jóvenes", "Adultos", "Adultos mayores"];
    let contarEdad = [];

    const[data, setData] = React.useState([]);
    const [chartData, setChartData] = React.useState({
        datasets: []
    });
    const[ejecutado, setEjecutado] = React.useState(false)

    useEffect(() => {
        obtenerEdades()
        ordenarEdades()
    }, [ejecutado]);
 
    const obtenerEdades = async() => {
        const api = await fetch("https://www.datos.gov.co/resource/gt2j-8ykr.json?$$app_token=JCZ5UeNFHiBVgpjn7xmoY4WKg&$limit=100000");
        const covid = await api.json();
        setData(covid);
        setEjecutado(true);
    }

    const ordenarEdades = () => {
        try {
            data.filter(res => {
                
            });
            setChartData({
                labels: edades,
                datasets: [{
                    label: nombreEdades,
                    data: contarEdad,
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
            id='porEdades'
        />
    )
}

export default GraficoEdades

import React, { useEffect } from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const GraficoEdades = () => {
    let edades = ["0 a 5 años", "6 a 11 años", "12 a 18 años", "19 a 26 años", "27 a 59 años", "Mayor de 60"];
    let nombreEdades = ["Bebés", "Infantes", "Adolescentes", "Jóvenes", "Adultos", "Adultos mayores"];
    let contarEdad = [0, 0, 0, 0, 0, 0];

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
                if(res.edad >= 0 && res.edad < 6) {
                    contarEdad[0]++
                } else if(res.edad >= 6 && res.edad < 12) {
                    contarEdad[1]++
                } else if(res.edad >= 12 && res.edad < 19) {
                    contarEdad[2]++
                } else if(res.edad >= 19 && res.edad < 27) {
                    contarEdad[3]++
                } else if(res.edad >= 27 && res.edad < 59) {
                    contarEdad[4]++
                } else if(res.edad >= 60) {
                    contarEdad[5]++
                }
            });
            setChartData({
                labels: edades,
                datasets: [{
                    label: "Grupo etario",
                    data: contarEdad,
                    backgroundColor: [
                        'rgba(129, 212, 238, 1)',
                        'rgba(255, 234, 0, 1)',
                        'rgba(255, 149, 0, 1)',
                        'rgba(200, 107, 250, 1)',
                        'rgba(92, 0, 153, 1)',
                        'rgba(0, 63, 136, 1)'
                ],
                    borderColor: [
                        'rgba(129, 212, 238, 1)',
                        'rgba(255, 234, 0, 1)',
                        'rgba(255, 149, 0, 1)',
                        'rgba(200, 107, 250, 1)',
                        'rgba(92, 0, 153, 1)',
                        'rgba(0, 63, 136, 1)'
                ]
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
                indexAxis: 'y',
                elements: {
                    bar: {
                        borderWidth: 2,
                    }
                },
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                        position: 'right',
                    }
                }
            }}
            id='porEdades'
        />
    )
}

export default GraficoEdades

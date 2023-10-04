import { useContext, useEffect, useRef } from "react"
import { MqttContext } from "@/contexts";
import { Box, Typography } from "@mui/material";
import { Chart, registerables } from "chart.js";

export const HopperDashboard = () => {
    const { hopperWeight } = useContext(MqttContext)
    const chartRef = useRef<HTMLCanvasElement>(null);
    const sensorValue = parseFloat(hopperWeight)
    const hopperTotal = 15;

    useEffect(() => {
        if (chartRef.current) {
            const chart = new Chart(chartRef.current, {
                type: 'bar',
                data: {
                    datasets: [{
                        label: `Con comida ${(hopperTotal - sensorValue).toFixed(2)} cm`,
                        data: [{x: '', y: hopperTotal - sensorValue}],
                        backgroundColor: [
                            '#FF9B00',
                            '#CBCBCB'
                        ],
                    },
                    {
                        label: `Sin comida ${sensorValue} cm`,
                        data: [{x: '', y: sensorValue}],
                        backgroundColor: [
                            '#CBCBCB',
                            '#FF9B00'
                        ],
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            stacked: true
                        },
                        y: {
                            stacked: true
                        }
                    },
                    maintainAspectRatio: false,
                }
            })
            return () => {
                chart.destroy()
            }
        }
    }, [sensorValue]);

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            ml={{xs: 0, sm: 40}}
            mr={{xs: 0, sm: 40}}
            height={'calc(100vh - 300px)'}
        >
            <Typography variant="h5" fontWeight={600} mb={2}>Estado Tolva</Typography>
            <canvas ref={chartRef}/>
        </Box>
    )
}

Chart.register(...registerables);

import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { MqttContext } from '@/contexts';
import { Chart, registerables } from "chart.js";
import { Box, Typography } from "@mui/material";

export const WeightDashboard = () => {
    const { weight } = useContext(MqttContext)
    const chartRef = useRef<HTMLCanvasElement>(null);
    const sensorValue = parseInt(weight)
    let fullPlate = 0

    if (typeof window !== 'undefined') {
        fullPlate = parseInt(localStorage.getItem('weight') || '') || 0;
    }

    useEffect(() => {
        if (chartRef.current) {
            const chart = new Chart(chartRef.current, {
                type: 'doughnut',
                data: {
                    labels: [
                        'Lleno',
                        'Vacío'
                    ],
                    datasets: [{
                        label: 'Peso en gr',
                        data: [sensorValue, fullPlate - sensorValue],
                        backgroundColor: [
                            '#FF9B00',
                            '#CBCBCB'
                        ],
                        hoverOffset: 4,
                    }]
                },
                options: {
                    responsive: true,
                },
            })
            return () => {
                chart.destroy()
            }
        }
    }, [fullPlate, sensorValue])

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
        >
            <Typography variant="h5" fontWeight={600} mb={2}>Peso Plato</Typography>
            <canvas ref={chartRef}/>
        </Box>
    )
}

Chart.register(...registerables);

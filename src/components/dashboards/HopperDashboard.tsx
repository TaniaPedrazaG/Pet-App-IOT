import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js";
import { Box, Typography } from "@mui/material";

export const HopperDashboard = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);

    const data = {
        labels: [
            'Vacío',
            'Lleno'
        ],
        datasets: [{
            label: 'Porcentaje almacenamiento',
            data: [50, 50],
            backgroundColor: [
                '#CBCBCB',
                '#FF9B00'
            ],
            hoverOffset: 4,
        }]
    };

    useEffect(() => {
        if (chartRef.current) {
            const chart = new Chart(chartRef.current, {
                type: 'doughnut',
                data: data,
                options: {
                    responsive: true,
                },
            })
            return () => {
                chart.destroy()
            }
        }
    }, [])

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
        >
            <Typography variant="h5" fontWeight={600} mb={2}>Estado Plato</Typography>
            <canvas ref={chartRef}/>
        </Box>
    )
}

Chart.register(...registerables);

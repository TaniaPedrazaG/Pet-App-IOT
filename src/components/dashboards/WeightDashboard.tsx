import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js";
import { Box, Typography } from "@mui/material";

export const WeightDashboard = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);

    const data = {
        datasets: [{
            label: 'Lleno',
            data: [{x: '', y: 20}],
            backgroundColor: [
                '#FF9B00',
                '#CBCBCB'
            ],
            hoverOffset: 4,
        },
        {
            label: 'Vacío',
            data: [{x: '', y: 80}],
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
                type: 'bar',
                data: data,
                options: {
                    responsive: true,
                    scales: {
                        x: {
                            stacked: true
                        },
                        y: {
                            stacked: true
                        }
                    }
                }
            })
            return () => {
                chart.destroy()
            }
        }
    }, []);

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            mt={2}
        >
            <Typography variant="h5" fontWeight={600} mb={2}>Estado Tolva</Typography>
            <canvas ref={chartRef}/>
        </Box>
    )
}

Chart.register(...registerables);

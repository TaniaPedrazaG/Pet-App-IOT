import { useContext, useEffect, useMemo, useRef, useState } from "react"
import { MqttContext } from "@/contexts";
import { Box, Typography } from "@mui/material";
import { Chart, registerables } from "chart.js";

export const HopperDashboard = () => {
    const { hopperWeight } = useContext(MqttContext)
    const chartRef = useRef<HTMLCanvasElement>(null);
    const sensorValue = parseFloat(hopperWeight)
    const hopperTotal = 30;

    useEffect(() => {
        if (chartRef.current) {
            const chart = new Chart(chartRef.current, {
                type: 'bar',
                data: {
                    datasets: [{
                        label: 'Con comida',
                        data: [{x: '', y: hopperTotal - sensorValue}],
                        backgroundColor: [
                            '#FF9B00',
                            '#CBCBCB'
                        ],
                    },
                    {
                        label: 'Sin comida',
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
                    }
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
            mt={2}
            height={500}
        >
            <Typography variant="h5" fontWeight={600} mb={2}>Estado Tolva</Typography>
            <canvas ref={chartRef}/>
        </Box>
    )
}

Chart.register(...registerables);

import { useContext, useMemo } from "react"
import { MqttContext } from "@/contexts";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from './pulse.module.scss'

export const MovementDashboard = () => {
    const { movement } = useContext(MqttContext)
    const cerca = parseInt(movement)

    return (
        <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
        >
            <Typography variant="h5" fontWeight={600} mb={2}>Sensor Movimiento</Typography>
            <Image
                src={cerca === 1 ? 'motion.svg' : 'no-motion.svg'}
                alt={'motion-sensor'}
                width={220}
                height={220}
                className={`${styles['movement-button']} ${cerca === 1 ? styles.pulse : ''}`}
            />
            <Typography variant="subtitle1" color={'GrayText'} fontWeight={600} mb={2}>
                {
                    cerca === 1
                        ? '¡Movimiento detectado!'
                        : 'Sin movimiento'
                }            
            </Typography>
            
        </Box>
    )
}

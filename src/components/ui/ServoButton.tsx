
import { useContext, useEffect, useState } from "react"
import { MqttContext } from "@/contexts";
import { OpenInNew } from "@mui/icons-material"
import { Box, Fab } from "@mui/material"

const ServoButton = () => {
    const { sendMessage } = useContext(MqttContext)
    const [openServo, setOpenServo] = useState(false)

    useEffect(() => {
        if (openServo) {
            sendMessage('abrirServo', 'O')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openServo])

    return (
        <Box>
            <Fab
                size="small"
                color="error"
                onClick={(e) => setOpenServo(!openServo)}
            >
                <OpenInNew/>
            </Fab>
        </Box>
    )
}

export default ServoButton
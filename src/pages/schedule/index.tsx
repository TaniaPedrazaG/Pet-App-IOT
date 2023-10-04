import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MqttContext } from "@/contexts";
import { Layout } from "@/components/layouts"
import {
    Box, Button, Card, CardContent, IconButton, Snackbar, TextField,
    ToggleButton, ToggleButtonGroup, Typography
} from "@mui/material"
import { Close } from "@mui/icons-material";

const Schedule = () => {
    const { sendMessage } = useContext(MqttContext)
    const [mealsQuantity, setMealsQuantity] = useState(1);
    const [scheduleTime, setScheduleTime] = useState(24 / mealsQuantity);
    const [weight, setWeight] = useState(0);
    const [openAlert, setOpenAlert] = useState(false)
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const localWeight = JSON.parse(localStorage.getItem('weight')!)
            const localQuantity = JSON.parse(localStorage.getItem('quantity')!)
            if (localWeight && localQuantity) {
                setMealsQuantity(localQuantity)
                setWeight(localWeight)
            }
        }
    }, [])

    useEffect(() => {
        setScheduleTime(24 / mealsQuantity);
    }, [mealsQuantity])
    

    const handleChange = (event: React.MouseEvent<HTMLElement>, quantity: number) => {
        setMealsQuantity(quantity);
    };

    const handleSchedulerData = () => {
        setTimeout(() => {
            setOpenAlert(true)
        }, 2000);
        localStorage.setItem('quantity', JSON.stringify(mealsQuantity));
        localStorage.setItem('weight', JSON.stringify(weight));
        sendMessage('pesoPorcion', weight.toString())
        setTimeout(() => {
            calculateNextMeal()
            router.push('/');
        }, 7000);
    }

    const calculateNextMeal = () => {
        const nextMealTime = '7:00 AM'
        // const actualTime = new Date()
        sendMessage('proximaComida', nextMealTime.toString())
    }

    const handleReset = () => {
        setMealsQuantity(1);
        setWeight(0);
        localStorage.removeItem('quantity');
        localStorage.removeItem('weight');
    };

    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => setOpenAlert(false)}
            >
                <Close fontSize="small" />
            </IconButton>
        </>
    );

    return (
        <Layout title="" pageDescription="">
            <Box p={3}>
                <Typography
                    variant="subtitle1"
                    color={'#5A2828'}
                    mb={2}
                >
                    Agenda sus comidas
                </Typography>
                <Card sx={{ mb: 2 }}>
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Typography variant="body2" mb={2}>
                            Selecciona el numero de comidas por día
                        </Typography>
                        <ToggleButtonGroup
                            value={mealsQuantity}
                            exclusive
                            color="info"
                            size="small"
                            onChange={handleChange}
                            sx={{ mb: 2 }}
                        >
                            <ToggleButton value={1} sx={{ width: '100%' }}>1</ToggleButton>
                            <ToggleButton value={2} sx={{ width: '100%' }}>2</ToggleButton>
                            <ToggleButton value={3} sx={{ width: '100%' }}>3</ToggleButton>
                            <ToggleButton value={4} sx={{ width: '100%' }}>4</ToggleButton>
                        </ToggleButtonGroup>
                        <Typography variant="body2">
                            Las comidas serán servidas cada <strong>{scheduleTime} horas</strong>
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ mb: 2 }}>
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Typography variant="body2" mb={2}>
                            Digita el peso de la porción
                        </Typography>
                        <Box
                            display={'flex'}
                            flexDirection={'row'}
                            alignItems={'center'}
                            justifyContent={'space-around'}
                        >
                            <TextField
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(parseInt(e.target.value))}
                            />
                            <Typography>(g)</Typography>
                        </Box>
                    </CardContent>
                </Card>
                <Button
                    sx={{
                        width: '100%',
                        mb: 2,
                        textTransform: 'none',
                        boxShadow: 'none',
                        borderRadius: 15,
                        backgroundColor: 'transparent',
                        color: '#FFBA69',
                        border: '1px solid #FFBA69',
                        fontSize: 16,
                        ':hover': {
                            color: '#FFFFFF',
                            border: '1px solid #FF9B00',
                            backgroundColor: '#FF9B00',
                            transition: 'all .5s ease'
                        }
                    }}
                    onClick={() => handleReset()}
                >
                    RESETEAR
                </Button>
                <Button
                    sx={{
                        width: '100%',
                        textTransform: 'none',
                        boxShadow: 'none',
                        borderRadius: 15,
                        color: '#FFFFFF',
                        border: '1px solid #FF9B00',
                        backgroundColor: '#FF9B00',
                        fontSize: 16,
                        ':hover': {
                            backgroundColor: 'transparent',
                            color: '#FFBA69',
                            border: '1px solid #FFBA69',
                            transition: 'all .5s ease'
                        }
                    }}
                    onClick={() => handleSchedulerData()}
                >
                    GUARDAR
                </Button>
                <Snackbar
                    open={openAlert}
                    autoHideDuration={4000}
                    onClose={() => setOpenAlert(false)}
                    message="Se han guardado los cambios"
                    action={action}
                    sx={{ mb: '56px' }}
                />
            </Box>
        </Layout>
    )
}

export default Schedule

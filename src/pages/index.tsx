import type { NextPage } from 'next';
import Image from 'next/image';
import NextLink from 'next/link'
import { Layout } from '@/components/layouts';
import { Box, Button, Card, CardContent, CardHeader, Link, List, ListItem, ListItemIcon, Typography } from '@mui/material';

import { FoodBank, Timelapse, WaterDrop } from '@mui/icons-material';

const HomePage: NextPage = () => {
    return (
        <Layout title='' pageDescription=''>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Box p={3} width={'100%'}>
                    <Card>
                        <CardHeader
                            sx={{
                                pt: 1.5,
                                pb: 0,
                                textAlign: 'center',
                                textTransform: 'uppercase'
                            }}
                            title='Hera'
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                width: '90vw',
                                p: 1,
                            }}
                        >
                            <CardContent>
                                <Typography variant='subtitle2'><b>Raza:</b> Pinscher</Typography>
                                <Typography variant='subtitle2'><b>Peso:</b> 5 kg</Typography>
                                <Typography variant='subtitle2'><b>Edad:</b> 2 yrs</Typography>
                            </CardContent>
                            <Image
                                src='/dog-profile.png'
                                alt='foto'
                                width={100}
                                height={100}
                            />
                        </Box>
                    </Card>
                </Box>
                <NextLink href={'/schedule'} passHref legacyBehavior>
                    <Link>
                        <Button
                            sx={{
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
                        >
                            Agendar Comidas
                        </Button>
                    </Link>
                </NextLink>
                <Box p={3} width={'100%'}>
                    <Card>
                        <CardContent>
                            <Typography align='center' variant='subtitle1'>
                                Recomendaciones
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon sx={{ minWidth: '40px', color: '#5A2828' }}>
                                        <FoodBank/>
                                    </ListItemIcon>
                                    <Typography variant='body2'>
                                        Establece 3 comidas por día
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon sx={{ minWidth: '40px', color: '#5A2828' }}>
                                        <Timelapse/>
                                    </ListItemIcon>
                                    <Typography variant='body2'>
                                        Puede haber una ventana de seis horas entre las comidas
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon sx={{ minWidth: '40px', color: '#5A2828' }}>
                                        <WaterDrop/>
                                    </ListItemIcon>
                                    <Typography variant='body2'>
                                        Ingesta mínima de agua de 520ml por día
                                    </Typography>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Layout>
    )
}

export default HomePage
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { Home, Pets, Schedule, SpaceDashboard } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'

const navigationOptions = [
    {label: 'Inicio', value: '/', icon: <Home />},
    {label: 'Agendar', value: '/schedule', icon: <Schedule />},
    // {label: 'Perfil', value: '/profile', icon: <Pets />},
    {label: 'Tablero', value: '/dashboard', icon: <SpaceDashboard />},
]

export const BottomNav = () => {
    const router = useRouter();
    const route = useRef<string>('/');

    useEffect(() => {
        route.current = localStorage.getItem('route') || '/'
    }, [])

    const handleNavigation = (url: string) => {
        localStorage.setItem('route', url)
        router.push(url);
    };

    return (
        <BottomNavigation
            showLabels
            value={router.route}
            onChange={(event, newValue) => {
                handleNavigation(newValue);
            }}
        >
            {
                navigationOptions.map(({ label, value, icon }) => (
                    <BottomNavigationAction
                        sx={{ color: '#5A2828' }}
                        key={label}
                        label={label}
                        value={value}
                        icon={icon}
                    />
                ))
            }
        </BottomNavigation>
    )
}
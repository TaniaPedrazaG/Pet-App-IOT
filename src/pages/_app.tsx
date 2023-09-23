import type { AppProps } from 'next/app';
import { LightTheme } from '@/themes';
import { UiProvider } from '@/contexts/ui';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <UiProvider>
                <ThemeProvider theme={LightTheme}>
                    <CssBaseline/>
                    <Component {...pageProps} />
                </ThemeProvider>
            </UiProvider>
        </LocalizationProvider>
    )
}

export default MyApp
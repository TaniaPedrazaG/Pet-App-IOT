import type { AppProps } from 'next/app';
import { LightTheme } from '@/themes';
import { UiProvider, MqttProvider } from '@/contexts';
import { CssBaseline, ThemeProvider } from '@mui/material';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <UiProvider>
            <MqttProvider>
                <ThemeProvider theme={LightTheme}>
                    <CssBaseline/>
                    <Component {...pageProps} />
                </ThemeProvider>
            </MqttProvider>
        </UiProvider>
    )
}

export default MyApp
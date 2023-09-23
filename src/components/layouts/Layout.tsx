import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import { Box } from '@mui/material'
import { BottomNav } from '../ui';
import Navbar from '../ui/Navbar';

interface Props extends PropsWithChildren {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const Layout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={pageDescription} />
                <meta name='og:title' content={title} />
                <meta name='og:description' content={pageDescription} />
                {imageFullUrl && (
                    <meta name='og:image' content={imageFullUrl} />
                )}
            </Head>
            <nav>
                <Navbar/>
            </nav>
            <main style={{
                margin: '56px auto'
            }}>
                {children}
            </main>
            <footer
                style={{
                    position: 'fixed',
                    left: 0,
                    right: 0,
                    bottom: 0
                }}
            >
                <BottomNav/>
            </footer>
        </>
    )
}
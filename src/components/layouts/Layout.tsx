import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { BottomNav } from '../ui';
import Navbar from '../ui/Navbar';
import ServoButton from '../ui/ServoButton';
interface Props extends PropsWithChildren {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const Layout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    const router = useRouter();
    
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
            {
                router.asPath !== '/'
                    ? <>
                        <div
                            style={{
                                position: 'fixed',
                                bottom: '70px',
                                right: '10px',
                            }}
                        >
                            <ServoButton/>
                        </div>
                    </>
                    : <></>
            }
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
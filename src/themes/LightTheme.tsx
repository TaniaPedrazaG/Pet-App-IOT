import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#FF6464'
        },
        secondary: {
            main: '#FF9B00'
        },
        info: {
            main: '#FFFFFF'
        },
        error: {
            main: '#FFBA69'
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 10,
                position: 'fixed',
            },
            styleOverrides: {
                root: {
                    background: '#FF9B00',
                    height: 56
                },
            }
        },
        MuiBottomNavigation: {
            styleOverrides: {
                root: {
                    background: '#FFFFFF',
                    color: '#212121',
                    borderTop: '1px solid #FF8D4D'
                },
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: ['SpaceMono-Regular', 'monospace'],
                },
                h1: {
                    fontSize: 30,
                    fontWeight: 400,
                },
                h2: {
                    fontSize: 20,
                    fontWeight: 400
                },
                h3: {
                    fontSize: 22,
                    fontWeight: 600,
                    color: '#FFFFFF',
                    letterSpacing: '1px'
                },
                body1: {
                    fontSize: 15,
                    fontWeight: 400
                },
                body2: {
                    fontSize: 13,
                    fontWeight: 400
                },
                subtitle1: {
                    fontSize: 18,
                    fontWeight: 600
                },
                subtitle2: {
                    fontSize: 16,
                    fontWeight: 400
                },
                caption: {
                    fontSize: 12,
                }
            }
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'large',
                disableElevation: true,
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    backgroundImage: 'linear-gradient(rgba(33, 33, 33, 1), rgba(33, 33, 33, 1));'
                }
            }
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    margin: 0,
                    padding: 0
                }
            }
        },
        MuiCard: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                    background: '#EFDFBB',
                    color: "#5A2828"
                }
            }
        },
        MuiToggleButtonGroup: {
            styleOverrides: {
                root: {
                    border: '.5px solid #FFBA69',
                    background: '#FF8D4D',
                }
            }
        },
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    background: '#FF9B00',
                }
            }
        },
    }
});

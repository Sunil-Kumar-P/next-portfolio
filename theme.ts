'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00E5FF', // Electric Cyan Accent
        },
        secondary: {
            main: '#BB86FC', // Neon Purple Accent
        },
        background: {
            default: '#0F1115', // Deep Obsidian
            paper: '#1A1D24', // Elevated surface
        },
        text: {
            primary: '#E2E8F0',
            secondary: '#94A3B8',
        }
    },
    typography: {
        fontFamily: 'var(--font-inter), sans-serif',
        h1: {
            fontFamily: 'var(--font-outfit), sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontFamily: 'var(--font-outfit), sans-serif',
            fontWeight: 700,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontFamily: 'var(--font-outfit), sans-serif',
            fontWeight: 600,
        },
        h4: {
            fontFamily: 'var(--font-outfit), sans-serif',
            fontWeight: 600,
        },
        h5: {
            fontFamily: 'var(--font-outfit), sans-serif',
            fontWeight: 600,
        },
        h6: {
            fontFamily: 'var(--font-outfit), sans-serif',
            fontWeight: 600,
        },
        body1: {
            fontFamily: 'var(--font-inter), sans-serif',
            lineHeight: 1.6,
        },
        body2: {
            fontFamily: 'var(--font-inter), sans-serif',
            lineHeight: 1.6,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontFamily: 'var(--font-outfit), sans-serif',
                    fontWeight: 600,
                    borderRadius: 8,
                },
            },
        },
    },
});

export default theme;

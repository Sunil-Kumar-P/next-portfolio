'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';

export default function GhostNav() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isTop, setIsTop] = useState(true);

    // The GhostNav logic:
    // - Show when at the absolute top (isTop = true)
    // - Hide when scrolling down
    // - Show when scrolling up
    // - Always show if hovered (handled via css pointer-events usually, but here we just show/hide based on scroll)

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;

        if (latest <= 50) {
            setIsTop(true);
            setHidden(false);
        } else {
            setIsTop(false);
            // If we scroll down, hide. If we scroll up, show.
            if (latest > previous && latest > 150) {
                setHidden(true);
            } else {
                setHidden(false);
            }
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -20 }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                display: 'flex',
                justifyContent: 'center',
                padding: '24px 0',
                zIndex: 50,
                pointerEvents: hidden ? 'none' : 'auto',
                // Subtle gradient background for readability when scrolling up over text
                background: isTop ? 'transparent' : 'linear-gradient(to bottom, rgba(15, 17, 21, 0.9) 0%, rgba(15, 17, 21, 0) 100%)',
                backdropFilter: isTop ? 'none' : 'blur(8px)',
            }}
        >
            <Box sx={{
                display: 'flex',
                gap: { xs: 2, sm: 4 },
                alignItems: 'center',
                background: 'rgba(26, 29, 36, 0.6)',
                padding: { xs: '8px 20px', sm: '10px 32px' },
                borderRadius: '100px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                maxWidth: 'calc(100vw - 32px)',
                overflowX: 'auto',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' }
            }}>
                {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                    <Link key={item} href={`#${item.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                        <Typography
                            sx={{
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                color: 'text.secondary',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                transition: 'color 0.2s ease',
                                '&:hover': {
                                    color: 'primary.main',
                                }
                            }}
                        >
                            {item}
                        </Typography>
                    </Link>
                ))}
            </Box>
        </motion.nav>
    );
}

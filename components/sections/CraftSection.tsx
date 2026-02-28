'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion, Variants } from 'framer-motion';
import portfolioData from '@/dataset/portfolio_data.json';

const ChessKnightIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 21H8V19H16V21ZM13 17V19H11V17H8V15H16V17H13ZM15.5 15C16.8807 15 18 13.8807 18 12.5C18 11.1193 16.8807 10 15.5 10C14.8096 10 14.1846 10.2798 13.7275 10.7369C13.2704 11.194 13 11.819 13 12.5H11C11 11.5234 11.1394 10.5976 11.3912 9.84234C11.643 9.08712 12.007 8.5 12.5 8.5C12.993 8.5 13.357 9.08712 13.6088 9.84234C13.8606 10.5976 14 11.5234 14 12.5V13.5H16.5C17.3284 13.5 18 12.8284 18 12C18 11.1716 17.3284 10.5 16.5 10.5V8.5C18.433 8.5 20 10.067 20 12C20 13.933 18.433 15.5 16.5 15.5H15.5V15ZM9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8V8.5H13V8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V8.5H9V8Z" fill="currentColor" />
        <path d="M12 3C11.4477 3 11 3.44772 11 4V5.10557C9.28821 5.54924 8 7.12133 8 9V13H6V15H18V13H16V9C16 7.12133 14.7118 5.54924 13 5.10557V4C13 3.44772 12.5523 3 12 3Z" fill="currentColor" />
    </svg>
);

export default function CraftSection() {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <Box
            component="section"
            id="experience"
            sx={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                py: 15,
                px: 2
            }}
        >
            <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}
            >
                <Typography variant="h2" sx={{ mb: 4 }}>The Craft</Typography>

                <Box sx={{ mb: 8 }}>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                        {portfolioData.narrative.craft.philosophy_1.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} style={{ color: 'var(--mui-palette-primary-main)' }}>{part}</strong> : part)}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                        {portfolioData.narrative.craft.philosophy_2}
                    </Typography>
                </Box>

                {/* Vertical Timeline with Chess Motif */}
                <Box sx={{ borderLeft: '2px solid rgba(255,255,255,0.1)', pl: 4, ml: 2 }}>
                    {portfolioData.experience.map((exp, index) => (
                        <Box key={index} sx={{ position: 'relative', mb: index === portfolioData.experience.length - 1 ? 0 : 6 }}>
                            <Box sx={{
                                position: 'absolute',
                                left: index === 0 ? '-44px' : '-39px',
                                top: index === 0 ? '2px' : '6px',
                                color: index === 0 ? 'primary.main' : 'rgba(255,255,255,0.2)',
                                bgcolor: index === 0 ? 'background.default' : 'transparent',
                                width: index === 0 ? 'auto' : '12px',
                                height: index === 0 ? 'auto' : '12px',
                                borderRadius: index === 0 ? 0 : '50%',
                                p: index === 0 ? 0.5 : 0
                            }}>
                                {index === 0 ? <ChessKnightIcon /> : null}
                            </Box>
                            <Typography variant="h5" color="text.primary">{exp.role}</Typography>
                            <Typography variant="body2" color="primary.main" sx={{ mb: 1 }}>{exp.company} • {exp.period}</Typography>
                            <Box component="ul" sx={{ pl: 2, m: 0, color: 'text.secondary' }}>
                                {exp.highlights.map((highlight, hIndex) => (
                                    <Typography key={hIndex} component="li" variant="body1" sx={{ mb: 0.5 }}>
                                        {highlight}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </motion.div>
        </Box>
    );
}

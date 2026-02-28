'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion, Variants } from 'framer-motion';
import portfolioData from '@/dataset/portfolio_data.json';

export default function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <Box
            component="section"
            id="about"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                py: 10,
                px: 2
            }}
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                style={{ width: '100%', maxWidth: '800px' }}
            >
                <motion.div variants={itemVariants}>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 2,
                            color: 'primary.main',
                            letterSpacing: '0.4em',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            fontSize: '1rem'
                        }}
                    >
                        Sunil Kumar
                    </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Typography
                        variant="h1"
                        sx={{
                            mb: 3,
                            lineHeight: 0.9,
                            fontSize: { xs: '1.75rem', sm: '3rem', md: '5.5rem' },
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Software Engineer
                    </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Typography
                        variant="h4"
                        sx={{
                            mb: 5,
                            color: 'text.primary',
                            fontWeight: 400,
                            fontSize: { xs: '1.25rem', md: '2rem' },
                            maxWidth: '750px',
                            lineHeight: 1.3,
                            opacity: 0.9
                        }}
                    >
                        {portfolioData.narrative.hero.tagline}
                    </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            maxWidth: '650px',
                            lineHeight: 1.8,
                            fontSize: '1.15rem',
                            opacity: 0.8
                        }}
                    >
                        {portfolioData.narrative.hero.professional_summary}
                    </Typography>
                </motion.div>
            </motion.div>
        </Box>
    );
}

'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion, Variants } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import portfolioData from '@/dataset/portfolio_data.json';

export default function DialogueSection() {
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <Box
            component="section"
            id="contact"
            sx={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                py: 15,
                px: 2,
                textAlign: 'center'
            }}
        >
            <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                style={{ width: '100%', maxWidth: '600px' }}
            >
                <Typography variant="h2" sx={{ mb: 3 }}>{portfolioData.narrative.dialogue.title}</Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 6, fontSize: '1.2rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {portfolioData.narrative.dialogue.text}
                </Typography>

                <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<EmailIcon />}
                        href={`mailto:${portfolioData.personal.email}`}
                        sx={{ px: 4, py: 1.5, color: '#0F1115' }} // Dark text on cyan button
                    >
                        {portfolioData.narrative.dialogue.button_text}
                    </Button>

                    <Button
                        variant="outlined"
                        size="large"
                        href={portfolioData.personal.social.linkedin}
                        target="_blank"
                        sx={{
                            color: 'text.primary',
                            borderColor: 'rgba(255,255,255,0.2)',
                            '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(0, 229, 255, 0.05)' }
                        }}
                    >
                        <LinkedInIcon />
                    </Button>

                    <Button
                        variant="outlined"
                        size="large"
                        href={portfolioData.personal.social.github}
                        target="_blank"
                        sx={{
                            color: 'text.primary',
                            borderColor: 'rgba(255,255,255,0.2)',
                            '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(0, 229, 255, 0.05)' }
                        }}
                    >
                        <GitHubIcon />
                    </Button>
                </Box>
            </motion.div>
        </Box>
    );
}

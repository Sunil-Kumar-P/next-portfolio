'use client';

import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { motion, Variants } from 'framer-motion';
import { Project } from '@/types/portfolio';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

interface ProofSectionProps {
    projects: Project[];
}

export default function ProofSection({ projects }: ProofSectionProps) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <Box
            component="section"
            id="projects"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                py: 15,
                px: 2
            }}
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}
            >
                <Typography variant="h2" sx={{ mb: 8 }}>The Proof</Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {projects.map((project) => (
                        <motion.div key={project.id} variants={itemVariants}>
                            <Box
                                className="project-row"
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', md: 'row' },
                                    gap: 4,
                                    p: 4,
                                    borderRadius: 4,
                                    transition: 'all 0.3s ease',
                                    border: '1px solid transparent',
                                    '&:hover': {
                                        bgcolor: 'rgba(255, 255, 255, 0.02)',
                                        borderColor: 'rgba(255, 255, 255, 0.05)',
                                        transform: 'translateY(-4px)'
                                    }
                                }}
                            >
                                {/* Simulated Thumbnail Area */}
                                <Box
                                    sx={{
                                        width: { xs: '100%', md: '200px' },
                                        height: '120px',
                                        bgcolor: 'rgba(0, 229, 255, 0.05)',
                                        borderRadius: 2,
                                        border: '1px solid rgba(0, 229, 255, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}
                                >
                                    <Typography variant="caption" color="primary.main" sx={{ opacity: 0.5, letterSpacing: '0.1em' }}>
                                        {project.type.toUpperCase()}
                                    </Typography>
                                </Box>

                                {/* Content Area */}
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant="h4" sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                                        {project.title}
                                        <ArrowOutwardIcon sx={{ fontSize: '1.2rem', color: 'text.secondary', opacity: 0.5 }} />
                                    </Typography>
                                    <Typography variant="body2" color="primary.main" sx={{ mb: 2, fontWeight: 500 }}>
                                        {project.company}
                                    </Typography>
                                    <Box sx={{ mb: 3 }}>
                                        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                                            {project.description}
                                        </Typography>
                                        <Typography variant="body1" sx={{ color: '#E2E8F0', fontWeight: 500 }}>
                                            Impact: {project.impact}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {project.tags.map((tag) => (
                                            <Chip
                                                key={tag}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    bgcolor: 'rgba(187, 134, 252, 0.1)',
                                                    color: 'secondary.main',
                                                    fontWeight: 500,
                                                    borderRadius: '4px'
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        </motion.div>
                    ))}
                </Box>
            </motion.div>
        </Box>
    );
}

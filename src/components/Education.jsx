'use client';

import { Box, Typography, Card, CardContent, Chip } from '@mui/material';
import { MapPinIcon, CalendarIcon, GraduationCap } from 'lucide-react';
import oamkLogo from '../constants/assets/education/oamk.png';

const educationData = {
        school: 'Oulu University of Applied Sciences',
        degree: 'Bachelor of Engineering',
        field: 'Information Technology',
        gpa: '4.3/5',
        location: 'Oulu, Finland',
        period: 'August 2022 - Nov 2025',
        focusPoints: [
                'Full-stack web development with modern frameworks (React, Next.js, Node.js)',
                'Mobile application development (React Native, Expo)',
                'Database design and management (PostgreSQL, MongoDB)',
                'Cloud computing and DevOps practices',
                'Software engineering methodologies and agile practices',
                'UI/UX design principles and implementation',
        ],
        skills: [
                'Project Management',
                'Software Deployment',
                'User Interface Design',
                'Next.js',
                'TypeScript',
                'React.js',
                'Node.js',
                'MongoDB',
                'React Native',
                'Kotlin',
                'Java',
                'PostgreSQL',
                'MySQL',
                'Git',
                'Version Control',
        ],
        color: '#6366f1',
        icon: oamkLogo,
};

const Education = () => {
        return (
                <Box
                        sx={{
                                width: '100%',
                                margin: '0 auto',
                                mt: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                px: { xs: 2, md: 4 },
                        }}
                >
                        <Card
                                sx={{
                                        width: '100%',
                                        maxWidth: '800px',
                                        background: `linear-gradient(135deg, ${educationData.color}20, ${educationData.color}10)`,
                                        backdropFilter: 'blur(10px)',
                                        border: `1px solid ${educationData.color}40`,
                                        borderRadius: '20px',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: `0 10px 30px ${educationData.color}30`,
                                                border: `1px solid ${educationData.color}60`,
                                        },
                                }}
                        >
                                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                        {/* Header */}
                                        <Box
                                                sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        mb: 3,
                                                        flexWrap: { xs: 'wrap', md: 'nowrap' },
                                                }}
                                        >
                                                <Box
                                                        sx={{
                                                                width: { xs: 50, md: 60 },
                                                                height: { xs: 50, md: 60 },
                                                                borderRadius: '50%',
                                                                backgroundColor: '#FFFFFF',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                mr: { xs: 2, md: 3 },
                                                                mb: { xs: 2, md: 0 },
                                                                boxShadow: `0 0 20px ${educationData.color}40`,
                                                                overflow: 'hidden',
                                                                flexShrink: 0,
                                                        }}
                                                >
                                                        <img
                                                                src={educationData.icon}
                                                                alt={`${educationData.school} logo`}
                                                                style={{
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'contain',
                                                                }}
                                                        />
                                                </Box>
                                                <Box sx={{ flex: 1, minWidth: 0 }}>
                                                        <Typography
                                                                variant="h5"
                                                                sx={{
                                                                        color: '#ffffff',
                                                                        fontWeight: 'bold',
                                                                        mb: 0.5,
                                                                        fontSize: { xs: '1.1rem', md: '1.5rem' },
                                                                }}
                                                        >
                                                                {educationData.degree}
                                                        </Typography>
                                                        <Typography
                                                                variant="h6"
                                                                sx={{
                                                                        color: educationData.color,
                                                                        fontWeight: '600',
                                                                        mb: 1,
                                                                        fontSize: { xs: '0.9rem', md: '1.25rem' },
                                                                }}
                                                        >
                                                                {educationData.school}
                                                        </Typography>
                                                        <Typography
                                                                variant="body1"
                                                                sx={{
                                                                        color: '#cbd5e1',
                                                                        mb: 1.5,
                                                                        fontSize: { xs: '0.85rem', md: '1rem' },
                                                                }}
                                                        >
                                                                {educationData.field}
                                                        </Typography>
                                                        <Box
                                                                sx={{
                                                                        display: 'flex',
                                                                        flexDirection: { xs: 'column', sm: 'row' },
                                                                        alignItems: { xs: 'flex-start', sm: 'center' },
                                                                        gap: { xs: 0.5, sm: 2 },
                                                                        flexWrap: 'wrap',
                                                                }}
                                                        >
                                                                <Box
                                                                        sx={{
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                gap: 0.5,
                                                                        }}
                                                                >
                                                                        <GraduationCap size={16} color="#94a3b8" />
                                                                        <Typography
                                                                                variant="body2"
                                                                                sx={{
                                                                                        color: '#94a3b8',
                                                                                        fontSize: {
                                                                                                xs: '0.75rem',
                                                                                                md: '0.875rem',
                                                                                        },
                                                                                }}
                                                                        >
                                                                                GPA: {educationData.gpa}
                                                                        </Typography>
                                                                </Box>
                                                                <Box
                                                                        sx={{
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                gap: 0.5,
                                                                        }}
                                                                >
                                                                        <MapPinIcon size={16} color="#94a3b8" />
                                                                        <Typography
                                                                                variant="body2"
                                                                                sx={{
                                                                                        color: '#94a3b8',
                                                                                        fontSize: {
                                                                                                xs: '0.75rem',
                                                                                                md: '0.875rem',
                                                                                        },
                                                                                }}
                                                                        >
                                                                                {educationData.location}
                                                                        </Typography>
                                                                </Box>
                                                                <Box
                                                                        sx={{
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                gap: 0.5,
                                                                        }}
                                                                >
                                                                        <CalendarIcon size={16} color="#94a3b8" />
                                                                        <Typography
                                                                                variant="body2"
                                                                                sx={{
                                                                                        color: '#94a3b8',
                                                                                        fontSize: {
                                                                                                xs: '0.75rem',
                                                                                                md: '0.875rem',
                                                                                        },
                                                                                }}
                                                                        >
                                                                                {educationData.period}
                                                                        </Typography>
                                                                </Box>
                                                        </Box>
                                                </Box>
                                        </Box>

                                        {/* Focus Points */}
                                        <Box sx={{ mb: 3 }}>
                                                <Typography
                                                        variant="h6"
                                                        sx={{
                                                                color: '#ffffff',
                                                                fontWeight: '600',
                                                                mb: 2,
                                                                fontSize: { xs: '0.9rem', md: '1.1rem' },
                                                        }}
                                                >
                                                        Focus Areas:
                                                </Typography>
                                                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                                        {educationData.focusPoints.map((point, idx) => (
                                                                <Typography
                                                                        key={idx}
                                                                        component="li"
                                                                        variant="body2"
                                                                        sx={{
                                                                                color: '#cbd5e1',
                                                                                mb: 1,
                                                                                lineHeight: 1.6,
                                                                                listStyleType: 'disc',
                                                                                fontSize: {
                                                                                        xs: '0.8rem',
                                                                                        md: '0.875rem',
                                                                                },
                                                                                '&::marker': {
                                                                                        color: educationData.color,
                                                                                },
                                                                        }}
                                                                >
                                                                        {point}
                                                                </Typography>
                                                        ))}
                                                </Box>
                                        </Box>

                                        {/* Skills */}
                                        <Box>
                                                <Typography
                                                        variant="h6"
                                                        sx={{
                                                                color: '#ffffff',
                                                                fontWeight: '600',
                                                                mb: 2,
                                                                fontSize: { xs: '0.9rem', md: '1.1rem' },
                                                        }}
                                                >
                                                        Skills:
                                                </Typography>
                                                <Box
                                                        sx={{
                                                                display: 'flex',
                                                                flexWrap: 'wrap',
                                                                gap: 1,
                                                        }}
                                                >
                                                        {educationData.skills.map((skill, idx) => (
                                                                <Chip
                                                                        key={idx}
                                                                        label={skill}
                                                                        size="small"
                                                                        sx={{
                                                                                backgroundColor: `${educationData.color}20`,
                                                                                color: educationData.color,
                                                                                border: `1px solid ${educationData.color}40`,
                                                                                '&:hover': {
                                                                                        backgroundColor: `${educationData.color}30`,
                                                                                },
                                                                        }}
                                                                />
                                                        ))}
                                                </Box>
                                        </Box>
                                </CardContent>
                        </Card>
                </Box>
        );
};

export default Education;

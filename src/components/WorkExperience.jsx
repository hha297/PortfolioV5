'use client';

import React, { useState } from 'react';
import { Box, Typography, Chip, Card, CardContent, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { MapPinIcon, CalendarIcon, BriefcaseIcon } from 'lucide-react';
import SwipeableViews from 'react-swipeable-views';
import { FactoriseLogo, BeiarntekLogo, KatchLogo } from '../constants/assets/company/index.js';

const workExperienceData = [
        {
                id: 1,
                position: 'Mobile Developer',
                company: 'Factorise Technologies ApS',
                location: 'Kolding, Denmark (Remote)',
                period: 'August 2025 - Present',
                type: 'Internship',
                responsibilities: [
                        'Develop and maintain mobile applications using React Native and modern mobile technologies',
                        'Debug and fix critical bugs in mobile applications across iOS and Android platforms',
                        'Implement responsive UI components and ensure optimal user experience on mobile devices',
                        'Implement new features and enhancements for mobile applications',
                        'Collaborate with backend developers to integrate mobile APIs and ensure seamless data flow',
                        'Work with design teams to implement mobile-first UI designs',
                ],
                technologies: [
                        'React Native',
                        'TypeScript',
                        'Expo',
                        'Android',
                        'Mobile UI/UX',
                        'Git',
                        'RESTful APIs',
                        'Mobile Testing',
                ],
                icon: FactoriseLogo,
                color: '#6366f1',
        },
        {
                id: 2,
                position: 'Front End Developer',
                company: 'Beiarntek AS',
                location: 'Moldjord, Norway (Remote)',
                period: 'February 2025 - August 2025',
                type: 'Internship',
                responsibilities: [
                        'Developed user-facing webpages with Next.js and ShadcnUI, implementing state management through Zustand',
                        'Collaborated with back-end developers for seamless integration of UI components',
                        'Managed source control repositories in GitLab and GitHub, ensuring version integrity',
                        'Integrated payment systems via VIPPS Mobile Pay - Paytrail and implemented locker system using MQTT API',
                        'Created AI chatbot to enhance user interaction and support functionalities',
                ],
                technologies: ['Next.js', 'ShadcnUI', 'Zustand', 'VIPPS', 'Paytrail', 'Mistral AI', 'Git', 'UI/UX'],
                icon: BeiarntekLogo,
                color: '#a855f7',
        },
        {
                id: 3,
                position: 'Full Stack Developer',
                company: 'Katch Today Oy',
                location: 'Espoo, Finland (Remote)',
                period: 'August 2024 - February 2025',
                type: 'Internship',
                responsibilities: [
                        'Developed React applications using Redux state management and RESTful APIs',
                        'Debugged and resolved issues related to React components',
                        'Deployed web applications on Firebase Hosting',
                        'Managed source control repositories including GitLab and GitHub',
                        'Collaborated with UI and UX designers to ensure the best user experience',
                ],
                technologies: ['React.js', 'Redux', 'RESTful APIs', 'Firebase', 'Stripe'],
                icon: KatchLogo,
                color: '#22c55e',
        },
];

const WorkExperience = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
        const [isMobile, setIsMobile] = useState(false);

        // Check if mobile on mount and resize
        React.useEffect(() => {
                const checkMobile = () => {
                        setIsMobile(window.innerWidth < 768);
                };

                checkMobile();
                window.addEventListener('resize', checkMobile);

                return () => window.removeEventListener('resize', checkMobile);
        }, []);

        const handleNext = () => {
                setCurrentIndex((prev) => (prev + 1) % workExperienceData.length);
        };

        const handlePrev = () => {
                setCurrentIndex((prev) => (prev - 1 + workExperienceData.length) % workExperienceData.length);
        };

        const handleChangeIndex = (index) => {
                setCurrentIndex(index);
        };

        const renderExperienceCard = (experience) => {
                return (
                        <Box
                                key={experience.id}
                                sx={{
                                        width: '100%',
                                        height: '100%',
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
                                                background: `linear-gradient(135deg, ${experience.color}20, ${experience.color}10)`,
                                                backdropFilter: 'blur(10px)',
                                                border: `1px solid ${experience.color}40`,
                                                borderRadius: '20px',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                        transform: 'translateY(-4px)',
                                                        boxShadow: `0 10px 30px ${experience.color}30`,
                                                        border: `1px solid ${experience.color}60`,
                                                },
                                        }}
                                >
                                        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                                                {/* Header */}
                                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                                        <Box
                                                                sx={{
                                                                        width: 60,
                                                                        height: 60,
                                                                        borderRadius: '50%',
                                                                        backgroundColor: experience.color,
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        mr: 3,
                                                                        boxShadow: `0 0 20px ${experience.color}40`,
                                                                        overflow: 'hidden',
                                                                }}
                                                        >
                                                                <img
                                                                        src={experience.icon}
                                                                        alt={`${experience.company} logo`}
                                                                        style={{
                                                                                width: '100%',
                                                                                height: '100%',
                                                                                objectFit: 'cover',
                                                                        }}
                                                                />
                                                        </Box>
                                                        <Box>
                                                                <Typography
                                                                        variant="h5"
                                                                        sx={{
                                                                                color: '#ffffff',
                                                                                fontWeight: 'bold',
                                                                                mb: 0.5,
                                                                        }}
                                                                >
                                                                        {experience.position}
                                                                </Typography>
                                                                <Typography
                                                                        variant="h6"
                                                                        sx={{
                                                                                color: experience.color,
                                                                                fontWeight: '600',
                                                                                mb: 0.5,
                                                                        }}
                                                                >
                                                                        {experience.company}
                                                                </Typography>
                                                                <Box
                                                                        sx={{
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                gap: 1,
                                                                        }}
                                                                >
                                                                        <BriefcaseIcon size={16} color="#94a3b8" />
                                                                        <Typography
                                                                                variant="body2"
                                                                                sx={{ color: '#94a3b8' }}
                                                                        >
                                                                                {experience.type}
                                                                        </Typography>
                                                                        <MapPinIcon size={16} color="#94a3b8" />
                                                                        <Typography
                                                                                variant="body2"
                                                                                sx={{ color: '#94a3b8' }}
                                                                        >
                                                                                {experience.location}
                                                                        </Typography>
                                                                        <CalendarIcon size={16} color="#94a3b8" />
                                                                        <Typography
                                                                                variant="body2"
                                                                                sx={{ color: '#94a3b8' }}
                                                                        >
                                                                                {experience.period}
                                                                        </Typography>
                                                                </Box>
                                                        </Box>
                                                </Box>

                                                {/* Responsibilities */}
                                                <Box sx={{ mb: 3 }}>
                                                        <Typography
                                                                variant="h6"
                                                                sx={{
                                                                        color: '#ffffff',
                                                                        fontWeight: '600',
                                                                        mb: 2,
                                                                }}
                                                        >
                                                                Key Responsibilities:
                                                        </Typography>
                                                        <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                                                {experience.responsibilities.map((resp, idx) => (
                                                                        <Typography
                                                                                key={idx}
                                                                                component="li"
                                                                                variant="body2"
                                                                                sx={{
                                                                                        color: '#cbd5e1',
                                                                                        mb: 1,
                                                                                        lineHeight: 1.6,
                                                                                        listStyleType: 'disc',
                                                                                        '&::marker': {
                                                                                                color: experience.color,
                                                                                        },
                                                                                }}
                                                                        >
                                                                                {resp}
                                                                        </Typography>
                                                                ))}
                                                        </Box>
                                                </Box>

                                                {/* Technologies */}
                                                <Box>
                                                        <Typography
                                                                variant="h6"
                                                                sx={{
                                                                        color: '#ffffff',
                                                                        fontWeight: '600',
                                                                        mb: 2,
                                                                }}
                                                        >
                                                                Technologies Used:
                                                        </Typography>
                                                        <Box
                                                                sx={{
                                                                        display: 'flex',
                                                                        flexWrap: 'wrap',
                                                                        gap: 1,
                                                                }}
                                                        >
                                                                {experience.technologies.map((tech, idx) => (
                                                                        <Chip
                                                                                key={idx}
                                                                                label={tech}
                                                                                size="small"
                                                                                sx={{
                                                                                        backgroundColor: `${experience.color}20`,
                                                                                        color: experience.color,
                                                                                        border: `1px solid ${experience.color}40`,
                                                                                        '&:hover': {
                                                                                                backgroundColor: `${experience.color}30`,
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

        // Mobile Timeline Layout
        const renderMobileTimeline = () => {
                return (
                        <Box sx={{ width: '100%', px: 2 }}>
                                {workExperienceData.map((experience) => (
                                        <Card
                                                key={experience.id}
                                                sx={{
                                                        mb: 3,
                                                        background: `linear-gradient(135deg, ${experience.color}20, ${experience.color}10)`,
                                                        backdropFilter: 'blur(10px)',
                                                        border: `1px solid ${experience.color}40`,
                                                        borderRadius: '16px',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                                transform: 'translateY(-2px)',
                                                                boxShadow: `0 8px 25px ${experience.color}30`,
                                                        },
                                                }}
                                        >
                                                <CardContent sx={{ p: 3 }}>
                                                        {/* Header */}
                                                        <Box sx={{ mb: 2 }}>
                                                                {/* Logo and Title Row */}
                                                                <Box
                                                                        sx={{
                                                                                display: 'flex',
                                                                                alignItems: 'center',
                                                                                mb: 1,
                                                                        }}
                                                                >
                                                                        <Box
                                                                                sx={{
                                                                                        width: 40,
                                                                                        height: 40,
                                                                                        borderRadius: '50%',
                                                                                        backgroundColor:
                                                                                                experience.color,
                                                                                        display: 'flex',
                                                                                        alignItems: 'center',
                                                                                        justifyContent: 'center',
                                                                                        mr: 2,
                                                                                        boxShadow: `0 0 15px ${experience.color}40`,
                                                                                        overflow: 'hidden',
                                                                                        flexShrink: 0,
                                                                                }}
                                                                        >
                                                                                <img
                                                                                        src={experience.icon}
                                                                                        alt={`${experience.company} logo`}
                                                                                        style={{
                                                                                                width: '100%',
                                                                                                height: '100%',
                                                                                                objectFit: 'cover',
                                                                                        }}
                                                                                />
                                                                        </Box>
                                                                        <Box sx={{ flex: 1, minWidth: 0 }}>
                                                                                <Typography
                                                                                        variant="h6"
                                                                                        sx={{
                                                                                                color: '#ffffff',
                                                                                                fontWeight: 'bold',
                                                                                                mb: 0.5,
                                                                                                fontSize: '1rem',
                                                                                                lineHeight: 1.2,
                                                                                        }}
                                                                                >
                                                                                        {experience.position}
                                                                                </Typography>
                                                                        </Box>
                                                                </Box>

                                                                {/* Company Name */}
                                                                <Typography
                                                                        variant="subtitle1"
                                                                        sx={{
                                                                                color: experience.color,
                                                                                fontWeight: '600',
                                                                                mb: 1,
                                                                                fontSize: '0.9rem',
                                                                        }}
                                                                >
                                                                        {experience.company}
                                                                </Typography>

                                                                {/* Type, Location and Period */}
                                                                <Box
                                                                        sx={{
                                                                                display: 'flex',
                                                                                flexDirection: 'column',
                                                                                gap: 0.5,
                                                                        }}
                                                                >
                                                                        <Box
                                                                                sx={{
                                                                                        display: 'flex',
                                                                                        alignItems: 'center',
                                                                                        gap: 1,
                                                                                }}
                                                                        >
                                                                                <BriefcaseIcon
                                                                                        size={14}
                                                                                        color="#94a3b8"
                                                                                />
                                                                                <Typography
                                                                                        variant="body2"
                                                                                        sx={{
                                                                                                color: '#94a3b8',
                                                                                                fontSize: '0.75rem',
                                                                                        }}
                                                                                >
                                                                                        {experience.type}
                                                                                </Typography>
                                                                        </Box>
                                                                        <Box
                                                                                sx={{
                                                                                        display: 'flex',
                                                                                        alignItems: 'center',
                                                                                        gap: 1,
                                                                                }}
                                                                        >
                                                                                <MapPinIcon size={14} color="#94a3b8" />
                                                                                <Typography
                                                                                        variant="body2"
                                                                                        sx={{
                                                                                                color: '#94a3b8',
                                                                                                fontSize: '0.75rem',
                                                                                        }}
                                                                                >
                                                                                        {experience.location}
                                                                                </Typography>
                                                                        </Box>
                                                                        <Box
                                                                                sx={{
                                                                                        display: 'flex',
                                                                                        alignItems: 'center',
                                                                                        gap: 1,
                                                                                }}
                                                                        >
                                                                                <CalendarIcon
                                                                                        size={14}
                                                                                        color="#94a3b8"
                                                                                />
                                                                                <Typography
                                                                                        variant="body2"
                                                                                        sx={{
                                                                                                color: '#94a3b8',
                                                                                                fontSize: '0.75rem',
                                                                                        }}
                                                                                >
                                                                                        {experience.period}
                                                                                </Typography>
                                                                        </Box>
                                                                </Box>
                                                        </Box>

                                                        {/* Responsibilities */}
                                                        <Box sx={{ mb: 2 }}>
                                                                <Typography
                                                                        variant="subtitle2"
                                                                        sx={{
                                                                                color: '#ffffff',
                                                                                fontWeight: '600',
                                                                                mb: 1,
                                                                        }}
                                                                >
                                                                        Key Responsibilities:
                                                                </Typography>
                                                                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                                                        {experience.responsibilities
                                                                                .slice(0, 3)
                                                                                .map((resp, idx) => (
                                                                                        <Typography
                                                                                                key={idx}
                                                                                                component="li"
                                                                                                variant="body2"
                                                                                                sx={{
                                                                                                        color: '#cbd5e1',
                                                                                                        mb: 0.5,
                                                                                                        lineHeight: 1.4,
                                                                                                        fontSize: '0.8rem',
                                                                                                        listStyleType:
                                                                                                                'disc',
                                                                                                        '&::marker': {
                                                                                                                color: experience.color,
                                                                                                        },
                                                                                                }}
                                                                                        >
                                                                                                {resp}
                                                                                        </Typography>
                                                                                ))}
                                                                </Box>
                                                        </Box>

                                                        {/* Technologies */}
                                                        <Box>
                                                                <Typography
                                                                        variant="subtitle2"
                                                                        sx={{
                                                                                color: '#ffffff',
                                                                                fontWeight: '600',
                                                                                mb: 1,
                                                                        }}
                                                                >
                                                                        Technologies:
                                                                </Typography>
                                                                <Box
                                                                        sx={{
                                                                                display: 'flex',
                                                                                flexWrap: 'wrap',
                                                                                gap: 0.5,
                                                                        }}
                                                                >
                                                                        {experience.technologies
                                                                                .slice(0, 6)
                                                                                .map((tech, idx) => (
                                                                                        <Chip
                                                                                                key={idx}
                                                                                                label={tech}
                                                                                                size="small"
                                                                                                sx={{
                                                                                                        backgroundColor: `${experience.color}20`,
                                                                                                        color: experience.color,
                                                                                                        border: `1px solid ${experience.color}40`,
                                                                                                        fontSize: '0.7rem',
                                                                                                        height: '24px',
                                                                                                        '&:hover': {
                                                                                                                backgroundColor: `${experience.color}30`,
                                                                                                        },
                                                                                                }}
                                                                                        />
                                                                                ))}
                                                                </Box>
                                                        </Box>
                                                </CardContent>
                                        </Card>
                                ))}
                        </Box>
                );
        };

        return (
                <Box
                        sx={{
                                width: '100%',
                                margin: '0 auto',
                                mt: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                        }}
                >
                        {/* Mobile Layout */}
                        {isMobile ? (
                                renderMobileTimeline()
                        ) : (
                                <>
                                        {/* Desktop Navigation Controls */}
                                        <Box
                                                sx={{
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        mb: 3,
                                                        gap: 2,
                                                }}
                                        >
                                                <IconButton
                                                        onClick={handlePrev}
                                                        sx={{
                                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                                color: '#ffffff',
                                                                '&:hover': {
                                                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                                },
                                                        }}
                                                >
                                                        <ChevronLeft />
                                                </IconButton>

                                                <Box sx={{ display: 'flex', gap: 1 }}>
                                                        {workExperienceData.map((_, index) => (
                                                                <Box
                                                                        key={index}
                                                                        onClick={() => setCurrentIndex(index)}
                                                                        sx={{
                                                                                width: 12,
                                                                                height: 12,
                                                                                borderRadius: '50%',
                                                                                backgroundColor:
                                                                                        currentIndex === index
                                                                                                ? '#6366f1'
                                                                                                : 'rgba(255, 255, 255, 0.3)',
                                                                                cursor: 'pointer',
                                                                                transition: 'all 0.3s ease',
                                                                                '&:hover': {
                                                                                        backgroundColor:
                                                                                                currentIndex === index
                                                                                                        ? '#6366f1'
                                                                                                        : 'rgba(255, 255, 255, 0.5)',
                                                                                },
                                                                        }}
                                                                />
                                                        ))}
                                                </Box>

                                                <IconButton
                                                        onClick={handleNext}
                                                        sx={{
                                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                                color: '#ffffff',
                                                                '&:hover': {
                                                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                                },
                                                        }}
                                                >
                                                        <ChevronRight />
                                                </IconButton>
                                        </Box>

                                        {/* Desktop Swipeable Views with Mouse/Touch Support */}
                                        <Box sx={{ height: '600px', position: 'relative' }}>
                                                <SwipeableViews
                                                        index={currentIndex}
                                                        onChangeIndex={handleChangeIndex}
                                                        enableMouseEvents
                                                        enableKeyboardEvents
                                                        style={{ height: '100%' }}
                                                >
                                                        {workExperienceData.map((experience) =>
                                                                renderExperienceCard(experience),
                                                        )}
                                                </SwipeableViews>
                                        </Box>
                                </>
                        )}
                </Box>
        );
};

export default WorkExperience;

'use client';

import { useState } from 'react';
import {
        Timeline,
        TimelineItem,
        TimelineSeparator,
        TimelineConnector,
        TimelineContent,
        TimelineDot,
        TimelineOppositeContent,
} from '@mui/lab';
import { Box, Typography, Chip, Card, CardContent, Collapse, IconButton } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { Code2Icon, MapPinIcon } from 'lucide-react';

const workExperienceData = [
        {
                id: 1,
                position: 'Front End Developer Trainee',
                company: 'Beiarntek AS',
                location: 'Moldjord, Norway',
                period: 'February 2025 - August 2025',
                type: 'Trainee',
                responsibilities: [
                        'Managed source control repositories in GitLab and GitHub, ensuring version integrity',
                        'Developed user-facing webpages with Next.js and ShadcnUI, implementing state management through Zustand',
                        'Collaborated with back-end developers for seamless integration of UI components',
                        'Integrated payment systems via VIPPS Mobile Pay - Paytrail and implemented locker system using MQTT API',
                        'Created AI chatbot to enhance user interaction and support functionalities',
                ],
                technologies: ['Next.js', 'ShadcnUI', 'Zustand', 'VIPPS', 'Paytrail', 'MQTT API', 'Mistral AI'],
                icon: <Code2Icon />,
                color: '#6366f1',
        },
        {
                id: 2,
                position: 'Full Stack Developer Trainee',
                company: 'Katch Today Oy',
                location: 'Espoo, Finland',
                period: 'August 2024 - February 2025',
                type: 'Trainee',
                responsibilities: [
                        'Managed source control repositories including GitLab and GitHub',
                        'Collaborated with UI and UX designers to ensure the best user experience',
                        'Debugged and resolved issues related to React components',
                        'Developed React applications using Redux state management and RESTful APIs',
                        'Deployed web applications on Firebase Hosting',
                ],
                technologies: ['React.js', 'Redux', 'RESTful APIs', 'Firebase', 'Stripe'],
                icon: <Code2Icon />,
                color: '#a855f7',
        },
];

const WorkExperience = () => {
        const [openIndex, setOpenIndex] = useState(null);

        return (
                <Box
                        sx={{
                                width: '100%',
                                maxWidth: '1200px',
                                margin: '0 auto',
                                mt: 2,
                        }}
                >
                        {/* Desktop Timeline */}
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Timeline position="alternate" sx={{ padding: 0 }}>
                                        {workExperienceData.map((experience, index) => {
                                                const isOpen = openIndex === index;
                                                return (
                                                        <TimelineItem key={experience.id}>
                                                                <TimelineOppositeContent
                                                                        sx={{
                                                                                m: '0',

                                                                                display: 'flex',
                                                                                flexDirection: 'column',
                                                                                alignItems:
                                                                                        index % 2 === 0
                                                                                                ? 'flex-end'
                                                                                                : 'flex-start',
                                                                        }}
                                                                >
                                                                        <Typography
                                                                                variant="body2"
                                                                                sx={{
                                                                                        color: '#94a3b8',
                                                                                        fontWeight: 600,
                                                                                        mb: 1,
                                                                                        textAlign:
                                                                                                index % 2 === 0
                                                                                                        ? 'right'
                                                                                                        : 'left',
                                                                                }}
                                                                        >
                                                                                {experience.period}
                                                                        </Typography>
                                                                        <Chip
                                                                                label={experience.type}
                                                                                size="small"
                                                                                sx={{
                                                                                        backgroundColor: `${experience.color}20`,
                                                                                        color: experience.color,
                                                                                        fontWeight: 600,
                                                                                }}
                                                                        />
                                                                </TimelineOppositeContent>

                                                                <TimelineSeparator>
                                                                        <TimelineDot
                                                                                sx={{
                                                                                        backgroundColor:
                                                                                                experience.color,
                                                                                        width: 60,
                                                                                        height: 60,
                                                                                        display: 'flex',
                                                                                        alignItems: 'center',
                                                                                        justifyContent: 'center',
                                                                                        boxShadow: `0 0 20px ${experience.color}40`,
                                                                                        '& .MuiSvgIcon-root': {
                                                                                                color: 'white',
                                                                                                fontSize: '1.5rem',
                                                                                        },
                                                                                }}
                                                                        >
                                                                                {experience.icon}
                                                                        </TimelineDot>
                                                                        {index < workExperienceData.length - 1 && (
                                                                                <TimelineConnector
                                                                                        sx={{
                                                                                                backgroundColor:
                                                                                                        '#374151',
                                                                                                width: 2,
                                                                                                minHeight: 100,
                                                                                        }}
                                                                                />
                                                                        )}
                                                                </TimelineSeparator>

                                                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                                                        <Card
                                                                                sx={{
                                                                                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
                                                                                        backdropFilter: 'blur(10px)',
                                                                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                                                                        borderRadius: '16px',
                                                                                        transition: 'all 0.3s ease',
                                                                                        '&:hover': {
                                                                                                transform: 'translateY(-4px)',
                                                                                                boxShadow: `0 10px 30px ${experience.color}20`,
                                                                                                border: `1px solid ${experience.color}40`,
                                                                                        },
                                                                                }}
                                                                        >
                                                                                <CardContent
                                                                                        sx={{ p: 3, textAlign: 'left' }}
                                                                                >
                                                                                        <Typography
                                                                                                variant="h5"
                                                                                                sx={{
                                                                                                        color: 'white',
                                                                                                        fontWeight: 700,
                                                                                                        mb: 1,
                                                                                                }}
                                                                                        >
                                                                                                {experience.position}
                                                                                        </Typography>
                                                                                        <Typography
                                                                                                variant="h6"
                                                                                                sx={{
                                                                                                        color: experience.color,
                                                                                                        fontWeight: 600,
                                                                                                        mb: 1,
                                                                                                }}
                                                                                        >
                                                                                                {experience.company}
                                                                                        </Typography>
                                                                                        <Typography
                                                                                                className="flex items-center"
                                                                                                variant="body2"
                                                                                                sx={{
                                                                                                        color: '#94a3b8',
                                                                                                        mb: 2,
                                                                                                }}
                                                                                        >
                                                                                                <MapPinIcon className="size-4 mr-1" />
                                                                                                {experience.location}
                                                                                        </Typography>
                                                                                        <Typography
                                                                                                variant="body1"
                                                                                                sx={{
                                                                                                        color: '#e2e8f0',
                                                                                                        fontWeight: 600,
                                                                                                        mb: 1,
                                                                                                        display: 'flex',
                                                                                                        alignItems: 'center',
                                                                                                }}
                                                                                        >
                                                                                                Key Responsibilities
                                                                                                <IconButton
                                                                                                        size="small"
                                                                                                        onClick={() =>
                                                                                                                setOpenIndex(
                                                                                                                        isOpen
                                                                                                                                ? null
                                                                                                                                : index,
                                                                                                                )
                                                                                                        }
                                                                                                        sx={{
                                                                                                                color: '#e2e8f0',
                                                                                                        }}
                                                                                                >
                                                                                                        {isOpen ? (
                                                                                                                <ExpandLess />
                                                                                                        ) : (
                                                                                                                <ExpandMore />
                                                                                                        )}
                                                                                                </IconButton>
                                                                                        </Typography>
                                                                                        <Collapse in={isOpen}>
                                                                                                <Box
                                                                                                        component="ul"
                                                                                                        sx={{
                                                                                                                mb: 3,
                                                                                                                listStyleType:
                                                                                                                        'disc',
                                                                                                                listStylePosition:
                                                                                                                        'inside',
                                                                                                        }}
                                                                                                >
                                                                                                        {experience.responsibilities.map(
                                                                                                                (
                                                                                                                        r,
                                                                                                                        idx,
                                                                                                                ) => (
                                                                                                                        <Typography
                                                                                                                                key={
                                                                                                                                        idx
                                                                                                                                }
                                                                                                                                component="li"
                                                                                                                                variant="body2"
                                                                                                                                sx={{
                                                                                                                                        color: '#cbd5e1',
                                                                                                                                        mb: 1,
                                                                                                                                        lineHeight: 1.6,
                                                                                                                                }}
                                                                                                                        >
                                                                                                                                {
                                                                                                                                        r
                                                                                                                                }
                                                                                                                        </Typography>
                                                                                                                ),
                                                                                                        )}
                                                                                                </Box>
                                                                                        </Collapse>
                                                                                        <Typography
                                                                                                variant="body1"
                                                                                                sx={{
                                                                                                        color: '#e2e8f0',
                                                                                                        fontWeight: 600,
                                                                                                        mb: 1,
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
                                                                                                {experience.technologies.map(
                                                                                                        (tech, idx) => (
                                                                                                                <Chip
                                                                                                                        key={
                                                                                                                                idx
                                                                                                                        }
                                                                                                                        label={
                                                                                                                                tech
                                                                                                                        }
                                                                                                                        size="small"
                                                                                                                        sx={{
                                                                                                                                backgroundColor:
                                                                                                                                        'rgba(255, 255, 255, 0.1)',
                                                                                                                                color: '#e2e8f0',
                                                                                                                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                                                                                                                '&:hover': {
                                                                                                                                        backgroundColor: `${experience.color}20`,
                                                                                                                                        color: experience.color,
                                                                                                                                        border: `1px solid ${experience.color}40`,
                                                                                                                                },
                                                                                                                        }}
                                                                                                                />
                                                                                                        ),
                                                                                                )}
                                                                                        </Box>
                                                                                </CardContent>
                                                                        </Card>
                                                                </TimelineContent>
                                                        </TimelineItem>
                                                );
                                        })}
                                </Timeline>
                        </Box>

                        {/* Mobile Horizontal Scroll Cards */}
                        <Box sx={{ display: { xs: 'block', md: 'none' }, pb: 4 }}>
                                {workExperienceData.map((exp, index) => {
                                        const isOpen = openIndex === index;

                                        return (
                                                <Card
                                                        key={exp.id}
                                                        sx={{
                                                                width: '100%',
                                                                mb: 3,
                                                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
                                                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                                                borderRadius: '16px',
                                                                p: 2,
                                                        }}
                                                >
                                                        <Typography
                                                                variant="h6"
                                                                sx={{ color: exp.color, fontWeight: 600 }}
                                                        >
                                                                {exp.company}
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                                                                {exp.position}
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ color: '#94a3b8', mb: 2 }}>
                                                                {exp.period}
                                                        </Typography>
                                                        <Typography
                                                                className="flex items-center"
                                                                variant="body2"
                                                                sx={{ color: '#cbd5e1', mb: 1 }}
                                                        >
                                                                <MapPinIcon className="size-4 mr-1" /> {exp.location}
                                                        </Typography>

                                                        <Typography
                                                                variant="body1"
                                                                sx={{
                                                                        color: '#e2e8f0',
                                                                        fontWeight: 600,
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        cursor: 'pointer',
                                                                        mb: 1,
                                                                }}
                                                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                                        >
                                                                Key Responsibilities
                                                                <IconButton size="small" sx={{ color: '#e2e8f0' }}>
                                                                        {isOpen ? <ExpandLess /> : <ExpandMore />}
                                                                </IconButton>
                                                        </Typography>

                                                        <Collapse in={isOpen}>
                                                                <Box
                                                                        component="ul"
                                                                        sx={{
                                                                                mb: 2,
                                                                                listStyleType: 'disc',
                                                                                listStylePosition: 'inside',
                                                                        }}
                                                                >
                                                                        {exp.responsibilities.map((r, idx) => (
                                                                                <Typography
                                                                                        key={idx}
                                                                                        component="li"
                                                                                        variant="body2"
                                                                                        sx={{
                                                                                                color: '#cbd5e1',
                                                                                                mb: 1,
                                                                                                lineHeight: 1.6,
                                                                                        }}
                                                                                >
                                                                                        {r}
                                                                                </Typography>
                                                                        ))}
                                                                </Box>
                                                        </Collapse>

                                                        <Typography
                                                                variant="body1"
                                                                sx={{ color: '#e2e8f0', fontWeight: 600, mb: 1 }}
                                                        >
                                                                Technologies Used:
                                                        </Typography>
                                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                                {exp.technologies.map((tech, idx) => (
                                                                        <Chip
                                                                                key={idx}
                                                                                label={tech}
                                                                                size="small"
                                                                                sx={{
                                                                                        backgroundColor:
                                                                                                'rgba(255, 255, 255, 0.1)',
                                                                                        color: '#e2e8f0',
                                                                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                                                                }}
                                                                        />
                                                                ))}
                                                        </Box>
                                                </Card>
                                        );
                                })}
                        </Box>
                </Box>
        );
};

export default WorkExperience;

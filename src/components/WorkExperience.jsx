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
import {
        Box,
        Typography,
        Chip,
        Card,
        CardContent,
        Collapse,
        Button,
        Stack,
        Link as MuiLink,
        Paper,
} from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { Code2Icon, MapPinIcon, GithubIcon, ExternalLinkIcon, StarIcon } from 'lucide-react';

const MAX_VISIBLE_ITEMS = 3;

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
        {
                id: 3,
                position: 'Freelance Developer',
                company: 'Upwork',
                location: 'Remote',
                period: 'Jun 2024 – Present',
                type: 'Freelance',
                color: '#22c55e',
                icon: <Code2Icon />,
                projects: [
                        {
                                title: 'Meet AI',
                                description:
                                        'AI-powered meeting assistant with real-time transcription and smart summaries',
                                live: 'https://meet-ai-zeta.vercel.app/',
                                github: 'https://github.com/hha297/Meet.ai',
                                tech: [
                                        'Next.js',
                                        'React',
                                        'Tailwind CSS',
                                        'Shadcn/ui',
                                        'Stream',
                                        'Inngest',
                                        'OpenAI',
                                        'CodeRabbit',
                                        'Polar',
                                        'Neon PostgreSQL',
                                        'Better Auth',
                                ],
                                featured: true,
                        },
                        {
                                title: 'Funroad',
                                description:
                                        'Interactive e-commerce app where creators have their own storefronts, sell digital products,',
                                live: 'https://funroad-iota.vercel.app/',
                                github: 'https://github.com/hha297/Funroad',
                                tech: [
                                        'Next.js',
                                        'React.js',
                                        'TypeScript',
                                        'TailwindCSS',
                                        'MongoDB',
                                        'Payload CMS',
                                        'Stripe',
                                ],
                                featured: true,
                        },
                ],
        },
];

const WorkExperience = () => {
        const [openIndex, setOpenIndex] = useState(null);

        const toggleIndex = (index) => {
                setOpenIndex((prev) => (prev === index ? null : index));
        };

        const renderProjectCard = (project, color, index) => {
                return (
                        <Paper
                                key={`project-${index}`}
                                elevation={0}
                                sx={{
                                        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(34, 197, 94, 0.04))',
                                        border: '1px solid rgba(34, 197, 94, 0.2)',
                                        borderRadius: '12px',
                                        p: 3,
                                        mb: 2,
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        '&:hover': {
                                                transform: 'translateY(-2px)',
                                                boxShadow: `0 8px 25px rgba(34, 197, 94, 0.15)`,
                                                border: '1px solid rgba(34, 197, 94, 0.4)',
                                                '& .project-links': {
                                                        opacity: 1,
                                                        transform: 'translateY(0)',
                                                },
                                        },
                                        '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                height: '3px',
                                                background: `linear-gradient(90deg, ${color}, rgba(34, 197, 94, 0.6))`,
                                                borderRadius: '12px 12px 0 0',
                                        },
                                }}
                        >
                                {project.featured && (
                                        <Box
                                                sx={{
                                                        position: 'absolute',
                                                        top: 12,
                                                        right: 12,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 0.5,
                                                        color: color,
                                                        fontSize: '0.75rem',
                                                        fontWeight: 600,
                                                }}
                                        >
                                                <StarIcon size={14} />
                                                Featured
                                        </Box>
                                )}

                                <Typography
                                        variant="h6"
                                        sx={{
                                                color: 'white',
                                                fontWeight: 700,
                                                mb: 1,
                                                pr: project.featured ? 8 : 0,
                                        }}
                                >
                                        {project.title}
                                </Typography>

                                <Typography
                                        variant="body2"
                                        sx={{
                                                color: '#cbd5e1',
                                                mb: 2,
                                                lineHeight: 1.6,
                                        }}
                                >
                                        {project.description}
                                </Typography>

                                <Box
                                        sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: 0.8,
                                                mb: 2,
                                        }}
                                >
                                        {project.tech.map((tech, idx) => (
                                                <Chip
                                                        key={idx}
                                                        label={tech}
                                                        size="small"
                                                        sx={{
                                                                backgroundColor: 'rgba(34, 197, 94, 0.15)',
                                                                color: '#22c55e',
                                                                border: '1px solid rgba(34, 197, 94, 0.3)',
                                                                fontSize: '0.75rem',
                                                                height: '24px',
                                                                '&:hover': {
                                                                        backgroundColor: 'rgba(34, 197, 94, 0.25)',
                                                                },
                                                        }}
                                                />
                                        ))}
                                </Box>

                                <Stack
                                        direction="row"
                                        spacing={2}
                                        className="project-links"
                                        sx={{
                                                opacity: 0.7,
                                                transform: 'translateY(4px)',
                                                transition: 'all 0.3s ease',
                                        }}
                                >
                                        <MuiLink
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                underline="none"
                                                sx={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: 1,
                                                        color: '#e2e8f0',
                                                        fontSize: '0.875rem',
                                                        fontWeight: 600,
                                                        px: 2,
                                                        py: 1,
                                                        borderRadius: '8px',
                                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                                        transition: 'all 0.2s ease',
                                                        '&:hover': {
                                                                color: color,
                                                                borderColor: color,
                                                                backgroundColor: `${color}10`,
                                                        },
                                                }}
                                        >
                                                <ExternalLinkIcon size={16} />
                                                Live Demo
                                        </MuiLink>

                                        <MuiLink
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                underline="none"
                                                sx={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: 1,
                                                        color: '#e2e8f0',
                                                        fontSize: '0.875rem',
                                                        fontWeight: 600,
                                                        px: 2,
                                                        py: 1,
                                                        borderRadius: '8px',
                                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                                        transition: 'all 0.2s ease',
                                                        '&:hover': {
                                                                color: '#cbd5e1',
                                                                borderColor: '#cbd5e1',
                                                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                        },
                                                }}
                                        >
                                                <GithubIcon size={16} />
                                                Source Code
                                        </MuiLink>
                                </Stack>
                        </Paper>
                );
        };

        const renderProjectsList = (items, color, keyPrefix) => {
                return <Box sx={{ mb: 1 }}>{items.map((project, idx) => renderProjectCard(project, color, idx))}</Box>;
        };

        const renderResponsibilitiesList = (items, color, keyPrefix) => {
                return (
                        <Box
                                component="ul"
                                sx={{
                                        mb: 1,
                                        listStyleType: 'disc',
                                        listStylePosition: 'inside',
                                }}
                        >
                                {items.map((r, idx) => (
                                        <Typography
                                                key={`${keyPrefix}${idx}`}
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
                );
        };

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

                                                const hasProjects =
                                                        Array.isArray(experience.projects) &&
                                                        experience.projects.length > 0;
                                                const hasResponsibilities =
                                                        Array.isArray(experience.responsibilities) &&
                                                        experience.responsibilities.length > 0;

                                                const projects = hasProjects ? experience.projects : [];
                                                const responsibilities = hasResponsibilities
                                                        ? experience.responsibilities
                                                        : [];

                                                const visibleProjects = projects.slice(0, MAX_VISIBLE_ITEMS);
                                                const hiddenProjects = projects.slice(MAX_VISIBLE_ITEMS);

                                                const visibleResp = responsibilities.slice(0, MAX_VISIBLE_ITEMS);
                                                const hiddenResp = responsibilities.slice(MAX_VISIBLE_ITEMS);

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

                                                                                        {/* Section heading changes by type */}
                                                                                        <Typography
                                                                                                variant="body1"
                                                                                                sx={{
                                                                                                        color: '#e2e8f0',
                                                                                                        fontWeight: 600,
                                                                                                        mb: 2,
                                                                                                        display: 'flex',
                                                                                                        alignItems: 'center',
                                                                                                }}
                                                                                        >
                                                                                                {hasProjects
                                                                                                        ? 'Featured Projects'
                                                                                                        : 'Key Responsibilities'}
                                                                                        </Typography>

                                                                                        {/* Always show first 3 */}
                                                                                        {hasProjects
                                                                                                ? renderProjectsList(
                                                                                                          visibleProjects,
                                                                                                          experience.color,
                                                                                                          `pv-${index}-`,
                                                                                                  )
                                                                                                : renderResponsibilitiesList(
                                                                                                          visibleResp,
                                                                                                          experience.color,
                                                                                                          `rv-${index}-`,
                                                                                                  )}

                                                                                        {/* Hidden with toggle */}
                                                                                        {hasProjects &&
                                                                                                hiddenProjects.length >
                                                                                                        0 && (
                                                                                                        <>
                                                                                                                <Collapse
                                                                                                                        in={
                                                                                                                                isOpen
                                                                                                                        }
                                                                                                                        unmountOnExit
                                                                                                                >
                                                                                                                        {renderProjectsList(
                                                                                                                                hiddenProjects,
                                                                                                                                experience.color,
                                                                                                                                `ph-${index}-`,
                                                                                                                        )}
                                                                                                                </Collapse>
                                                                                                                <Button
                                                                                                                        size="small"
                                                                                                                        onClick={() =>
                                                                                                                                toggleIndex(
                                                                                                                                        index,
                                                                                                                                )
                                                                                                                        }
                                                                                                                        endIcon={
                                                                                                                                isOpen ? (
                                                                                                                                        <ExpandLess />
                                                                                                                                ) : (
                                                                                                                                        <ExpandMore />
                                                                                                                                )
                                                                                                                        }
                                                                                                                        sx={{
                                                                                                                                color: '#e2e8f0',
                                                                                                                                textTransform:
                                                                                                                                        'none',
                                                                                                                                fontWeight: 600,
                                                                                                                                '&:hover': {
                                                                                                                                        color: experience.color,
                                                                                                                                },
                                                                                                                                mb: 2,
                                                                                                                                pl: 0,
                                                                                                                        }}
                                                                                                                >
                                                                                                                        {isOpen
                                                                                                                                ? 'See less'
                                                                                                                                : `See more (${hiddenProjects.length})`}
                                                                                                                </Button>
                                                                                                        </>
                                                                                                )}

                                                                                        {!hasProjects &&
                                                                                                hiddenResp.length >
                                                                                                        0 && (
                                                                                                        <>
                                                                                                                <Collapse
                                                                                                                        in={
                                                                                                                                isOpen
                                                                                                                        }
                                                                                                                        unmountOnExit
                                                                                                                >
                                                                                                                        {renderResponsibilitiesList(
                                                                                                                                hiddenResp,
                                                                                                                                experience.color,
                                                                                                                                `rh-${index}-`,
                                                                                                                        )}
                                                                                                                </Collapse>
                                                                                                                <Button
                                                                                                                        size="small"
                                                                                                                        onClick={() =>
                                                                                                                                toggleIndex(
                                                                                                                                        index,
                                                                                                                                )
                                                                                                                        }
                                                                                                                        endIcon={
                                                                                                                                isOpen ? (
                                                                                                                                        <ExpandLess />
                                                                                                                                ) : (
                                                                                                                                        <ExpandMore />
                                                                                                                                )
                                                                                                                        }
                                                                                                                        sx={{
                                                                                                                                color: '#e2e8f0',
                                                                                                                                textTransform:
                                                                                                                                        'none',
                                                                                                                                fontWeight: 600,
                                                                                                                                '&:hover': {
                                                                                                                                        color: experience.color,
                                                                                                                                },
                                                                                                                                mb: 2,
                                                                                                                                pl: 0,
                                                                                                                        }}
                                                                                                                >
                                                                                                                        {isOpen
                                                                                                                                ? 'See less'
                                                                                                                                : `See more (${hiddenResp.length})`}
                                                                                                                </Button>
                                                                                                        </>
                                                                                                )}

                                                                                        {/* Technologies (only render if present) */}
                                                                                        {Array.isArray(
                                                                                                experience.technologies,
                                                                                        ) &&
                                                                                                experience.technologies
                                                                                                        .length > 0 && (
                                                                                                        <>
                                                                                                                <Typography
                                                                                                                        variant="body1"
                                                                                                                        sx={{
                                                                                                                                color: '#e2e8f0',
                                                                                                                                fontWeight: 600,
                                                                                                                                mb: 1,
                                                                                                                        }}
                                                                                                                >
                                                                                                                        Technologies
                                                                                                                        Used:
                                                                                                                </Typography>
                                                                                                                <Box
                                                                                                                        sx={{
                                                                                                                                display: 'flex',
                                                                                                                                flexWrap: 'wrap',
                                                                                                                                gap: 1,
                                                                                                                        }}
                                                                                                                >
                                                                                                                        {experience.technologies.map(
                                                                                                                                (
                                                                                                                                        tech,
                                                                                                                                        idx,
                                                                                                                                ) => (
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
                                                                                                        </>
                                                                                                )}
                                                                                </CardContent>
                                                                        </Card>
                                                                </TimelineContent>
                                                        </TimelineItem>
                                                );
                                        })}
                                </Timeline>
                        </Box>

                        {/* Mobile Cards */}
                        <Box sx={{ display: { xs: 'block', md: 'none' }, pb: 4 }}>
                                {workExperienceData.map((exp, index) => {
                                        const isOpen = openIndex === index;

                                        const hasProjects = Array.isArray(exp.projects) && exp.projects.length > 0;
                                        const hasResponsibilities =
                                                Array.isArray(exp.responsibilities) && exp.responsibilities.length > 0;

                                        const projects = hasProjects ? exp.projects : [];
                                        const responsibilities = hasResponsibilities ? exp.responsibilities : [];

                                        const visibleProjects = projects.slice(0, MAX_VISIBLE_ITEMS);
                                        const hiddenProjects = projects.slice(MAX_VISIBLE_ITEMS);

                                        const visibleResp = responsibilities.slice(0, MAX_VISIBLE_ITEMS);
                                        const hiddenResp = responsibilities.slice(MAX_VISIBLE_ITEMS);

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
                                                                sx={{ color: '#e2e8f0', fontWeight: 600, mb: 1 }}
                                                        >
                                                                {hasProjects
                                                                        ? 'Featured Projects'
                                                                        : 'Key Responsibilities'}
                                                        </Typography>

                                                        {/* Always show first 3 */}
                                                        {hasProjects
                                                                ? renderProjectsList(
                                                                          visibleProjects,
                                                                          exp.color,
                                                                          `mpv-${index}-`,
                                                                  )
                                                                : renderResponsibilitiesList(
                                                                          visibleResp,
                                                                          exp.color,
                                                                          `mrv-${index}-`,
                                                                  )}

                                                        {/* Toggle */}
                                                        {hasProjects && hiddenProjects.length > 0 && (
                                                                <>
                                                                        <Collapse in={isOpen} unmountOnExit>
                                                                                {renderProjectsList(
                                                                                        hiddenProjects,
                                                                                        exp.color,
                                                                                        `mph-${index}-`,
                                                                                )}
                                                                        </Collapse>
                                                                        <Button
                                                                                size="small"
                                                                                onClick={() => toggleIndex(index)}
                                                                                endIcon={
                                                                                        isOpen ? (
                                                                                                <ExpandLess />
                                                                                        ) : (
                                                                                                <ExpandMore />
                                                                                        )
                                                                                }
                                                                                sx={{
                                                                                        color: '#e2e8f0',
                                                                                        textTransform: 'none',
                                                                                        fontWeight: 600,
                                                                                        '&:hover': { color: exp.color },
                                                                                        pl: 0,
                                                                                }}
                                                                        >
                                                                                {isOpen
                                                                                        ? 'See less'
                                                                                        : `See more (${hiddenProjects.length})`}
                                                                        </Button>
                                                                </>
                                                        )}

                                                        {!hasProjects && hiddenResp.length > 0 && (
                                                                <>
                                                                        <Collapse in={isOpen} unmountOnExit>
                                                                                {renderResponsibilitiesList(
                                                                                        hiddenResp,
                                                                                        exp.color,
                                                                                        `mrh-${index}-`,
                                                                                )}
                                                                        </Collapse>
                                                                        <Button
                                                                                size="small"
                                                                                onClick={() => toggleIndex(index)}
                                                                                endIcon={
                                                                                        isOpen ? (
                                                                                                <ExpandLess />
                                                                                        ) : (
                                                                                                <ExpandMore />
                                                                                        )
                                                                                }
                                                                                sx={{
                                                                                        color: '#e2e8f0',
                                                                                        textTransform: 'none',
                                                                                        fontWeight: 600,
                                                                                        '&:hover': { color: exp.color },
                                                                                        pl: 0,
                                                                                }}
                                                                        >
                                                                                {isOpen
                                                                                        ? 'See less'
                                                                                        : `See more (${hiddenResp.length})`}
                                                                        </Button>
                                                                </>
                                                        )}

                                                        {/* Technologies (if any) */}
                                                        {Array.isArray(exp.technologies) &&
                                                                exp.technologies.length > 0 && (
                                                                        <>
                                                                                <Typography
                                                                                        variant="body1"
                                                                                        sx={{
                                                                                                color: '#e2e8f0',
                                                                                                fontWeight: 600,
                                                                                                mt: 2,
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
                                                                                        {exp.technologies.map(
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
                                                                                                                }}
                                                                                                        />
                                                                                                ),
                                                                                        )}
                                                                                </Box>
                                                                        </>
                                                                )}
                                                </Card>
                                        );
                                })}
                        </Box>
                </Box>
        );
};

export default WorkExperience;

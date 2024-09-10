import React from 'react';
import { Box, Typography } from '@mui/material';
import SkillsItems from './SkillsItems';
import skillsConfig from '../../assets/configs/skillsConfig';

const Skills = () => {
    return (
        <section id="skills">
            {/* Main Skills Section */}
            <Box sx={{ 
                textAlign: 'center', 
                py: 4, 
                background: 'linear-gradient(135deg, #e0f7fa 30%, #b2ebf2 90%)', 
                borderRadius: '15px', 
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)', 
                transition: 'transform 0.3s ease-out', 
                '&:hover': {
                    transform: 'scale(1.01)'
                }, 
                mb: 6 
            }}>
                <Typography variant="h4" component="h1" sx={{ 
                    color: '#007acc', 
                    py: 2, 
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)'
                }}>
                    My Go-To Tech Stack
                </Typography>
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mt: 4, 
                    gap: 8, // Increased spacing between icons
                    flexWrap: 'wrap' 
                }}>
                    <SkillsItems config={skillsConfig.coreSkills} />
                </Box>
            </Box>

            {/* Machine Learning & NLP Skills Section */}
            <Box sx={{ 
                textAlign: 'center', 
                py: 4,
                background: 'linear-gradient(135deg, #f1f8e9 30%, #dcedc8 90%)', 
                borderRadius: '15px', 
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)', 
                transition: 'transform 0.3s ease-out', 
                '&:hover': {
                    transform: 'scale(1.01)'
                }, 
                mb: 6 
            }}>
                <Typography variant="h4" component="h1" sx={{ 
                    color: '#ff5722', 
                    py: 2, 
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)'
                }}>
                    ML & NLP Prowess
                </Typography>
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mt: 4, 
                    gap: 8, // Increased spacing between icons
                    flexWrap: 'wrap' 
                }}>
                    <SkillsItems config={skillsConfig.mlNlpSkills} />
                </Box>
            </Box>

            {/* Cloud Platforms Section */}
            <Box sx={{ 
                textAlign: 'center', 
                py: 4,
                background: 'linear-gradient(135deg, #ffffff 30%, #f7f7f7 90%)', 
                borderRadius: '15px', 
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)', 
                transition: 'transform 0.3s ease-out', 
                '&:hover': {
                    transform: 'scale(1.01)'
                }, 
                mb: 6 
            }}>
                <Typography variant="h4" component="h1" sx={{ 
                    color: '#00838f', 
                    py: 2, 
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)'
                }}>
                    Cloud Tech Powering My Work
                </Typography>
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mt: 4, 
                    gap: 8, // Increased spacing between icons
                    flexWrap: 'wrap' 
                }}>
                    <SkillsItems config={skillsConfig.cloudPlatforms} />
                </Box>
            </Box>

            {/* Complementary Skills Section */}
            <Box sx={{ 
                textAlign: 'center', 
                py: 4, 
                background: 'linear-gradient(135deg, #f7f7ff 30%, #ececf9 90%)', 
                borderRadius: '15px', 
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)', 
                transition: 'transform 0.3s ease-out', 
                '&:hover': {
                    transform: 'scale(1.01)'
                } 
            }}>
                <Typography variant="h4" component="h1" sx={{ 
                    color: '#689f38', 
                    py: 2, 
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)'
                }}>
                    Additional Tools in My Arsenal
                </Typography>
                <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mt: 4, 
                    gap: 8, // Increased spacing between icons
                    flexWrap: 'wrap' 
                }}>
                    <SkillsItems config={skillsConfig.complementarySkills} />
                </Box>
            </Box>
        </section>
    );
}

export default Skills;

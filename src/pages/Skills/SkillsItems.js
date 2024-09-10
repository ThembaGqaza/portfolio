import React from 'react';
import { Box, Typography } from '@mui/material';

const SkillsItems = ({ config }) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
            {config.map((skill) => (
                <Box key={skill.id} sx={{ textAlign: 'center' }}>
                    {skill.icon}
                    <Typography variant="body1" sx={{ color: '#263238', fontWeight: 500, mt: 1 }}>
                        {skill.text}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
};

export default SkillsItems;

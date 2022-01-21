import React from 'react';
import './hero.css'
import Avatar from '@mui/material/Avatar';
import { teal, grey } from '@mui/material/colors';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground'


const Hero = () => {

    
    return (
      <div className='hero'>
        <ParticlesBackground/>
        <div className='heroChild'>
          <div className='info'>
            <h1>
              Faizan Ali
            </h1>
            <h2>
              Result Driven Full-Stack Developer
            </h2>
          </div>
          <div className='avatar'>
            <Avatar sx={{ 
              bgcolor: grey[900],
              width: 100, 
              height: 100 }}><DeveloperModeIcon sx={{
                color: teal[500],
                fontSize: 80
              }} /></Avatar>
          </div>
          
        </div>

      </div>

    );
  };

export default Hero;

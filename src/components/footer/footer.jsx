import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import {  teal } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});





export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{
                background:'linear-gradient(to bottom, rgba(0,128,128,1) 0%, ' + 'rgba(0,0,0,1) 90%)',}}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" href='https://github.com/alifaizan786-op' sx={{ margin:'auto' }}>
            <GitHubIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="open drawer" href='https://www.linkedin.com/in/faizan-ali-iruna-digital/' sx={{ margin:'auto' }}>
            <LinkedInIcon />
          </IconButton>
          <Typography >
          © 2022, Faizan Ali, All Rights Reserved!
          </Typography>
          <IconButton color="inherit" aria-label="open drawer" href='https://www.facebook.com/faliehani' sx={{ margin:'auto' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="open drawer" href="https://www.instagram.com/ali_faizan00/" sx={{ margin:'auto' }}>
            <InstagramIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
  );
}

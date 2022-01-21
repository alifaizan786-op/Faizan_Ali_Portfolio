import React from 'react';
import '../header/header.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import CodeIcon from '@mui/icons-material/Code';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {  teal } from '@mui/material/colors';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  '@media all': {
    minHeight: 50,
  },
}));

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

const actions = [
  { icon: <CodeIcon />, name: 'Work' },
  { icon: <InfoIcon />, name: 'About' },
  { icon: <ContactsIcon />, name: 'Contact' },
  { icon: <PictureAsPdfIcon />, name: 'Resume' },
];


function Header() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static"  sx={{
                background:'linear-gradient(to bottom, rgba(0,128,128,1) 0%, ' + 'rgba(0,0,0,1) 90%)',}}>
        <Container maxWidth="xl" >
          <StyledToolbar>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
              <Backdrop open={open} />
              <SpeedDial
                size="large"
                ariaLabel="SpeedDial tooltip example"
                sx={{ position: 'absolute',  right: -5, top: 5,  }}
                icon={<MenuIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
                direction='down'>
                {actions.map((action) => (
                  <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    tooltipOpen
                    onClick={handleClose}/>
                ))}
              </SpeedDial>
            </Box>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                Faizan Ali
            </Typography>
          </StyledToolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;

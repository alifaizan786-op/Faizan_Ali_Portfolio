import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import {  teal } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import resumeimg from '../../images/Resume.PNG'
import resume from '../../pdf/Faizan_Ali_Resume.PDF'
import './resume.css'

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

function Resume (props) {
    return(
        <div className='resume' id='resume'>
        <Divider variant="middle" sx={{ marginTop: '25px', marginBottom: '25px' }}  />
        <Typography gutterBottom variant="h1" component="div" sx={{ textAlign: 'center' }}>
          Resume
        </Typography>
        <ThemeProvider theme={theme}>
        <Card sx={{ justifyContent: 'center',width: '80%', margin: 'auto', marginBottom: '25px'  }}>
        <div className='resimg'>
          <h1>FA</h1>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Faizan Ali's Resume
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Offering 2 years of progressive experience in owning web-based projects from concept and design through testing,
implementation and client updates. Diligent about producing exceptionally clean, strong and secure code. Successful at
achieving browser, device and operating system compatibility objectives while satisfying client desires and producing
robust, sophisticated designs.
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={resume} size="small">Download Resume</Button>
        </CardActions>
      </Card>

        </ThemeProvider>
        </div>
    )
  }

  export default Resume
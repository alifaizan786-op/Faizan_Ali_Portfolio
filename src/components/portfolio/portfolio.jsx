import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import {  teal } from '@mui/material/colors';
import PortfolioCard from '../portfoliocard/portfoliocard'
import weatherimg from '../../images/weather_dashh.PNG'
import weeklymeal from '../../images/Weekly Meal Planner.PNG'
import codequiz from '../../images/game.png'
import lastpass from '../../images/last pass.png'
import planner from '../../images/daily-planner.PNG'
import hrmanag from '../../images/hr_management_system.PNG'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';




const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${teal[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${teal[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${teal[50]};
    color: ${teal[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
display: flex;
justify-content: center;
  max-width:90% ;
  margin: auto;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${teal[500]};
  border-radius: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;



function Portfolio () {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div className='portfolio' id='portfolio'>
          <Divider variant="middle" sx={{ marginTop: '25px', marginBottom: '25px' }}  />
          <Typography gutterBottom variant="h1" component="div" sx={{ textAlign: 'center' }}>
            Work
          </Typography>
        <TabsUnstyled value={value} onChange={handleChange} sx={{ display: 'flex' }}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example">
            <TabsList>
                <Tab>Weather Dashboard</Tab>
                <Tab>Weekly Meal Planner</Tab>
                <Tab>Code Quiz</Tab>
                <Tab>Last Pass</Tab>
                <Tab>Professional Planner</Tab>
                <Tab>HR Management System</Tab>
            </TabsList>
            <TabPanel value={0} sx={{ justifyContent: 'center' }}><PortfolioCard 
            image={weatherimg}
            name={'Weather Dashboard'}
            desc={'Weather Dashboard is a easy to use Web App to instantly find the weather of any given city at any moment, or easily navigate through your recently searched cities.'}
            repo={'https://github.com/alifaizan786-op/Weather-Dash'}
            deployed={'https://alifaizan786-op.github.io/Weather-Dash/'} /></TabPanel>
            <TabPanel sx={{ justifyContent: 'center' }} value={1}><PortfolioCard 
            image={weeklymeal}
            name={'Weekly Meal Planner'}
            desc={'An App designed to help busy, healthy, and hungry people; plan their weekly meals. Where they can choose a meal based on their diet. Helping with saving time and money, Along with paying attention to eating habits and weekly spending.'}
            repo={'https://github.com/nandodavila/Weekly-Meal-Planners'}
            deployed={'https://nandodavila.github.io/Weekly-Meal-Planners/'} /></TabPanel>
            <TabPanel value={2}><PortfolioCard 
            image={codequiz}
            name={'Code Quiz'}
            desc={'This a Javascript code quiz, test your skils and compete with your fellow programmers.'}
            repo={'https://github.com/alifaizan786-op/Code_Quiz'}
            deployed={'https://alifaizan786-op.github.io/Code_Quiz/'} /></TabPanel>
            <TabPanel value={3}><PortfolioCard 
            image={lastpass}
            name={'Last Pass'}
            desc={'This is a completly secure password generator, which uses no logic at all while creating password. I have also incorporated the use of windows prompt so your inputs are secured by windows security'}
            repo={'https://github.com/alifaizan786-op/Last_Pass'}
            deployed={'https://github.com/alifaizan786-op/Last_Pass/deployments/activity_log?environment=github-pages'} /></TabPanel>
            <TabPanel value={4}><PortfolioCard 
            image={planner}
            name={'Professional Planner'}
            desc={'Do you forget your daily goals ? Do you have to meet multiple timelines daily ? Dont worry, Professional Daily Plaaner is here to help solva all your planning problems.'}
            repo={'https://github.com/alifaizan786-op/Profeesional_Daily_Planner'}
            deployed={'https://alifaizan786-op.github.io/Profeesional_Daily_Planner/'} /></TabPanel>
            <TabPanel value={5}><PortfolioCard 
            image={hrmanag}
            name={'HR Management System'}
            desc={'HR Management is tool created to make the job of a HR rep easier, helps the HR to manage all employees, Help Branch Manger to Look over there branch, Helps executive look over there company and for employee to find the benefits all in one place and request time off by just a click of the button'}
            repo={'https://github.com/alifaizan786-op/HR_Management_System'}
            deployed={'https://hrmanagement0.herokuapp.com/login'} /></TabPanel>
        </TabsUnstyled>
        </div>
    )
}

export default Portfolio
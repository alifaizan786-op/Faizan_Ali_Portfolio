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
  max-width:500px ;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: ${teal[500]};
  border-radius: 8px;
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
        <div className='portfolio'>
        <TabsUnstyled defaultValue={0} >
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
            <TabPanel sx={{ justifyContent: 'center' }} value={1}>Weekly Meal Planner</TabPanel>
            <TabPanel value={2}>Code Quiz</TabPanel>
            <TabPanel value={3}>Last Pass</TabPanel>
            <TabPanel value={4}>Professional Planner</TabPanel>
            <TabPanel value={5}>HR Management System</TabPanel>
        </TabsUnstyled>
        </div>
    )
}

export default Portfolio
import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Chip } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs({ rowData }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const { alsogoodfor = {}, testorganism = {}, administration = {}, compoundsource = {}, level = '', } = rowData;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const Genres = ({ values, color }) => {
    console.log("called");
    return (
      <div className='flex gap-2'>
        {
          values.map((genre, idx) => {
            return (
              <Chip label={genre} color={color} variant="outlined" key={idx} />
            );
          })}
      </div>
    )
  };
  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          aria-label="full width tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Anti-Ageing" {...a11yProps(1)} />
          <Tab label="Also good for" {...a11yProps(2)} />
          <Tab label="Administration" {...a11yProps(3)} />
          <Tab label="Test Organisms" {...a11yProps(4)} />
          <Tab label="Side Effects" {...a11yProps(5)} />
          <Tab label="Link to Studies" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <p className='font-samsung text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <p className='font-samsung text-gray-500 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Chip label={level} color="primary" variant="" />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Genres values={alsogoodfor} color='primary' />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Genres values={administration} color='primary' />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Genres values={testorganism} color='primary' />
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <p className='font-samsung text-gray-500 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </TabPanel>
        <TabPanel value={value} index={6} dir={theme.direction}>
          <p className='font-samsung text-gray-500 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

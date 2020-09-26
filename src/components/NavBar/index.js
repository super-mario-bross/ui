import React from 'react';
import { Box, Button, Heading, Grommet } from 'grommet';
// import { NavLink } from 'react-router-dom';
import "./index.scss";

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'small', right: 'small', vertical: 'small' }}
    margin={{ bottom: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

const NavBar = () => {
  return (
    <AppBar>
      <Heading level='4' margin='none'>Super Mario Bros - Modern Reviews & Ratings System</Heading>
    </AppBar>
  );
};

export default NavBar;
import React, { useState } from 'react';
import { Grid, Typography, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import logo from '../assets/logo1.png';

function Header() {
  const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'HOME', to: '/' },
    { text: 'GALLERY', to: '/view-gallery' },
    { text: 'DIRECTOR BOARD', to: '/director-board' },
    { text: 'DONATION', to: '/donate' },
    { text: 'CONTACT US', to: '/contact-us' }
  ];

  return (
    <div style={{ display: 'flex', padding: 10, alignItems: 'center',background:'#FFFF',height:'12%',boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
     {isMediumUp && ( <div style={{ flex: 1 }}>
      <div style={{display:'flex',gap:10}}>
        <img src={logo} width={'8%'} alt="" /> 
        <Typography variant='h5' display={'flex'} alignItems={'center'} fontWeight={800} color={'#ec4c0f'}>Guru Dev Suwa Arana</Typography></div>
      </div>)}


      {isMediumDown && ( <div style={{ flex: 1 }}>
        <img src={logo} width={'20%'} alt="" />
      </div>)}

      {isMediumUp && (
        
        <Grid item sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 ,height:'100%'}}>
          {menuItems.map((item) => (
            <Link to={item.to} key={item.text} style={{ textDecoration: 'none' }}>
              <Typography
                variant='subtitle1'
                sx={{
                  color: '#000',
                  fontWeight: 600,
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                    textDecorationColor: '#FF4D00',
                    textDecorationThickness: '5px',
                    cursor: 'pointer',
                    
                  }
                }}
              >
                {item.text}
              </Typography>
            </Link>
          ))}
        </Grid>
      )}

      {isMediumDown && (
        <>
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <List>
              {menuItems.map((item) => (
                <ListItem button key={item.text} component={Link} to={item.to} onClick={toggleDrawer(false)}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      )}
    </div>
  );
}

export default Header;

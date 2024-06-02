import React from 'react';
import { Grid, Typography } from "@mui/material";

import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={{ display: 'flex', padding: 10 }}>
      <div style={{ flex: 1 }}>
        <img src={logo} width={'100px'} alt="" />
      </div>
      <Grid item sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4, }}>

        {/* Home page */}
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Typography variant='subtitle2'
            sx={{
              color: '#000',
              fontWeight: 600,
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                textDecorationColor: '#FF4D00',
                textDecorationThickness: '5px',
                cursor: 'pointer'
              }
            }}
            href="#section1">HOME
          </Typography>
        </Link>

        {/* Progress page */}
        <Link to='/progress' style={{ textDecoration: 'none' }}>

          <Typography variant='subtitle2'
            sx={{
              color: '#000',
              fontWeight: 600,
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                textDecorationColor: '#FF4D00',
                textDecorationThickness: '5px',
                cursor: 'pointer'
              }
            }}
            href="#section1">
            PROGRESS
          </Typography>
        </Link>


        {/* View Gallery */}
        <Link to={'/view-gallery'} style={{ textDecoration: 'none' }}>

          <Typography variant='subtitle2'
            sx={{
              color: '#000',
              fontWeight: 600,
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                textDecorationColor: '#FF4D00',
                textDecorationThickness: '5px',
                cursor: 'pointer'
              }
            }}
            href="#section1">
            GALLERY
          </Typography>
        </Link>



        {/* Director Board */}
        <Link to={'/director-board'} style={{ textDecoration: 'none' }}>
          <Typography variant='subtitle2'
            sx={{
              color: '#000',
              fontWeight: 600,
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
                textDecorationColor: '#FF4D00',
                textDecorationThickness: '5px',
                cursor: 'pointer'
              }
            }}
            href="#section1">
            DIRECTOR BOARD
          </Typography>

        </Link>

       
         {/* Donation */}
         <Link to={'/donate'} style={{ textDecoration: 'none' }}>
        <Typography variant='subtitle2'
          sx={{
            color: '#000',
            fontWeight: 600,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
              textDecorationColor: '#FF4D00',
              textDecorationThickness: '5px',
              cursor: 'pointer'
            }
          }}
          href="#section1">DONATION
        </Typography>
</Link>
        <Typography variant='subtitle2'
          sx={{
            color: '#000',
            fontWeight: 600,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
              textDecorationColor: '#FF4D00',
              textDecorationThickness: '5px',
              cursor: 'pointer'
            }
          }}
          href="#section1">
          CONACT US
        </Typography>
      </Grid>
    </div>
  );
}

export default Header;

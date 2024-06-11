import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect } from 'react';
import movileThero from '../assets/thero11.jpg';
import donate from '../assets/t25.png';

import boc from '../assets/boc.png';
import sampath from '../assets/sampath3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/footer/Footer';
import AnimatedButton from '../components/Button/AnimatedButton ';

const Donate = () => {

  const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them

    });
  }, []);

  return (
    <>
      {/* <!-- ==========  Section 1  ========== --> */}
      {isMediumUp && (
        <section style={{ overflowX: 'none' }}>
          <Grid
            container
            style={{
              backgroundImage: `url(${donate})`,
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '55vh',
              backgroundColor: '#342222'
            }}
          >

            <Grid item xs={12} md={6} p={10} data-aos="fade-up">
              <Typography
                variant='h5'
                color={'#fff'}
                textAlign={'start'}
              >
                Facility For Medical Care
              </Typography>
              <Typography
                variant='h3'
                color={'#fff'}
                textAlign={'start'}
              >
                Donate For Guru Dev <span style={{ color: '#FF4D00' }}>Suwa Arana</span>
              </Typography>

              <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'start' }}>
                <Button variant='contained'>Donate Now</Button>         </div>
            </Grid>
          </Grid>
          <Grid container sx={{ overflowX: 'none' }}>
            <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} >
              <img src={boc} width={'25%'} alt="" />

              <div style={{ textAlign: 'start', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography mt={2} variant='subtitle1' fontWeight={700}>BANK OF CEYLON (NUGEGODA)<br />
                  Guru Dev Suwa Arana(A/C)<br />
                  A/C Number - 79212171 <br />
                  SWIFT CODE - BCEYLKLX</Typography>
              </div>
            </Grid>
            
            <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} >
              <img src={sampath} width={'25%'} alt="" />

              <div style={{ textAlign: 'start', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography mt={2} variant='subtitle1' fontWeight={700}>
                SAMPATH BANK (KOHUWALA)<br />
                  Guru Dev Suwa Arana(A/C)<br />
                  A/C Number - 109414025275 <br />
                  SWIFT CODE -BSAMLKLX</Typography>
              </div>
            </Grid>
          </Grid>
        </section>)}



      {isMediumDown && (
        <section style={{ overflowX: 'none' }}>
          <Grid
            container
            style={{
              backgroundImage: `url(${movileThero})`,
              backgroundSize: 'cover', // Ensures the image covers the entire grid container
              backgroundPosition: 'center', // Centers the image
              backgroundRepeat: 'no-repeat', // Prevents the image from repeating
              height: '55vh'
            }}
          >

            <Grid item xs={12} md={6} p={3} display={'flex'} justifyContent={'start'} flexDirection={'column'} textAlign={'end'} data-aos="fade-up">
              <Typography
                variant='h6'
                color={'#fff'}
                textAlign={'end'}
              >
                Facility For Medical Care
              </Typography>
              <Typography
                variant='h3'
                color={'#fff'}
                textAlign={'end'}
              >
                Donate For Guru Dev <span style={{ color: '#FF4D00' }}>Suwa Arana</span>
              </Typography>

              <div style={{ marginTop: '30px' }}>
                <Button variant='contained'>Donate Now</Button>
              </div>
            </Grid>
          </Grid>
          <Grid container sx={{ overflowX: 'none' }}>
            <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} >
              <img src={boc} width={'45%'} alt="" />

              <div style={{ textAlign: 'start', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography mt={2} variant='caption' fontWeight={700}>BANK OF CEYLON (NUGEGODA)<br />
                  Guru Dev Suwa Arana(A/C)<br />
                  A/C Number - 79212171 <br />
                  SWIFT CODE - BCEYLKLX</Typography>
              </div>
            </Grid>

            <Grid item xs={12} md={6} display={'flex'} justifyContent={'start'} alignItems={'center'}>
              <img src={sampath} width={'45%'} alt="" />

              <div style={{ textAlign: 'start', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography mt={2} variant='caption' fontWeight={700}>
                SAMPATH BANK (KOHUWALA)<br />
                  Guru Dev Suwa Arana(A/C)<br />
                  A/C Number - 109414025275 <br />
                  SWIFT CODE -BSAMLKLX</Typography>
              </div>
            </Grid>
          </Grid>
        </section>)}
      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>
    </>
  );
}

export default Donate;

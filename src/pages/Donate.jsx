import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import donate from '../assets/donate.png';
import boc from '../assets/boc.png';
import sampath from '../assets/sampath2.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/footer/Footer';

const Donate = () => {
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
      <section style={{ overflowX: 'none' }}>
        <Grid
          container
          style={{
            backgroundImage: `url(${donate})`,
            backgroundSize: 'cover', // Ensures the image covers the entire grid container
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat', // Prevents the image from repeating
            height: '55vh'
          }}
        >
          <Grid item xs={12} md={6} p={10}></Grid>

          <Grid item xs={12} md={6} p={10} data-aos="fade-up">
            <Typography
              variant='h5'
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
              {/* <AnimatedButton btnName="Donate" /> */}
            </div>
          </Grid>
        </Grid>
        <Grid container sx={{ overflowX: 'none' }}>
          <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} data-aos="fade-right">
            <img src={boc} width={'35%'} alt="" />

            <div style={{ textAlign: 'start', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Typography mt={2} variant='h5' fontWeight={700}>BANK OF CEYLON (NUGEGODA)<br />
                Guru Dev Suwa Arana(A/C)<br />
                A/C Number - 79212171 <br />
                SWIFT CODE - BCEYLKLX</Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} data-aos="fade-left">
            <img src={sampath} width={'40%'} height={'55%'} alt="Sampath Bank Logo" />
            <div style={{ textAlign: 'start', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', marginLeft: '20px' }}>
              <Typography variant='h5' fontWeight={700}>
                SAMPATH BANK (KOHUWALA)<br />
                Guru Dev Suwa Arana(A/C)<br />
                A/C Number - 109414025275 <br />
                SWIFT CODE - BSAMLKLX
              </Typography>
            </div>
          </Grid>
        </Grid>
      </section>
      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>
    </>
  );
}

export default Donate;

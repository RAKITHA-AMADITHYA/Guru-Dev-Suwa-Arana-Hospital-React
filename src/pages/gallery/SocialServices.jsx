import { Grid, Typography } from '@mui/material';
import React from 'react';
import social1 from "../../assets/social/1.jpg";
import social2 from "../../assets/social/2.jpg";
import social3 from "../../assets/social/3.jpg";
import social4 from "../../assets/social/4.jpg";
import Footer from '../../components/footer/Footer';



const SocialServices = () => {
  const images = [
    social1,
    social2,
    social3,
    social4,
     ]; 
  return (
    <>
      <section
        style={{
          backgroundColor: '#FFBB98',
          height: '15vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
        id="section3"
      >
        <Typography variant='h2' color={'#000'}>
          Guru Dev Suwa Arana Social Services
        </Typography>
      </section>

      <Grid container p={5} spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} md={3} key={index}>
            <img src={image} style={{ minHeight:'250px', maxWidth: '400px', maxHeight: '250px', width: '100%', height: 'auto',borderRadius:'10px' }} alt={`Construction ${index + 1}`} />
          </Grid>
        ))}
      </Grid>
      <Footer/>
    </>
  );
};

export default SocialServices;

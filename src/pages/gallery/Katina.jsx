import { Grid, Typography } from '@mui/material';
import React from 'react';
import katina1 from "../../assets/katina/1.jpg";
import katina2 from "../../assets/katina/2.jpg";
import katina3 from "../../assets/katina/3.jpg";
import katina4 from "../../assets/katina/4.jpg";
import katina5 from "../../assets/katina/5.jpg";
import katina6 from "../../assets/katina/6.jpg";
import katina7 from "../../assets/katina/7.jpg";
import katina8 from "../../assets/katina/8.jpg";
import katina9 from "../../assets/katina/9.jpg";
import Footer from '../../components/footer/Footer';


const KatinaPinkama = () => {
  const images = [
    katina1,
    katina2,
    katina3,
    katina4,
    katina5,
    katina6,
    katina7,
    katina8,
    katina9 ]; 
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
          Katina Pinkama
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

export default KatinaPinkama;

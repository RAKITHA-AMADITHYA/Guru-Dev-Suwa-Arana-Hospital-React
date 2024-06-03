import { Grid, Typography } from '@mui/material';
import React from 'react';
import mahana1 from "../../assets/mahana/1.png";
import mahana2 from "../../assets/mahana/2.png";
import mahana3 from "../../assets/mahana/3.png";
import Footer from '../../components/footer/Footer';


const MahanaPinkama = () => {
  const images = [
    mahana1,
    mahana2,
    mahana3,
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
          Mahana Pinkama
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

export default MahanaPinkama;

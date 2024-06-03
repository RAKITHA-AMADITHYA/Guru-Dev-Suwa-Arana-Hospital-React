import { Grid, Typography } from '@mui/material';
import React from 'react';
import operning1 from "../../assets/operning/1.jpg";
import operning2 from "../../assets/operning/2.jpg";
import operning3 from "../../assets/operning/3.jpg";
import operning4 from "../../assets/operning/4.jpg";
import operning5 from "../../assets/operning/5.jpg";
import operning6 from "../../assets/operning/6.jpg";
import operning7 from "../../assets/operning/7.jpg";
import operning8 from "../../assets/operning/8.jpg";
import operning9 from "../../assets/operning/9.jpg";
import Footer from '../../components/footer/Footer';


const OperningCeremony = () => {
  const images = [
    operning1,
    operning2,
    operning3,
    operning4,
    operning5,
    operning6,
    operning7,
    operning8,
    operning9,

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
          Guru Dev Suwa Arana Operning Ceremony
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

export default OperningCeremony;

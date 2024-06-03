import { Grid, Typography } from '@mui/material';
import React from 'react';
import dahampasala1 from "../../assets/dahampasala/1.jpg";
import dahampasala2 from "../../assets/dahampasala/2.jpg";
import dahampasala3 from "../../assets/dahampasala/3.jpg";
import dahampasala4 from "../../assets/dahampasala/4.jpg";
import dahampasala5 from "../../assets/dahampasala/5.jpg";
import dahampasala6 from "../../assets/dahampasala/6.jpg";
import dahampasala7 from "../../assets/dahampasala/7.jpg";
import dahampasala8 from "../../assets/dahampasala/8.jpg";
import dahampasala9 from "../../assets/dahampasala/9.jpg";


const DahamPasala = () => {
  const images = [
    dahampasala1,
    dahampasala2,
    dahampasala3,
    dahampasala4,
    dahampasala5,
    dahampasala6,
    dahampasala7,
    dahampasala8,
    dahampasala9 ]; 
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
          Daham Pasala
        </Typography>
      </section>

      <Grid container p={5} spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} md={3} key={index}>
            <img src={image} style={{ minHeight:'250px', maxWidth: '400px', maxHeight: '250px', width: '100%', height: 'auto',borderRadius:'10px' }} alt={`Construction ${index + 1}`} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DahamPasala;

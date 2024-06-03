import { Grid, Typography } from '@mui/material';
import React from 'react';
import construction1 from "../../assets/construction/1.jpg";
import construction2 from "../../assets/construction/2.jpg";
import construction3 from "../../assets/construction/3.jpg";
import construction4 from "../../assets/construction/4.jpg";
import construction5 from "../../assets/construction/5.jpg";
import construction6 from "../../assets/construction/6.jpg";
import construction7 from "../../assets/construction/7.jpg";
import construction8 from "../../assets/construction/8.jpg";
import construction9 from "../../assets/construction/9.jpg";
import construction10 from "../../assets/construction/10.jpg";
import construction11 from "../../assets/construction/11.jpg";
import construction12 from "../../assets/construction/12.jpg";
import construction13 from "../../assets/construction/13.jpg";
import construction14 from "../../assets/construction/14.jpg";
import construction15 from "../../assets/construction/15.jpg";
import construction16 from "../../assets/construction/16.jpg";
import construction17 from "../../assets/construction/9.jpg";
import construction18 from "../../assets/construction/18.jpg";
import construction19 from "../../assets/construction/19.jpg";
import construction20 from "../../assets/construction/20.jpg";
import construction21 from "../../assets/construction/21.jpg";
import construction22 from "../../assets/construction/22.jpg";
import construction23 from "../../assets/construction/23.jpg";
import construction24 from "../../assets/construction/24.jpg";
import Footer from '../../components/footer/Footer';



const Constructions = () => {
  const images = [
    construction1,
    construction2,
    construction3,
    construction4,
    construction5,
    construction6,
    construction7,
    construction8,
    construction9,
    construction10, 
    construction11, 
    construction12, 
    construction13, 
    construction14, 
    construction15, 
    construction16, 
    construction17, 
    construction18, 
    construction19, 
    construction20, 
    construction21, 
    construction22, 
    construction23, 
    construction24, 


  
  
  
  
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
          Guru Dev Suwa Arana Constructions
        </Typography>
      </section>

      <Grid container p={5} spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <img src={image} style={{ minHeight:'250px', maxWidth: '400px', maxHeight: '250px', width: '100%', height: 'auto',borderRadius:'10px' }} alt={`Construction ${index + 1}`} />
          </Grid>
        ))}
      </Grid>
      <Footer/>
    </>
  );
};

export default Constructions;

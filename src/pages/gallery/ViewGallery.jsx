import React from 'react'
import CardLocation from '../../components/location card/CardLocation'
import { Grid, Typography } from '@mui/material'
import building from "../../assets/building.png"
import Footer from '../../components/footer/Footer'





const ViewGallery = () => {
  return (
    <>

      <section style={{ backgroundColor: '#FFBB98', height: '15Vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', }} id="section3">
        <Typography variant='h2' color={'#00000'}>Guru Dev Suwa Arana Gallery  </Typography>
      </section>
      <Grid container p={5} spacing={2} >
        <Grid item xs={12} md={3}>
          <CardLocation title="Constructions" img={building} />
        </Grid>


        <Grid item xs={12} md={3}>
          <CardLocation title="Operning Ceremony" img={building} />
        </Grid>

        <Grid item xs={12} md={3}>
          <CardLocation title="Social Services" img={building} />
        </Grid>

        <Grid item xs={12} md={3}>
          <CardLocation title="Daham Pasala" img={building} />
        </Grid>

        <Grid item xs={12} md={3}>
          <CardLocation title="Katina Pinkama" img={building} />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardLocation title="Mahana Pinkama" img={building} />
        </Grid>

      </Grid>
      <Footer/>
    </>
  )
}

export default ViewGallery
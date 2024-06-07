import { Grid, Typography } from '@mui/material'
import React from 'react'
import construction from "../../assets/c1.jpeg"
import daham from "../../assets/daham1.jpeg"
import katina from "../../assets/katina2.jpeg"
import mahana from "../../assets/mahana.png"
import operning from "../../assets/o1.jpeg"
import social from "../../assets/social1.jpeg"
import CardLocation from '../../components/location card/CardLocation'
import Footer from '../../components/footer/Footer'


const ViewGallery = () => {
  return (
    <>

      <section style={{ backgroundColor: '#FFBB98', height: '15Vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', }} id="section3">
        <Typography variant='h2' color={'#00000'}>Guru Dev Suwa Arana Gallery  </Typography>
      </section>
      <Grid container p={5} spacing={2} >
        <Grid item xs={12} md={4}>
          <CardLocation title="Constructions" img={construction} link={'/constructions'}/>
        </Grid>


        <Grid item xs={12} md={4}>
          <CardLocation title="Operning Ceremony" img={operning} link={'/operning-ceremony'} />
        </Grid>

        <Grid item xs={12} md={4}>
          <CardLocation title="Social Services" img={social} link={'/social-services'}/>
        </Grid>

        {/* <Grid item xs={12} md={3}>
          <CardLocation title="Daham Pasala" img={daham} link={'/daham-pasala'} />
        </Grid>

        <Grid item xs={12} md={3}>
          <CardLocation title="Katina Pinkama" img={katina} link={'/katina-pinkama'} />
        </Grid>
        <Grid item xs={12} md={3}>
          <CardLocation title="Mahana Pinkama" img={mahana} link={'/mahana-pinkama'}/>
        </Grid> */}

      </Grid>
      <Footer/>
    </>
  )
}

export default ViewGallery
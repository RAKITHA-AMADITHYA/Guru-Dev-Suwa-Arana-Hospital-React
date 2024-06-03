import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect } from 'react'
import bikku1 from '../assets/bikku3.png'
import img1 from '../assets/building2.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
import '../assets/FontAnimation.css'
import construction from '../assets/construction.png'
import coordination from '../assets/coordination.png'
import home from '../assets/home.png'
import location from '../assets/location.png'
import mobileThero from '../assets/thero10.jpg'
import AnimatedButton from '../components/Button/AnimatedButton '
import AnimatedButton2 from '../components/Button/AnimationButton2'

import YouTubeEmbed from '../components/Youtube video/YoutubeVideo'



import { Link } from 'react-router-dom'
import dot from '../assets/dot.png'
import Footer from '../components/footer/Footer'

const Home = () => {
  const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));


  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);



  return (







    <div>



      {/* <!-- ==========  Section 1  ========== --> */}
      <section style={{ backgroundColor: '#EFEFEF', backgroundImage: { bikku1 } }} id="section1">
        {isMediumUp && (
          <Grid
            container
            style={{
              backgroundImage: `url(${bikku1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '90vh',
            }}
          >
            <Grid item xs={12} md={6} p={10}>
              <Typography variant='h5' data-aos="fade-up" data-aos-anchor-placement="top-bottom" color={'#fff'}>
                Facility For Medical Care
              </Typography>
              <Typography variant='h2' data-aos="fade-up" data-aos-anchor-placement="top-bottom" color={'#fff'}>
                Guru Dev <span style={{ color: '#FF4D00' }}>Suwa Arana </span> <br />Bikku Hospital
              </Typography>
              <Typography mt={2} variant='h6' data-aos="fade-up" data-aos-anchor-placement="top-bottom" color={'#fff'}>
                A great commitment is made by the<br /> buddhist monks towards the prosperity and the well being of our society and the country. It is an utmost need of the present to care for and to provide medical facilities to the aged and the needy monks. Therefore now it is the duty of each one of us to support and contribute to this worthy cause as a nation.
              </Typography>
              <div style={{ marginTop: '30px' }} data-aos="fade-up">
                <Link to='/donate' style={{ textDecoration: 'none' }}>
                  <AnimatedButton btnName="Donate" />
                </Link>
              </div>
            </Grid>
          </Grid>
        )}


        {isMediumDown && (
          <Grid
            container
            style={{
              backgroundImage: `url(${mobileThero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '100vh',
            }}
          >
            <Grid item xs={12} md={6} p={2}>
              <Typography variant='subtitle1' data-aos="fade-up" data-aos-anchor-placement="top-bottom" color={'#fff'}>
                Facility For Medical Care
              </Typography>
              <Typography variant='h3' data-aos="fade-up" data-aos-anchor-placement="top-bottom" color={'#fff'}>
                Guru Dev <span style={{ color: '#FF4D00' }}>Suwa Arana </span> <br />Bikku Hospital
              </Typography>
              <Typography mt={2} variant='p' data-aos="fade-up" data-aos-anchor-placement="top-bottom" color={'#fff'}>
                A great commitment is made by the<br /> buddhist monks towards the prosperity and the well being of our society and the country. It is an utmost need of the present to care for and to provide medical facilities to the aged and the needy monks. Therefore now it is the duty of each one of us to support and contribute to this worthy cause as a nation.
              </Typography>
              <div style={{ marginTop: '30px' }} data-aos="fade-up">
                <Link to='/donate' style={{ textDecoration: 'none' }}>
                  {/* <AnimatedButton btnName="Donate" /> */}
                  <Button variant='contained'>DONATE</Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        )}
      </section>


      {/* <!-- ========== Section 2 Start ========== --> */}
      {isMediumUp && (<section id="section2" style={{ marginTop: '100px' }}>

        <Grid container mt={2}>
          <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} p={2}  >
            <img src={img1} width={'95%'} height={'110%'} alt="" />
          </Grid>

          <Grid item xs={12} md={6} p={5} >
            <Typography variant='h1'>
              Our Vision
            </Typography>
            <hr style={{ background: '#FF4D00', height: '5px', border: 'none', width: '30%' }} />
            <Typography variant='h6' color={'#757575'} marginTop={3}>
              A great commitment is made by the Buddhist monks towards the prosperity
              and the well-being of our society and the country. It is an utmost need
              of the present to care for and to provide medical facilities to the aged and
              the needy monks. Therefore now it is the duty of each one of us to support
              and contribute to this worthy cause as a nation.
            </Typography>
            <div style={{ marginTop: '50px' }}>
              <AnimatedButton2 />
            </div>
          </Grid>
        </Grid>


      </section>)};


      {isMediumDown && (<section id="section2" style={{ marginTop: '10px' }}>

        <Grid container mt={2}>
          <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} p={1}  >
            <img src={img1} width={'95%'} height={'110%'} alt="" />
          </Grid>

          <Grid item xs={12} md={6} p={3} >
            <Typography variant='h2'>
              Our Vision
            </Typography>
            <hr style={{ background: '#FF4D00', height: '5px', border: 'none', width: '30%' }} />
            <Typography variant='subtitle2' color={'#757575'} marginTop={3}>
              A great commitment is made by the Buddhist monks towards the prosperity
              and the well-being of our society and the country. It is an utmost need
              of the present to care for and to provide medical facilities to the aged and
              the needy monks. Therefore now it is the duty of each one of us to support
              and contribute to this worthy cause as a nation.
            </Typography>
            <div style={{ marginTop: '20px' }}>
              <Link to='/donate' style={{ textDecoration: 'none' }}>
                {/* <AnimatedButton btnName="Donate" /> */}
                <Button variant='contained'>Learn More</Button>
              </Link>
            </div>
          </Grid>
        </Grid>


      </section>)};
      {/* <!-- ========== Section 3 Start ========== --> */}

      {isMediumUp && (<section style={{ backgroundColor: '#EFEFEF', marginTop: '100px' }} id="section4">
        <Grid item xs={12} p={5} >
          <div style={{ display: 'flex', justifyContent: 'start', marginTop: 10 }} >

            <Typography variant='h1'>Services </Typography>



          </div>
          <div >
            <hr style={{ background: '#FF4D00', height: '5px', border: 'none', width: '15%' }} />
          </div>

        </Grid>

        <Grid container spacing={4} padding={4}>
          <Grid item xs={12} sm={6} md={4}>
            <YouTubeEmbed videoId="4FJn_4qC5t8" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <YouTubeEmbed videoId="nlfUK2ey7rQ" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <YouTubeEmbed videoId="Dq5ZKoLQK94" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <YouTubeEmbed videoId="ZeqeCvkRWNc" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <YouTubeEmbed videoId="06v1pS6Ydl4" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <YouTubeEmbed videoId="WEtCnaujdGE" />
          </Grid>
        </Grid>
      </section>)}



      {isMediumDown && (<section style={{ backgroundColor: '#EFEFEF', marginTop: '10px' }} id="section4">
        <Grid item xs={12} p={3} >
          <div style={{ display: 'flex', justifyContent: 'start', marginTop: 10 }} >

            <Typography variant='h2'>Services </Typography>
          </div>
          <div >
            <hr style={{ background: '#FF4D00', height: '5px', border: 'none', width: '30%' }} />
          </div>

        </Grid>

        <Grid container spacing={4} padding={4}>
          <Grid item xs={12} sm={6} md={4}>
            <YouTubeEmbed videoId="4FJn_4qC5t8" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <YouTubeEmbed videoId="nlfUK2ey7rQ" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <YouTubeEmbed videoId="Dq5ZKoLQK94" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <YouTubeEmbed videoId="ZeqeCvkRWNc" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <YouTubeEmbed videoId="06v1pS6Ydl4" />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <YouTubeEmbed videoId="WEtCnaujdGE" />
          </Grid>
        </Grid>
      </section>)}
      {/* <!-- ========== Section 3 Start ========== --> */}
      {isMediumUp && (<section style={{ backgroundColor: '#FFBB98', height: '15Vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', }} id="section3">
        <Typography variant='h2' color={'#00000'}>Guru Dev Suwa Arana Projects </Typography>
      </section>)}
      {isMediumDown && (<section style={{ backgroundColor: '#FFBB98', height: '15Vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', }} id="section3">
        <Typography variant='h3' textAlign={'center'} color={'#00000'}>Guru Dev Suwa Arana <br />Projects </Typography>
      </section>)}

      <Grid container p={5} spacing={5}>

        {/* Location */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            width={'100%'}
            height={'60vh'}
            borderRadius={2}
            sx={{
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >            <img src={location} alt="" />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
              {isMediumUp && (<h1>Location</h1>)}

              {isMediumDown && (<h2>Location</h2>)}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10, textAlign: 'center' }}>
              {/* <h3>No. 286/1/B, Temple Road,Kiriwattuduwa, Homagama.</h3> */}
              {isMediumUp && (<h3>No. 286/1/B, Temple Road,Kiriwattuduwa, Homagama.</h3>)}

              {isMediumDown && (<h4>No. 286/1/B, Temple Road,Kiriwattuduwa, Homagama.</h4>)}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50, textAlign: 'center' }}>
              <img src={dot} alt="" />
            </div>

          </Box>
        </Grid>

        {/* Residential facilities */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            width={'100%'}
            height={'60vh'}
            borderRadius={2}
            sx={{
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >            <img src={home} alt="" />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
              {isMediumUp && (<h1>Residential Facilities</h1>)}

              {isMediumDown && (<h2>Residential Facilities</h2>)}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10, textAlign: 'center' }}>
              {/* <h3>No. 286/1/B, Temple Road,Kiriwattuduwa, Homagama.</h3> */}
              {isMediumUp && (<h3>It is a fully equipped medical<br /> center with 34 rooms</h3>)}

              {isMediumDown && (<h4>It is a fully equipped medical<br /> center with 34 rooms</h4>)}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50, textAlign: 'center' }}>
              <img src={dot} alt="" />
            </div>

          </Box>
        </Grid>

        {/* Estimated Cost */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            width={'100%'}
            height={'60vh'}
            borderRadius={2}
            sx={{
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >            <img src={construction} alt="" />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
              {isMediumUp && (<h1>Estimated Cost</h1>)}

              {isMediumDown && (<h2>Estimated Cost</h2>)}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10, textAlign: 'center' }}>
              {/* <h3>No. 286/1/B, Temple Road,Kiriwattuduwa, Homagama.</h3> */}
              {isMediumUp && (<h3>200 million is the <br />estimated </h3>)}

              {isMediumDown && (<h4>200 million is the<br /> estimated </h4>)}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50, textAlign: 'center' }}>
              <img src={dot} alt="" />
            </div>

          </Box>
        </Grid>

        {/* Coordination */}
       
 <Grid item xs={12} sm={6} md={3}>
          <Box
            width={'100%'}
            height={'60vh'}
            borderRadius={2}
            sx={{
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >            <img src={coordination} alt="" />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
              {isMediumUp && (<h1>Coordination</h1>)}

              {isMediumDown && (<h2>Coordination</h2>)}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10, textAlign: 'center' }}>
              {/* <h3>No. 286/1/B, Temple Road,Kiriwattuduwa, Homagama.</h3> */}
              {isMediumUp && (<h3>Sri Dhatu Malu Temple </h3>)}

              {isMediumDown && (<h4>Sri Dhatu Malu Temple </h4>)}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50, textAlign: 'center' }}>
              <img src={dot} alt="" />
            </div>

          </Box>
        </Grid>
      </Grid>


      <section style={{ backgroundColor: '#EFEFEF', marginTop: '100px' }} id="section4">
        <Grid item xs={12} p={5} >

        {isMediumUp && (
          <div style={{ display: 'flex', justifyContent: 'end', marginTop: 10 }} >

            <Typography variant='h2'>Donation and Labor Appreciated </Typography>



          </div>)}
          {isMediumUp && (
          <div style={{ display: 'flex', justifyContent: 'end', marginTop: '5px' }}>
            <hr style={{ background: '#FF4D00', height: '6px', border: 'none', width: '40%' }} />
          </div>)}

          {isMediumDown && (
          <div style={{ display: 'flex', justifyContent: 'end', marginTop: 10 }} >

            <Typography variant='h3'>Donation and Labor Appreciated </Typography>



          </div>)}
          {isMediumDown && (
          <div style={{ display: 'flex', justifyContent: 'start', marginTop: '5px' }}>
            <hr style={{ background: '#FF4D00', height: '6px', border: 'none', width: '40%' }} />
          </div>)}
        </Grid>

        <Grid container spacing={4} padding={4}>
          <Grid item xs={12} sm={6} >
            <YouTubeEmbed videoId="E5Ko8Zrgqp4" />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>

              <Typography variant='h6'>Messege from Mahanayaka Thero</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} >
            <YouTubeEmbed videoId="4FJn_4qC5t8" />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>

              <Typography variant='h6'>Messege From the Thero</Typography>
            </div>
          </Grid>
        </Grid>
      </section>
      <Footer />

    </div>
  )
}

export default Home

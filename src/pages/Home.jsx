import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import bikku1 from '../assets/bikku3.png'
import img1 from '../assets/building2.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
import '../assets/FontAnimation.css'
import construction from '../assets/construction.png'
import coordination from '../assets/coordination.png'
import home from '../assets/home.png'
import location from '../assets/location.png'
import copyrights from '../assets/copyrights.png'

import AnimatedButton from '../components/Button/AnimatedButton '
import AnimatedButton2 from '../components/Button/AnimationButton2'

import YouTubeEmbed from '../components/Youtube video/YoutubeVideo'



import dot from '../assets/dot.png'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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
        <Grid
          container
          style={{
            backgroundImage: `url(${bikku1})`,
            backgroundSize: 'cover', // Ensures the image covers the entire grid container
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat', // Prevents the image from repeating
            height: '90vh', // Adjust as needed
          }}
        >
          <Grid item xs={12} md={6} p={10}>
            <Typography variant='h5' data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" color={'#fff'}>Facility For Medical Care  </Typography>
            <Typography variant='h2' data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" color={'#fff'}>Guru Dev <span style={{ color: '#FF4D00' }}>Suwa Arana </span> <br />Bikku Hospital </Typography>
            <Typography mt={2} variant='h6' data-aos="fade-up"
              data-aos-anchor-placement="top-bottom" color={'#fff'}>A great commitment is made by the<br /> buddhist
              monks
              towards the prosperity and the well being
              of our society
              and the country. It is an utmost need
              of the present to
              care for and to provide medical
              facilities to the aged and
              the needy monks. Therefore
              now it is the duty of each
              one of us to support and contribute to this worthy cause
              as a nation.</Typography>
            <div style={{ marginTop: '30px' }} data-aos="fade-up">
              <Link to='/donate' style={{textDecoration:'none'}}>
              <AnimatedButton btnName="Donate" />
              </Link>
              </div>

          </Grid>


        </Grid>
      </section>


      {/* <!-- ========== Section 2 Start ========== --> */}
      <section id="section2" style={{ marginTop: '100px' }}>
        <Grid container mt={2}>
          <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} p={2}  >
            <img src={img1} width={'95%'} height={'110%'} alt=""  />
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
      </section>
      {/* <!-- ========== Section 4 Start ========== --> */}
      <section style={{ backgroundColor: '#EFEFEF', marginTop: '100px' }} id="section4">
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
      </section>
      {/* <!-- ========== Section 3 Start ========== --> */}
      <section style={{ backgroundColor: '#FFBB98', height: '15Vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', }} id="section3">
        <Typography variant='h2' color={'#00000'}>Guru Dev Suwa Arana Projects </Typography>
      </section>

      <Grid container p={5} spacing={5}>

        {/* Location */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            width={'100%'}
            height={'60vh'}
            sx={{
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >            <img src={location} alt="" />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
              <h1>Location</h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10, textAlign: 'center' }}>
              <h3>No. 286/1/B, Temple Road,Kiriwattuduwa, Homagama.</h3>
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
            sx={{
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >            <img src={home} alt="" />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
              <h1>Residential Facilities</h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10, textAlign: 'center' }}>
              <h3>It is a fully equipped medical center with 34 rooms</h3>
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
            sx={{
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >            <img src={construction} alt="" />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
              <h1>Estimated Cost</h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10, textAlign: 'center' }}>
              <h3>100 million is the estimated <br />cost</h3>
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
            sx={{
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >            <img src={coordination} alt="" />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
              <h1>Coordination</h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10, textAlign: 'center' }}>
              <h3>Sri Dhatu Malu Temple<br /> Kohuwala</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50, textAlign: 'center' }}>
              <img src={dot} alt="" />
            </div>

          </Box>
        </Grid>
      </Grid>


      <section style={{ backgroundColor: '#EFEFEF', marginTop: '100px' }} id="section4">
        <Grid item xs={12} p={5} >
          <div style={{ display: 'flex', justifyContent: 'end', marginTop: 10 }} >

            <Typography variant='h2'>Donation and Labor Appreciated </Typography>



          </div>
          <div style={{ display: 'flex', justifyContent: 'end', marginTop: '5px' }}>
            <hr style={{ background: '#FF4D00', height: '6px', border: 'none', width: '40%' }} />
          </div>

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
<Footer/>

    </div>
  )
}

export default Home

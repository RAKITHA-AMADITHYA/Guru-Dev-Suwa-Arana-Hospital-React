import React from 'react'
import Footer from '../components/footer/Footer'
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material'
import thero1 from '../assets/thero3.png'
import AnimatedButton from '../components/Button/AnimatedButton '
import budhdha from '../assets/budhdha.png'
import dot from '../assets/dot.png'

const Director = () => {

  const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <>
      {/* Section 1 */}
      {isMediumUp && (<section style={{ backgroundColor: '#EFEFEF' }} id="section1">
        <Grid container>
          <Grid item xs={12} md={6} p={10}>
            <Typography
              variant='h5'
              color={'#212b36'}
              textAlign={'start'}
              data-aos="fade-up"
            >
              The Founder of GDSA
            </Typography>
            <Typography variant='h2' data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"><span style={{ color: '#FF4D00' }}>Most Ven </span>  Mapalagama Somisara Thero </Typography>
            <Typography mt={2} variant='h6' data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"> The Most Venerable Mapalagama Sri Somisara Nayaka Thero of the Sri
              Dhathamma Viharaya, No. 94, Sunethra Devi Road, Kohuwala, has
              identified the need to build another hospital with the facilities for the
              monks living in the country.As a result of his untiring efforts, he has
              donated a land of 40 perches, situated at 286/1 B, Pansala Road,
              Kiriwattuduwa, in the Homagama Divisional Secretariat Division in the
              Colombo District.</Typography>

            <div style={{ marginTop: '30px' }} >
              <AnimatedButton btnName="Learn More" /></div>
          </Grid>
          <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} p={2} data-aos="zoom-in">
            <img src={thero1} width={'60%'} alt="" />
          </Grid>

        </Grid>
      </section>)}

      {isMediumDown && (<section style={{ backgroundColor: '#EFEFEF' }} id="section1">
        <Grid container>
          <Grid item xs={12} md={6} p={3}>
            <Typography
              variant='h6'
              color={'#212b36'}
              textAlign={'start'}
              data-aos="fade-up"
            >
              The Founder of GDSA
            </Typography>
            <Typography variant='h3' data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"><span style={{ color: '#FF4D00' }}>Most Ven </span>  Mapalagama Somisara Thero </Typography>
            <Typography mt={2} variant='subtitle1' data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"> The Most Venerable Mapalagama Sri Somisara Nayaka Thero of the Sri
              Dhathamma Viharaya, No. 94, Sunethra Devi Road, Kohuwala, has
              identified the need to build another hospital with the facilities for the
              monks living in the country.As a result of his untiring efforts, he has
              donated a land of 40 perches, situated at 286/1 B, Pansala Road,
              Kiriwattuduwa, in the Homagama Divisional Secretariat Division in the
              Colombo District.</Typography>

            <div style={{ marginTop: '30px' }} >
              <Button variant='contained'>Learn More</Button></div>
          </Grid>
          <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} p={1} data-aos="zoom-in">
            <img src={thero1} width={'80%'} alt="" />
          </Grid>

        </Grid>
      </section>)}



      {/* Section2 */}

      {isMediumUp && (<Grid item xs={12} md={6} p={10}>
        <Typography
          variant='h3'
          color={'#212b36'}
          textAlign={'start'}
        >
          Management
        </Typography>
        <hr style={{ background: '#FF4D00', height: '5px', border: 'none', width: '15%' }} />
        <Typography
          variant='h5'
          color={'#212b36'}
          textAlign={'start'}
          mt={2}
        >
          This institution is managed by the Board of Directors
          jointly with the Ministry of Health and the Kohuwala
          Sri Dhatumaluwa Temple which is registered under the
          Companies Act as a non-profit organization.
        </Typography>
      </Grid>)};

      {isMediumDown && (<Grid item xs={12} md={6} p={2}>
        <Typography
          variant='h3'
          color={'#212b36'}
          textAlign={'start'}
        >
          Management
        </Typography>
        <hr style={{ background: '#FF4D00', height: '5px', border: 'none', width: '30%' }} />
        <Typography
          variant='subtitle1'
          color={'#212b36'}
          textAlign={'start'}
          mt={2}
        >
          This institution is managed by the Board of Directors
          jointly with the Ministry of Health and the Kohuwala
          Sri Dhatumaluwa Temple which is registered under the
          Companies Act as a non-profit organization.
        </Typography>
      </Grid>)};



      {/* section +3 */}

      <section style={{ backgroundColor: '#FFBB98', height: '15vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', }} id="section3">
        {isMediumUp && (<Typography variant='h2' color={'#00000'}>Projects Coordination & Supervision </Typography>)}
        {isMediumDown && (<Typography variant='h3' color={'#00000'}>Projects Coordination & Supervision </Typography>)}

      </section>

      <Grid container p={5} display={'flex'} justifyContent={'center'} spacing={2}>
        {/* Coordination */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            width={'100%'}
            height={'55vh'}
            borderRadius={2}
            sx={{
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >            <img src={budhdha} alt="" />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
              <h1>Coordination</h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10, textAlign: 'center' }}>
              <h4>Ven Gammana Vjayadamma <br /> Thero</h4>
            </div>


          </Box>
        </Grid>

        {/* Coordination */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            width={'100%'}
            height={'55vh'}
            borderRadius={2}
            sx={{
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >            <img src={budhdha} alt="" />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
              <h1>Supervision</h1>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10, textAlign: 'center' }}>
              <h4>Ven Pitigala Sonuttara Thero<br />
                (The Chief monk of Sri Dathumaluwa
                <br />Temple at Sunethra Devi Road,<br />
                Kohuwala.)
              </h4>
            </div>


          </Box>
        </Grid>
      </Grid>

      <section style={{ backgroundColor: '#EFEFEF' }} >
        <Grid container>
          {isMediumUp && (
            <Grid item xs={12} md={6} p={10}>


              <Box sx={{ bgcolor: '' }}>
                <Typography
                  variant='h3'
                  color={'#212b36'}
                  textAlign={'start'}
                >
                  Board Of Directors
                </Typography>
                <hr style={{ background: '#FF4D00', height: '5px', border: 'none', width: '15%' }} />
                <Typography
                  variant='h6'
                  color={'#212b36'}
                  textAlign={'start'}
                  mt={2}
                >
                  Most Venerable Napana Pemasiri Thero <br />
                  Most Venerable Wadduwa Dhammawasana Thero<br />
                  Most Venerable Keppetiyagoda Gunawansa Thero<br />
                  Venerable Katuwana Vijitawansa Thero<br />
                  Venerable Gammana Vijayadhamma Thero<br />
                  DR S.P.G.C Senadeera<br />
                  MRS  Sunethra Ranasinghe<br />
                  MR Ravi Perera<br />
                  Mr Tissa Rajapaksa<br />
                  Dr  S.S. jayarathne


                </Typography></Box>
            </Grid>)}

          {isMediumDown && (
            <Grid item xs={12} md={6} p={2}>


              <Box sx={{ bgcolor: '' }}>
                <Typography
                  variant='h3'
                  color={'#212b36'}
                  textAlign={'start'}
                >
                  Board Of Directors
                </Typography>
                <hr style={{ background: '#FF4D00', height: '5px', border: 'none', width: '30%' }} />
                <Typography
                  variant='subtitle1'
                  color={'#212b36'}
                  textAlign={'start'}
                  mt={2}
                >
                  Most Venerable Napana Pemasiri Thero <br />
                  Most Venerable Wadduwa Dhammawasana Thero<br />
                  Most Venerable Keppetiyagoda Gunawansa Thero<br />
                  Venerable Katuwana Vijitawansa Thero<br />
                  Venerable Gammana Vijayadhamma Thero<br />
                  DR S.P.G.C Senadeera<br />
                  MRS  Sunethra Ranasinghe<br />
                  MR Ravi Perera<br />
                  Mr Tissa Rajapaksa<br />
                  Dr  S.S. jayarathne


                </Typography></Box>
            </Grid>)}

          {isMediumUp && (<Grid item xs={12} md={6} p={10}>


            <Box sx={{ bgcolor: '' }}>
              <Typography
                variant='h3'
                color={'#212b36'}
                textAlign={'start'}
              >
                Members
              </Typography>
              <hr style={{ background: '#FF4D00', height: '5px', border: 'none', width: '15%' }} />
              <Typography
                variant='h6'
                color={'#212b36'}
                textAlign={'start'}
                mt={2}
              >
                Venerable Pitigala Sonuthara Thero
                <br />
                Mr. Malambage Chandrasena Perera<br />
                Mr. Mattaka Gamage Kithsiri Devapriya<br />
                Mr. Aluthgamage Priyantha Nanayakkara<br />
                Mr. Rasika Prasanna Kaluarachchi<br />
                Mr. Ponnamperumarachchige Nandasiri<br />
                Dr. Sadanayake's Denzil Indika<br />
                Mr. Hiran Lokugamage<br />
                Mr. Sanjaya Ratnayake<br />
                Mr. Hollupathirage <br />
                Mr. Nalinda Madhava Caldera<br />
                Dr. Prabhasi Thakshila  Abeysuriya<br />
                Miss.Samadhara Padumasena<br />
                Mr. Sisira Wijesinghe<br />
                Miss Swarna Ratnayake<br />
                Mr. Thambugala  Dimuth Prashantha<br />



              </Typography></Box>
          </Grid>)}


          {isMediumDown && (<Grid item xs={12} md={6} p={2}>


            <Box sx={{ bgcolor: '' }}>
              <Typography
                variant='h3'
                color={'#212b36'}
                textAlign={'start'}
              >
                Members
              </Typography>
              <hr style={{ background: '#FF4D00', height: '5px', border: 'none', width: '30%' }} />
              <Typography
                variant='subtitle1'
                color={'#212b36'}
                textAlign={'start'}
                mt={2}
              >
                Venerable Pitigala Sonuthara Thero
                <br />
                Mr. Malambage Chandrasena Perera<br />
                Mr. Mattaka Gamage Kithsiri Devapriya<br />
                Mr. Aluthgamage Priyantha Nanayakkara<br />
                Mr. Rasika Prasanna Kaluarachchi<br />
                Mr. Ponnamperumarachchige Nandasiri<br />
                Dr. Sadanayake's Denzil Indika<br />
                Mr. Hiran Lokugamage<br />
                Mr. Sanjaya Ratnayake<br />
                Mr. Hollupathirage <br />
                Mr. Nalinda Madhava Caldera<br />
                Dr. Prabhasi Thakshila  Abeysuriya<br />
                Miss.Samadhara Padumasena<br />
                Mr. Sisira Wijesinghe<br />
                Miss Swarna Ratnayake<br />
                Mr. Thambugala  Dimuth Prashantha<br />



              </Typography></Box>
          </Grid>)}



        </Grid></section>
      <Footer />

    </>
  )
}

export default Director
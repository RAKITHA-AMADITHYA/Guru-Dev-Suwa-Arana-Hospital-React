// import { Divider, Grid, Typography, useMediaQuery } from '@mui/material';
// import copyRight from '../../assets/powered.png';
// import FbBtn from '../Button/FaceBook';
// import logo from '../../assets/logo1.png'

// const Footer = () => {
//   const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
//   const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
//   return (
//     <section style={{ background: '#292727' }}>
//     {isMediumUp && (   <Grid container p={2}>
//         <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
//           <img src={logo} width={'15%'} alt="" />
//         </Grid>

//         <Grid item xs={6} sm={6} md={6} lg={6} xl={6} display={'flex'} justifyContent={'end'} alignItems={'end'} flexDirection={'column'}>
//           <Typography variant='h6' color={'#ff4d00'} fontWeight={800} >Contact Numbers</Typography>
//           <Typography variant='subtitle2' color={'white'} fontWeight={600}>(+94)-112853415</Typography>
//           <Typography variant='subtitle2' color={'white'} fontWeight={600}>(+94)-718395305</Typography>


//           <Typography  variant='h6' color={'#ff4d00'} fontWeight={800} >Email</Typography>
//           <Typography  variant='subtitle2' color={'white'} fontWeight={600}>gdsasrilanka@gmail.com</Typography>
//         </Grid>

//       </Grid>)}


//       {isMediumDown && (   <Grid container p={2}>
//         <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
//           <img src={logo} width={'60%'} alt="" />
//         </Grid>

//         <Grid item xs={6} sm={6} md={6} lg={6} xl={6} display={'flex'} justifyContent={'end'} alignItems={'end'} flexDirection={'column'}>
//           <Typography variant='subtitle1' color={'#ff4d00'} fontWeight={800} >Contact Numbers</Typography>
//           <Typography variant='subtitle2' color={'white'} fontWeight={600}>(+94)-112853415</Typography>
//           <Typography variant='subtitle2' color={'white'} fontWeight={600}>(+94)-718395305</Typography>


//           <Typography  variant='subtitle1' color={'#ff4d00'} fontWeight={800} >Email</Typography>
//           <Typography  variant='subtitle2' color={'white'} fontWeight={600}>gdsasrilanka@gmail.com</Typography>
//         </Grid>

//       </Grid>)}



//       {/* <Divider sx={{ my: 2 }} /> */}
//       {isMediumUp && (   <div style={{ padding: '10px', display:'flex', justifyContent:'center' }}>
//           <img src={copyRight} width={'12%'} alt="" />

//       </div>)}
//       {isMediumDown && (   <div style={{ padding: '1px', display:'flex', justifyContent:'center' }}>
//           <img src={copyRight} width={'50%'} alt="" />

//       </div>)}

//     </section>
//   )
// }

// export default Footer


import { Divider, Grid, Typography, useMediaQuery } from '@mui/material';
import logo from '../../assets/logo1.png';
import copyRight from '../../assets/powered.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';


const Footer = () => {
  const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));
  return (
    <section style={{ background: '#292727' }}>
      {isMediumUp && (<Grid container p={2}>
        <Grid item md={4}  >
          <img src={logo} width={'10%'} alt="" />
          <Typography variant='p' mt={'10px'} color={'#FFFF'}>
            A great commitment is made by the<br /> buddhist monks towards the prosperity and the well being of our society and the country. It is an utmost need of the present to care for and to provide medical facilities to the aged and the needy monks. Therefore now it is the duty of each one of us to support and contribute to this worthy cause as a nation.          </Typography>

        </Grid>

        <Grid item md={5} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'colunm'} textAlign={'start'}>
          <Typography variant='subtitle2' mt={'2px'} color={'#FFFF'}>
            HOME<br />
            GALLERY<br />
            DIRECTOR BOARD<br />
            DONATIONS<br />
            CONTACT US<br />



          </Typography>
        </Grid>

        <Grid item md={3}   >



          {/* Phone */}
          <div style={{ display: 'flex', gap: '10px', color: '#fff', marginTop: '10px' }}>
            <LocalPhoneIcon sx={{ fontSize: { lg: '30px', color: '#ff7a00' } }} />
            <Typography variant='subtitle2'>
              (+94)-112853415<br />
              (+94)-718395305

            </Typography>
          </div>

          {/* Mail */}
          <div style={{ display: 'flex', gap: '10px', color: '#fff', marginTop: '10px' }}>
            <MailIcon sx={{ fontSize: { lg: '30px' }, color: '#ff7a00' }} />
            <Typography variant='subtitle2'>gdsasrilanka@gmail.com</Typography>
          </div>
        </Grid>


      </Grid>)}

      {isMediumDown && (<Grid container p={2}>
        <Grid item md={4}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={logo} width={'25%'} alt="" /></div>
          

        </Grid>
        <Grid container mt={2}>
          <Grid item xs={6} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'colunm'} textAlign={'start'}>
            <Typography variant='subtitle2' mt={'2px'} fontWeight={800} color={'#FFFF'}>
              HOME<br />
              GALLERY<br />
              DIRECTOR BOARD<br />
              DONATIONS<br />
              CONTACT US<br />


            </Typography>
          </Grid>

          <Grid item xs={6}    >
            {/* Phone */}
            <div style={{ display: 'flex', gap: '10px', color: '#fff', marginTop: '10px' }}>
              <LocalPhoneIcon sx={{ fontSize: { lg: '30px', color: '#ff7a00' } }} />
              <Typography variant='subtitle2'>
                (+94)-112853415<br />
                (+94)-718395305

              </Typography>
            </div>

            {/* Mail */}
            <div style={{ display: 'flex', gap: '10px', color: '#fff', marginTop: '10px' }}>
              <MailIcon sx={{ fontSize: { lg: '30px' }, color: '#ff7a00' }} />
              <Typography variant='subtitle2'>gdsasrilanka@<br/>gmail.com</Typography>
            </div>
          </Grid>

        </Grid>

      </Grid>)}



      <Divider sx={{ my: 1 }} />
      {isMediumUp && (<div style={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
        <img src={copyRight} width={'12%'} alt="" />

      </div>)}
      {isMediumDown && (<div style={{ padding: '1px', display: 'flex', justifyContent: 'center' }}>
        <img src={copyRight} width={'50%'} alt="" />

      </div>)}

    </section>
  )
}

export default Footer


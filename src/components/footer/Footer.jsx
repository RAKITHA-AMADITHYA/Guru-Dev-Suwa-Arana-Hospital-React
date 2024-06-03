import { Divider, Grid, Typography } from '@mui/material';
import copyRight from '../../assets/copyrights.png';
import FbBtn from '../Button/FaceBook';
import logo from '../../assets/logo1.png'

const Footer = () => {
  return (
    <section style={{ background: '#292727' }}>
      <Grid container p={2}>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
          <img src={logo} width={'20%'} alt="" />
        </Grid>

        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} display={'flex'} justifyContent={'end'} alignItems={'end'} flexDirection={'column'}>
          <Typography variant='subtitle1' color={'#ff4d00'} fontWeight={800} >Contact Numbers</Typography>
          <Typography variant='subtitle2' color={'white'} fontWeight={600}>(+94)-112853415</Typography>
          <Typography variant='subtitle2' color={'white'} fontWeight={600}>(+94)-718395305</Typography>


          <Typography  variant='subtitle1' color={'#ff4d00'} fontWeight={800} >Email</Typography>
          <Typography  variant='subtitle2' color={'white'} fontWeight={600}>gdsasrilanka@gmail.com</Typography>
        </Grid>

      </Grid>
      <Divider sx={{ my: 2 }} />
      <div style={{ padding: '10px', display:'flex', justifyContent:'center' }}>
          <img src={copyRight} width={'18%'} alt="" />

{/* <div style={{display:'flex',gap:'10px' ,}}>

<FbBtn/>
</div> */}



      </div>

    </section>
  )
}

export default Footer

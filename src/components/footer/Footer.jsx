import { Divider, Grid, Typography } from '@mui/material';
import copyRight from '../../assets/copyrights.png';
import FbBtn from '../Button/FaceBook';

const Footer = () => {
  return (
    <section style={{ background: '#292727' }}>
      <Grid container p={2}>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
          {/* <img src={logo} width={'30%'} alt="" /> */}
        </Grid>

        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} display={'flex'} justifyContent={'end'} alignItems={'end'} flexDirection={'column'}>
          <Typography variant='p' color={'white'} fontWeight={400}>Contact</Typography>
          <Typography variant='p' color={'white'} fontWeight={600}>(+94) 70 000 0000</Typography>


          <Typography variant='subtitle1' color={'white'} fontWeight={400} >Email</Typography>
          <Typography variant='subtitle1' color={'white'} fontWeight={600}>support@studiomojo.lk</Typography>
        </Grid>

      </Grid>
      <Divider sx={{ my: 2 }} />
      <div style={{ padding: '10px', display:'flex', justifyContent:'space-between' }}>
          <img src={copyRight} width={'18%'} alt="" />

<div style={{display:'flex',gap:'10px' ,}}>

<FbBtn/>
</div>



      </div>

    </section>
  )
}

export default Footer

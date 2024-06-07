import React, { Suspense, useEffect } from 'react'
import { Card, Typography } from '@mui/material'
import './animation.css'
import GalleryBtn from '../Button/GalleryBtn'
import LoadingAnimation from '../loading animation/LoadingAnimation';
import { Link } from 'react-router-dom';



function SuspenseWrapper({ children }) {
    return (
      <Suspense
        fallback={
          <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <LoadingAnimation type="line-scale" color="#FF4D00" active />
          </div>
        }
      >
        {children}
      </Suspense>
    );
  }
const CardLocation = ({ img, title, w ,h,link}) => {
    return (
        <SuspenseWrapper>
        <div>
            <Card className="card" sx={{ borderRadius: 3, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: 'auto',  }} >
                <img src={img} width={w} height={h} alt="" />
                <div style={{ padding: 2, margin: 2, display: 'flex', justifyContent: 'center' }} >
                    <Typography variant='h4' color={'#00000'} fontWeight={'800'}>{title}</Typography>
                </div>
                <div style={{ padding: 10, margin: 5, display: 'flex', justifyContent: 'center' }}>
                    <Typography variant='subtitle1' color={'#00000'} fontWeight={'400'} textAlign={'center'}>To See more Pictures Click on the Below button  </Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', padding: 2 }} >
                    <Link to={link} style={{textDecoration:'none'}}>
                    <GalleryBtn /></Link>
                </div>
            </Card>
        </div></SuspenseWrapper>
    )
}

export default CardLocation

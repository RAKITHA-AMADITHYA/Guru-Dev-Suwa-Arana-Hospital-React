import React, { Suspense, useEffect } from 'react'
import { Card, Typography } from '@mui/material'
import './animation.css'
import GalleryBtn from '../Button/GalleryBtn'
import LoadingAnimation from '../loading animation/LoadingAnimation';



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
const CardLocation = ({ img, title, w }) => {
    return (
        <SuspenseWrapper>
        <div>
            <Card className="card" sx={{ borderRadius: 3, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: 'auto',  }} >
                <img src={img} width={w} alt="" />
                <div style={{ padding: 2, margin: 2, display: 'flex', justifyContent: 'center' }} >
                    <Typography variant='h5' color={'#00000'} fontWeight={'800'}>{title}</Typography>
                </div>
                <div style={{ padding: 10, margin: 5, display: 'flex', justifyContent: 'center' }}>
                    <Typography variant='subtitle1' color={'#00000'} fontWeight={'400'} textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit  </Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px', padding: 2 }} >
                    <GalleryBtn />
                </div>
            </Card>
        </div></SuspenseWrapper>
    )
}

export default CardLocation
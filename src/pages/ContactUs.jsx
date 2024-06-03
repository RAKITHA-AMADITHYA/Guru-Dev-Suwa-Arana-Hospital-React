import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Contact2 from '../components/Button/Contact2';
import FbBtn from '../components/Button/FaceBook';
import PhoneButton from '../components/Button/Phone';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issues
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Footer from '../components/footer/Footer';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const ContactUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);

  const position = [7.291418, 80.632810]; // Coordinates for the specified location

  return (
    <section style={{ backgroundColor: '#EFEFEF' }} id="section1">
        <section style={{ backgroundColor: '#FFBB98', height: '15Vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', }} id="section3">
        <Typography variant='h2' color={'#00000'} data-aos="zoom-in">Contact Guru Dev Suwa Arana</Typography>
      </section>
      <Grid container >
        <Grid item xs={12} md={6} p={10} data-aos="zoom-in-right">
          <div style={{ display: 'flex', flex: 1, gap: '20px' }} >
            <Contact2 />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h1>Contact Numbers</h1>
              <h1>(+94)-112853415 / (+94)-718395305</h1>
            </div>
          </div>

          <div style={{ display: 'flex', flex: 1, gap: '20px', marginTop: '10px' }} >
            <PhoneButton />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h1>Email</h1>
              <h1>gdsasrilanka@gmail.com</h1>
            </div>
          </div>

          <div style={{ display: 'flex', flex: 1, gap: '20px', marginTop: '10px' }} >
            <FbBtn />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h1>Facebook</h1>
              <h1>Guna dev suwa Arana</h1>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} p={2} data-aos="zoom-in-left">
          <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                R233+5C8, Dolahenea Moonamale Watta Rd, Moonamale, Sri Lanka
              </Popup>
            </Marker>
          </MapContainer>
        </Grid>
      </Grid>
      <Footer/>
    </section>
  );
};

export default ContactUs;

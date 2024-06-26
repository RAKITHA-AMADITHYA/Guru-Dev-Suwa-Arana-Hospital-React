import React, { useEffect } from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import Contact2 from '../components/Button/Contact2';
import FbBtn from '../components/Button/FaceBook';
import PhoneButton from '../components/Button/Phone';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../components/footer/Footer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issues
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const ContactUs = () => {
  const isMediumUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isMediumDown = useMediaQuery((theme) => theme.breakpoints.down('md'));

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);

  const position = [6.809328, 80.0130579]; // Coordinates for the specified location

  return (
    <section style={{ backgroundColor: '#f9f2f2' }} id="section1">
      {isMediumUp && (
        <Grid container>
          <Grid item xs={12} md={6} p={10} data-aos="zoom-in-right">
            <div style={{ display: 'flex', flex: 1, gap: '20px' }}>
              <a href="tel:+94112853415">
                <Contact2 />
              </a>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1>Contact Numbers</h1>
                <h1>(+94)-112853415 / (+94)-718395305</h1>
              </div>
            </div>

            <div style={{ display: 'flex', flex: 1, gap: '20px', marginTop: '10px' }}>
              <a href="mailto:gdsasrilanka@gmail.com">
                <PhoneButton />
              </a>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1>Email</h1>
                <h1>gdsasrilanka@gmail.com</h1>
              </div>
            </div>

            <div style={{ display: 'flex', flex: 1, gap: '20px', marginTop: '10px' }}>
              <FbBtn />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1>Facebook</h1>
                <h1>Guna dev suwa Arana</h1>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} p={2} data-aos="zoom-in-left" sx={{boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'}}>
            <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  Gurudew Suwa Arana, R233+5C8, Dolahenea Moonamale Watta Rd, Moonamale, Sri Lanka
                </Popup>
              </Marker>
            </MapContainer>
          </Grid>
        </Grid>
      )}

      {isMediumDown && (
        <Grid container>
          <Grid item xs={12} p={1} data-aos="zoom-in-right">
            <div style={{ display: 'flex', flex: 1, gap: '20px' }}>
              <a href="tel:+94112853415">
                <Contact2 />
              </a>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3>Contact Numbers</h3>
                <h3>(+94)-112853415 / (+94)-718395305</h3>
              </div>
            </div>

            <div style={{ display: 'flex', flex: 1, gap: '20px', marginTop: '10px' }}>
              <a href="mailto:gdsasrilanka@gmail.com">
                <PhoneButton />
              </a>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3>Email</h3>
                <h3>gdsasrilanka@gmail.com</h3>
              </div>
            </div>

            <div style={{ display: 'flex', flex: 1, gap: '20px', marginTop: '10px' }}>
              <FbBtn />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3>Facebook</h3>
                <h3>Guna dev suwa Arana</h3>
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
                  Gurudew Suwa Arana, R233+5C8, Dolahenea Moonamale Watta Rd, Moonamale, Sri Lanka
                </Popup>
              </Marker>
            </MapContainer>
          </Grid>
        </Grid>
      )}
      <Footer />
    </section>
  );
};

export default ContactUs;

import 'loaders.css/src/animations/line-scale.scss';
import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoadingAnimation from './components/loading animation/LoadingAnimation';
import Layout from './layouts/Layout';
import ThemeProvider from "./theme";
;


const Home = lazy(() => import("./pages/Home"));
const Progress = lazy(() => import("./pages/Progress"));
const ViewGallery = lazy(() => import("./pages/gallery/ViewGallery"));
const Director = lazy(() => import("./pages/Director"));
const Donate = lazy(() => import("./pages/Donate"));
const Constructions = lazy(() => import("./pages/gallery/Constructions"));
const OperningCeremony = lazy(() => import("./pages/gallery/OperningCeremony"));
const SocialServices = lazy(() => import("./pages/gallery/SocialServices"));
const DahamPasala = lazy(() => import("./pages/gallery/DahamPasala"));
const KatinaPinkama = lazy(() => import("./pages/gallery/Katina"));
const MahanaPinkama = lazy(() => import("./pages/gallery/mahana"));
const ContactUs = lazy(() => import("./pages/ContactUs"));









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

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>

          <Route element={<Layout />}>
            <Route path="/" element={<SuspenseWrapper><Home /></SuspenseWrapper>} />
            <Route path="/progress" element={<SuspenseWrapper><Progress /></SuspenseWrapper>} />
            <Route path="/view-gallery" element={<SuspenseWrapper><ViewGallery /></SuspenseWrapper>} />
            <Route path="/director-board" element={<SuspenseWrapper><Director /></SuspenseWrapper>} />
            <Route path="/donate" element={<SuspenseWrapper><Donate /></SuspenseWrapper>} />
            <Route path="/constructions" element={<SuspenseWrapper><Constructions /></SuspenseWrapper>} />
            <Route path="/operning-ceremony" element={<SuspenseWrapper><OperningCeremony /></SuspenseWrapper>} />
            <Route path="/social-services" element={<SuspenseWrapper><SocialServices /></SuspenseWrapper>} />
            <Route path="/daham-pasala" element={<SuspenseWrapper><DahamPasala /></SuspenseWrapper>} />
            <Route path="/katina-pinkama" element={<SuspenseWrapper><KatinaPinkama /></SuspenseWrapper>} />
            <Route path="/mahana-pinkama" element={<SuspenseWrapper><MahanaPinkama /></SuspenseWrapper>} />
            <Route path="/contact-us" element={<SuspenseWrapper><ContactUs /></SuspenseWrapper>} />
           



          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

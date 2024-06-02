import 'loaders.css/src/animations/line-scale.scss';
import React, { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoadingAnimation from './components/loading animation/LoadingAnimation';
import Layout from './layouts/Layout';
import ThemeProvider from "./theme";

const Home = lazy(() => import("./pages/Home"));
const Progress = lazy(() => import("./pages/Progress"));
const ViewGallery = lazy(() => import("./pages/gallery/ViewGallery"));
const Director = lazy(() => import("./pages/Director"));
const Donate = lazy(() => import("./pages/Donate"));





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


          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

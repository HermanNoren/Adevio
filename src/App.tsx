import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "./App.css";
import Header from "./components/header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import PageNotFound from "./components/404/PageNotFound";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis();

    let animationFrameId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/om-oss" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;

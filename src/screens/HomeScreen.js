import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

// Components
import Header from "../components/Header";
import Banner from "../components/Banner";
import Loader from "../components/Loader";
import About from "../components/About";
import { AboutData, AboutDataTwo } from "../data/AboutData";
import RoadMap from "../components/RoadMap";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Mint from "../components/Mint";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence>
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header toggle={toggle} />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                  src={process.env.PUBLIC_URL + `/images/image-2.jpeg`}
                  layoutId="main-image-1"
                />
              </div>
            )}
            <About {...AboutData} />
            <About {...AboutDataTwo} />
            <RoadMap />
            <Team />
            <Mint />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default HomeScreen;

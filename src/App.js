import HomeScreen from './screens/HomeScreen';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <HomeScreen />
    </>
  );
}

export default App;

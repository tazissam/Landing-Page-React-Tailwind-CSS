// Suggested code may be subject to a license. Learn more: ~LicenseLog:3771210346.
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimonail from './components/Testimonails';
import { Footer } from './components/FooterSection';

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-2 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonail />
        <Footer />
      </div>
    </>
  );
}

export default App;
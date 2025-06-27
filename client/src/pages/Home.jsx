import HeroSection from '../components/HeroSection';
import StatsPanel from '../components/StatsPanel';
import ServiceSection from '../components/ServiceSection'
import NewsSection from '../components/NewsSection'
import ChooseUs from '../components/ChooseUs'
import CallToAction from '../components/CallToAction'

const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsPanel />
      <ServiceSection />
      <NewsSection />
      <ChooseUs />
      <CallToAction />
    </>
  )
}

export default Home;
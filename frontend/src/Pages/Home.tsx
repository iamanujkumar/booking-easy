
// import Hero from '../components/Hero'
// import EventsSlider from '../components/VenderCard/EventSider'
import AboutUs from '../components/AbousUs/AboutUs'
import VendorList from '../components/VenderCard/vendors/vendors'
import CoverPage from './CoverPage/CoverPage'

const Home = () => {
  return (
    <div>
      {/* <Hero/>    */}
      <CoverPage/>
      <VendorList/>

      <AboutUs/>
      
    </div>
  )
}

export default Home

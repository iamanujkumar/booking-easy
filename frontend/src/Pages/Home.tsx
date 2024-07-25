
// import Hero from '../components/Hero'
// import EventsSlider from '../components/VenderCard/EventSider'
import AboutUs from '../components/AbousUs/AboutUs'
import RegisterVendor from '../components/VenderCard/RegisterVendor/RegisterVendor'
import VendorList from '../components/VenderCard/vendors/vendors'
import CoverPage from './CoverPage/CoverPage'

const Home = () => {
  return (
    <div>
      {/* <Hero/>    */}
      <CoverPage/>
      <VendorList/>
      <RegisterVendor/>
      <AboutUs/>
      
    </div>
  )
}

export default Home

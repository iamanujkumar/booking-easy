import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventCards from "./EventCard";
import dj from '../../assets/dj.jpg'
import lawn from '../../assets/lawn.jpg'
import decorator from '../../assets/decorator.jpg'
import mehandi from '../../assets/mehandi.jpg'




const events = [
  { name: "photography", image: decorator },
  { name: "mehandi", image: mehandi },
  { name: "dj", image: dj },
  { name: "lawns", image: lawn },
];

const EventSlider = () => {


  return (
    <Slider dots={true} infinite={true} speed={500} slidesToShow={4} slidesToScroll={1}>
    {events.map((element, index) => (
      <EventCards key={index} name={element.name} image={element.image} />
    ))}
  </Slider>
  );
};

export default EventSlider;
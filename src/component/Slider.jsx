import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CollectionCard from "./CollectionCard";
import pic1 from '../assets/images/collection1.png';
import pic2 from '../assets/images/collection2.png';
import pic3 from '../assets/images/collection3.png';
import pic4 from '../assets/images/collection4.png';
import pic5 from '../assets/images/collection5.png';

const Slider = ({ slides, deviceType }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="App">
        <Carousel 
          responsive={responsive}
          arrows={false}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={deviceType}
          itemClass="carousel-item-padding"
        >
          <CollectionCard imgSrc={pic1} name={'Arc Duke Flur'} />
          <CollectionCard imgSrc={pic2} name={'Fluffy Accent'} />
          <CollectionCard imgSrc={pic3} name={'Emily'} />
          <CollectionCard imgSrc={pic4} name={'Dracular Horn'} />
          <CollectionCard imgSrc={pic5} name={'Antique Barrel'} />
        </Carousel>
      </div>
      <style jsx>{`
        .react-multi-carousel-dot-list {
          display: none;
        }
        .carousel-item-padding {
          margin: 0 15px; /* Adjust the padding to your desired space */
        }
      `}</style>
    </>
  );
};

export default Slider;

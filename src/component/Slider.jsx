import React from "react";
import Carousel from "react-elastic-carousel";
import CollectionCard from "./CollectionCard";
import pic1 from '../assets/images/collection1.png';
import pic2 from '../assets/images/collection2.png';
import pic3 from '../assets/images/collection3.png';
import pic4 from '../assets/images/collection4.png';
import pic5 from '../assets/images/collection5.png';

const Slider = ({ slides, deviceType }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="App">
        <Carousel 
          breakPoints={breakPoints}
          showArrows={false}
          showEmptySlots={false}
        >
           <CollectionCard imgSrc={pic1} name={'Arc Duke Flur'} />
                <CollectionCard imgSrc={pic2} name={'Fluffy Accent'} />
                <CollectionCard imgSrc={pic3} name={'Emily'} />
                <CollectionCard imgSrc={pic4} name={'Dracular Horn'} />
                <CollectionCard imgSrc={pic5} name={'Antique Barrel'} />
        </Carousel>
      </div>
      <style jsx>{`
        .rec-dot {
          display: none;
        }
      `}</style>
    </>
  );
};

export default Slider;

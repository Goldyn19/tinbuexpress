import React from "react";
import Footer from "../component/Footer";
import pic1 from "../assets/images/hero.jpeg";
import pic2 from "../assets/images/about.png";
const About = () => {
  return (
    <div>
      <div
        className="h-[300px] w-full bg-cover relative  bg-center flex justify-center mx-auto items-center"
        style={{ backgroundImage: `url(${pic1})` }}
      >
        <h1 className="text-title-large text-verdigris">About Us</h1>
      </div>
      <div className="flex justify-center">
        <h1 className="text-title-large">Our Story</h1>
      </div>
      <div className="mx-5 ">
        <h1 className="text-blog">
          Founded in 2000, TinbuExpress began with a simple idea: to create a
          one-stop shop for high-quality, aesthetically pleasing home decor
          items that cater to every taste and need. What started as a small
          local business has grown into a beloved brand known for its
          exceptional customer service and a curated selection of home
          essentials.
        </h1>
      </div>
      <div className="md:flex mx-5 mt-16">
        <img src={pic2} alt="" className="md:w-1/2" />
        <div>
          <h1 className="flex justify-center text-title-large">
            What we offer
          </h1>
          <h1 className="text-blog mx-5">
            At TumbleExpress, we believe that every home should reflect the
            personality and lifestyle of its inhabitants. That’s why we offer a
            diverse array of products designed to inspire and delight:
            Furniture, Curtains, Beds & Bedsheets, Candles, Baby Cribs,
            Blankets, Mirrors, Stool, Shelf,Racks, WallPaper, etc.
          </h1>
          <h1 className="text-title-large flex justify-center mt-8">
            Our Commitment
          </h1>
          <h1 className="text-blog mx-5">
            We are committed to providing our customers with products that are
            not only beautiful but also durable and affordable. Each item in our
            store is carefully selected for its quality and craftsmanship,
            ensuring that it meets our high standards. Why Choose Us?
          </h1>
          <ul className="ml-5  list-disc">
            <li className="text-blog mx-5 ">
              Quality Products: We source our products from trusted
              manufacturers and artisans who share our passion for quality and
              design.
            </li>
            <li className="text-blog mx-5">
              Exceptional Service: Our friendly and knowledgeable staff are
              always here to help you find exactly what you’re looking for.
            </li>
            <li className="text-blog mx-5">
              Satisfaction Guaranteed: We stand behind every product we sell. If
              you’re not completely satisfied, we’ll make it right.
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-title-large flex justify-center mt-8">
        Visit Us Today
      </h1>
      <h1 className="text-blog mx-5 mb-14">
        Come visit our store in your Nigeria and USA or explore our online
        catalog to discover the perfect pieces for your home. Whether you’re
        redecorating a single room or furnishing an entire house, TumbleExpress
        is here to help you every step of the way.
      </h1>
      <Footer />
    </div>
  );
};

export default About;

import React from "react";
import pic1 from "../assets/images/hero.jpeg";
import LocationIcon from "../assets/icons/LocationIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import Footer from "../component/Footer";
const Contact = () => {
  return (
    <div>
      <div
        className="h-[300px] w-full bg-cover relative  bg-center "
        style={{ backgroundImage: `url(${pic1})` }}
      ></div>
      <div>
        <div className="md:flex md:mx-5 mb-5 mt-10 justify-center md:space-x-20">
          <div className="mx-5">
            <div className="bg-french-grey w-full md:w-[520px] md:px-16 p-8 pt-10 pb-24 rounded-lg">
              <h1 className="text-specials-large mb-8 ">Nigeria</h1>
              <h1 className="flex md:w-[350px] w-full">
                <div className="pt-2">
                  <LocationIcon />
                </div>
                <span className="text-contact text-[#323334]">
                  123 HNG Street, Nigeria
                </span>
              </h1>
              <h1 className="flex mt-16">
                <PhoneIcon />
                <span className="text-contact text-[#323334]">08070000000</span>
              </h1>
            </div>
            <div className="bg-french-grey w-full md:w-[520px] md:px-16 p-8 pt-10 mt-10 pb-24 rounded-lg">
              <h1 className="text-specials-large mb-8 ">USA</h1>
              <h1 className="flex  md:w-[350px] w-full">
                <div className="pt-2">
                  <LocationIcon />
                </div>
                <span className="text-contact text-[#323334]">
                  123 HNG.ng Street, Philladephia, USA
                </span>
              </h1>
              <h1 className="flex mt-16">
                <PhoneIcon />
                <span className="text-contact text-[#323334]">
                  +91 700000000
                </span>
              </h1>
            </div>
          </div>
          <div className="bg-white shadow-xl md:w-[770px] my-10 px-4 md:px-0 w-full md:pr-10 md:pl-20">
            <div className="mb-8">
              <h1 className="text-contact mb-5">Send Us Message</h1>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 text-body-large placeholder-cool-grey border border-verdigris rounded-full focus:outline-none"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-8">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 text-body-large placeholder-cool-grey border border-verdigris rounded-full focus:outline-none"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-8">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 text-body-large placeholder-cool-grey border border-verdigris rounded-full focus:outline-none"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-8 relative">
              <input
                type="search"
                id="default-search"
                className="block w-full px-4 py-32   text-body-large placeholder-cool-grey border border-verdigris rounded-lg focus:outline-none placeholder-top"
                placeholder="Message"
                required
              />
              <style jsx>{`
                .placeholder-top::placeholder {
                  position: absolute;
                  top: 15px; /* Adjust as needed */
                  left: 16px; /* Adjust as needed */
                  transform: translateY(-50%);
                }
              `}</style>
            </div>
            <button className="bg-verdigris text-white text-label-medium  mb-5 py-5 px-10 rounded-md" >
                Send
              </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

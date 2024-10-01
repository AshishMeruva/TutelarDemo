// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import First from "./Components/First/First";
import Story from "./Components/Story/Story";
import Title from "./Components/Title/Title";
import Services from "./Components/Services/Services";
import Partnerships from "./Components/Partnerships/Partnerships";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import Service from "./Components/Service/Service";
import YOECC from "./Components/YOECC/YOECC";
import Customers from "./Components/Customers/Customers";
import TTLWheel from "./Components/TTLWheel/TTLWheel";
import { Fade } from "react-reveal";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Fade center distance="20%" duration="500">
          <Loader />
        </Fade>
      ) : (
        <>
          <NavBar />
          <Fade top distance="20%" duration="1000">
            <First />
          </Fade>
          <Fade top distance="20%" duration="1500">
            <div className="container">
              <Title subTitle="Tutelar Tech Labs" Title="Our Story" />
              <Story />
            </div>
          </Fade>
          <Fade left distance="20%" duration="1500">
            <div className="container">
              <Title subTitle="What We Provide" Title="Our Services" />
              <Service />
            </div>
          </Fade>
          <Fade top distance="20%" duration="1500">
            <div className="">
              <Title
                subTitle="Companies we've partnered with"
                Title="Our Partnerships"
              />
              <Partnerships />
            </div>
          </Fade>
          <Fade right distance="20%" duration="1500">
            <div className="">
              <Title subTitle="Who we've worked with" Title="Our Customers" />
              <Customers />
            </div>
          </Fade>
          <Fade top distance="20%" duration="1500">
            <div className="container">
              <Title
                subTitle="Hear what others have to say about us"
                Title="Testimonials"
              />
              <Services />
            </div>
          </Fade>
          <Fade top distance="20%" duration="1500">
            <div className="container">
              <Title
                subTitle="Our Time to Live Services"
                Title="TTL Support Services"
              />
              <TTLWheel />
            </div>
          </Fade>
          <Fade top distance="20%" duration="1500">
            <div className="container">
              <Title subTitle="Together we learn and grow" Title="About Us" />
              <YOECC />
            </div>
          </Fade>
          <Fade bottom distance="20%" duration="1500">
            <div className="container">
              <Title subTitle="Get in Touch with us" Title="Contact Us" />
              <Contact />
            </div>
          </Fade>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;

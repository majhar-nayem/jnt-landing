import React from "react";
import Header from "../components/Header";
import {AiOutlineArrowRight} from "react-icons/ai";
import ClientsSlider from "../components/ClientsSlider";
import ShortDis from "../components/ShortDis";
import Service from "../components/Service";
import Projects from "../components/Projects";
import Teams from "../components/Teams";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="container">
      <Header />
      <div className="heading">
        <h1>We Build Stunning online Experiences for your Products</h1>
        <p>
          TeamHashcode is an agency that designs and develops Websites, Web
          Aplications and Mobile Apps
        </p>
        <div className="heading-btn">
          Discuss the Project{" "}
          <span style={{marginLeft: 4}}>
            <AiOutlineArrowRight />
          </span>
        </div>
      </div>

      <ClientsSlider />

      <ShortDis />
      <Service />
      <Projects
        link={"https://wholesalecart.com/"}
        img={"https://i.ytimg.com/vi/q35K2j0ohRU/maxresdefault.jpg"}
        title={"wholesalecart"}
        tools={["UI Design", "Website Development"]}
      />
      <Projects
        link={"https://shadhinmusic.com/"}
        img={
          "https://is5-ssl.mzstatic.com/image/thumb/PurpleSource115/v4/c0/2b/89/c02b8904-d418-c6e5-2c1f-0948894f2693/6b2526f2-d3b0-42e1-86c1-b485535abf31_Screenshot_6.jpg/750x750bb.jpeg"
        }
        title={"shadhinmusic"}
        tools={["UI Design", "Website Development", "Mobile App Development"]}
      />

      <Projects
        img={
          "https://shipbaz.com/_next/static/media/shipbaz_banner.b6e8cacd.png"
        }
        link="https://shipbaz.com"
        title={"shipbaz"}
        tools={["UI Design", "Website Development"]}
      />

      <Teams />

      <Footer />
    </div>
  );
}

export default Home;

import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import about from "../data/about";

function About() {
  return (
    <>
      <Header />
      <section className="title">
        <div className="container">
          <div className="intro">
            <img
              src={about.image}
              alt="About Me"
              className="photo"
              height="190"
              width="170"
            />
            <h2 className="featurette-heading fw-light">{about.heading}</h2>
            <div className="about-me">
              {about.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;

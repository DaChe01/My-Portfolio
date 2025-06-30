import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import education from "../data/education";

function Education() {
  return (
    <>
      <Header />
      <section className="title">
        <div className="container-education">
          <div className="intro">
          <img src="../public/images/jssstu.png" alt="alex photo" className="photo" height="160" width="190"></img>
            <h2 className="featurette-heading fw-bold">Education</h2>
            <div className="education-list">
              {education.map((item, i) => (
                <div key={i} className="mb-4">
                  <h4 className="fw-semibold">{item.degree}</h4>
                  <p className="text-muted">{item.institution} | {item.duration}</p>
                  <ul>
                    {item.details.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Education;

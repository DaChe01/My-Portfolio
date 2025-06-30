import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import works from "../data/works";

function Work() {
  return (
    <>
      <Header />
      <section className="title-work">
        <div className="container-work">
          <div className="intro">
            <img
              src="/images/works.jpg"
              alt="alex photo"
              className="photo"
              height="180"
              width="180"
            />
            <h3 className="featurette-heading fw-bold">My Works</h3>

            <div className="work">
              {works.map((item, i) => (
                <div key={i} className="mb-4">
                  <h5 className="featurette-heading fw-bold">{item.title}</h5>
                  <p>
                    <strong>Description:</strong> {item.description}
                  </p>
                  <ul>
                    {item.points.map((point, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: point }}></li>
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

export default Work;

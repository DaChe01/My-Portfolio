import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import skills from "../data/skills";

function Skill() {
  const renderStars = (rating) => {
    const full = "★".repeat(rating);
    const empty = "☆".repeat(5 - rating);
    return full + empty;
  };

  return (
    <>
      <Header />
      <section className="title">
        <div className="container-skills">
          <div className="intro">
            <h1 className="featurette-heading fw-bold">Skills</h1>
             <div className="skill-rating-grid">
              {skills.map((category, i) => (
                <div key={i} className="skill-card">
                  <h4 className="featurette-heading fw-light">{category.category}</h4>
                  {category.items.map((skill, j) => (
                    <p key={j}>
                      {skill.name}: {renderStars(skill.rating)}
                    </p>
                  ))}
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

export default Skill;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return(
    <>
      < Header />
        <section className="title">
        <div className="container-home">
            <div className="intro">
            <img src="../public/images/passport.jpg" alt="alex photo" className="photo" height="190" width="170">
            </img>
            < div className="home">
                <p>Hello! I'm</p>
                <h1 className="featurette-heading fw-bold">Khangembam Alex D Nelson</h1>
                <h2 className="featurette-heading fw-light">
                  Full Stack Developer | DevOps Enthusiast | Cloud Learner
                </h2>
                <p className="lead">
                  I build scalable web apps, automate cloud workflows, and enjoy solving real-world problems using React, Node.js, Docker, and Kubernetes.
                </p>
              </div>
            </div>
        </div>
        </section>
      < Footer />
    </>
  )
}

export default Home;

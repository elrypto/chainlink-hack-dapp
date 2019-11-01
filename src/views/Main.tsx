import React from "react";
import Header from "./Header";


export default function Main() {

  const attribStyle = {}
  
  return (
      <React.Fragment>
        <div id="home">
          <Header />
        <div className="landing">
          <div className="home-wrap">
            <div className="home-inner">
            </div>
          </div>
        </div>
      </div>
      <div className="caption text-center">
        <h1>PlasmaLink</h1>
        <h3>chainlink hack 2019</h3>
        <h4>Unified Mainnet access to plasma chains through ChainLink Oracles</h4>
        <a className="btn btn-outline-light btn-lg" href="/demo">Go To Live Demo</a>
        <a className="btn btn-outline-light btn-lg" href="www.youtube.com">Demo Video</a>
        <a className="btn btn-outline-light btn-lg" href="#overview">Overview of Approach</a>
      </div>
      <span><a href="" 
        onClick={() => {
          window.open("https://unsplash.com/photos/46dgbaKZTjk");
        }}
      >Photo credit: Axi Aimee</a></span>
      <div id="overview" className="offset">
        <div className="col-12 narrow text-center">
          <h1>plasma link</h1>
          <p className="lead">
            Plasma link is a ChainLink Q4 2019 hackathon submission that demonstates how the ChainLink platfom can be used to
            connect applications through smart contracts on the MainNet chain to sidechains. Often when developing layer 2 solutions (sidechains, plasmachains, etc.)
            it can feel like two disconnected applications that you are integrating. ChainLink offers the potential to bridge an application with its scalability solution through having
            ChainLink oracles in this PlasmaLink model connect to Plasma chains throught their smart contracts. Loom, one of the leading Plasma chain solutions
            is used for this demo.        
          </p>
          <a className="btn btn-secondary" 
            onClick={() => {
              location.assign('/video');
            }}
          >
         See Video Demo</a>
        </div>
      </div>
      </React.Fragment>
  );
}

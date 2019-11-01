import React from "react";
import Header from "./Header";
import { Button } from "antd";


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
        <h1>plasmaLink</h1>
        <h3>ChainLink Hack 2019</h3>
        <h4 className="lastMainText">Unified Mainnet access to plasma chains through ChainLink Oracles</h4>
        <a className="btn btn-outline-light btn-lg" href="/demo">Go To Live Demo</a>
        <a className="btn btn-outline-light btn-lg" target= "_blank" href="https://youtu.be/kX5lfAVR22I">Demo Video</a>
        <a className="btn btn-outline-light btn-lg" href="#overview">Overview of Approach</a>
      </div>
      <span><a href="" 
        onClick={() => {
          window.open("https://unsplash.com/@korpa");
        }}
      >Photo credit: korpa</a></span>
      <div id="overview" className="offset">
        <div className="col-12 narrow text-center">
          <h1>plasmaLink</h1>
          <p className="lead">
            plasmaLink is a ChainLink Q4 2019 hackathon submission that demonstates how the ChainLink platfom can be used to
            connect applications through smart contracts on the MainNet chain to sidechains. Often when developing layer 2 solutions (sidechains, plasmachains, etc.)
            it can feel like two disconnected applications that you are integrating. ChainLink offers the potential to bridge an application with its scalability solution through having
            ChainLink oracles in this PlasmaLink model connect to Plasma chains (via smart contracts). Loom, one of the leading Plasma chain solutions
            is used for this demo.        
          </p>
        
          <Button
            className="videoButton"
            type="dashed"
            onClick={ ()=> {
              window.open('https://youtu.be/kX5lfAVR22I');
            }}
          >
            See Demo Video
          </Button> 

        </div>
      </div>
      </React.Fragment>
  );
}

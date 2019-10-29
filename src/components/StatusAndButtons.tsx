import React from 'react'
import EthLogo from "./../img/ethereum.png";
import LoomLogo from "./../img/loom.png";
import ChainLinkLogo from "./../img/chainlink.png";
import { Button } from 'antd';

export default function StatusAndButtons() {
  return (
   
    <div className="flexRow seeMe">
    <div className="fullFlexRow">
        <div className="flexCol">
          <div className="boxHead flexRow">
            <div><img className="boxHeadLogo" src={ChainLinkLogo}/></div>
            <div>ChainLink</div>
          </div>
          <div className="boxBody seeMe">
            <div className="boxBodyStatus">c:</div>
            <div className="boxBodybuttons">
              <Button
                type="dashed"
              >
                Lets See
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="fullFlexRow">
        <div className="flexCol">
          <div className="boxHead flexRow">
            <div><img className="boxHeadLogo" src={EthLogo}/></div>
            <div>Ethereum Network</div>
          </div>
          <div className="boxBody seeMe">
            <div className="boxBodyStatus">address:</div>
            <div className="boxBodybuttons">
              <Button
                type="dashed"
              >
                Lets See
              </Button>
            </div>
          </div>
        </div>
      </div>
      

      <div className="fullFlexRow">
        <div className="flexCol">
          <div className="boxHead flexRow">
            <div><img className="boxHeadLogo" src={LoomLogo}/></div>
            <div>Loom Network</div>
          </div>
          <div className="boxBody seeMe">
            <div className="boxBodyStatus">l:</div>
            <div className="boxBodybuttons">
              <Button
                type="dashed"
              >
                Lets See
              </Button>
            </div>
          </div>
        </div>
      </div>
    

  </div>  
  )
}

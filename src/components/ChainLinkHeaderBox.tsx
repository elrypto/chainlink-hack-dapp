import React from 'react'
import ChainLinkLogo from "./../img/chainlink.png";
import { Button } from 'antd';

export default function ChainLinkHeaderBox() {
  return (
    <div className="fullFlexRow">
    <div className="flexCol">
      <div className="boxHead flexRow">
        <div><img className="boxHeadLogo" src={ChainLinkLogo}/></div>
        <div>ChainLink</div>
      </div>
      <div className="boxBody seeMe">
        <div className="boxBodyStatus"> 
          <div>contract address:</div>
          <div>contract balance:</div>
        </div>
        <div className="boxBodybuttons">
          <Button
            type="dashed"
          >
            Fund Contract
          </Button>
        </div>
      </div>
    </div>
  </div>
  )
}

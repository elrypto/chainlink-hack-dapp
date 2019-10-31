import React from 'react'
import ChainLinkLogo from "./../img/chainlink.png";
import { Button } from 'antd';
import { Store } from '../common/Store';

export default function ChainLinkHeaderBox() {
  const { state, dispatch } = React.useContext(Store);

  return (
    <div className="fullFlexRow">
    <div className="flexCol">
      <div className="boxHead flexRow">
        <div><img className="boxHeadLogo" src={ChainLinkLogo}/></div>
        <div>ChainLink</div>
      </div>
      <div className="boxBody seeMe">
        <div className="boxBodyStatus"> 
          <div>{state.chainLinkContractAddr}</div>
          <div>Link:</div>
        </div>
        <div className="boxBodybuttons">
          <Button
            type="dashed"
          >
            Add Value on Plasma Chain (via CL Contract)
          </Button>
          <Button
            type="dashed"
          >
            Read Plasma Chain Value (via CL Contract)
          </Button>
        </div>
      </div>
    </div>
  </div>
  )
}

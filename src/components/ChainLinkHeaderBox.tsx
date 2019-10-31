import React from 'react'
import ChainLinkLogo from "./../img/chainlink.png";
import { Button } from 'antd';
import { Store } from '../common/Store';

const whiteText = {
  color: 'white'
}

export default function ChainLinkHeaderBox() {
  const { state, dispatch } = React.useContext(Store);

  return (
    <div className="fullFlexRow">
    <div className="flexCol">
      <div className="boxHead flexRow">
        <div><img className="boxHeadLogo" src={ChainLinkLogo}/></div>
        <div>ChainLink Contract on Ropsten</div>
      </div>
      <div className="boxBody">
        <div className="boxBodyStatus"> 
          <div>  
            <a target="_blank" href={`https://ropsten.etherscan.io/address/${state.chainLinkContractAddr}`}> 
                  {state.chainLinkContractAddr}
              </a>
          </div>
          <div>Link: {state.contractLinkBalance}</div>
          <div style={whiteText}>.</div>
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

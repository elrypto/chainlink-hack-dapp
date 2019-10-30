import React from 'react'
import EthLogo from "./../img/ethereum.png";
import { Store } from '../common/Store';
import { Button } from 'antd';


export default function EthHeaderBox() {
  const { state } = React.useContext(Store);

  return (
    <div className="fullFlexRow">
        <div className="flexCol">
          <div className="boxHead flexRow">
            <div><img className="boxHeadLogo" src={EthLogo}/></div>
            <div>Ethereum Network</div>
          </div>
          <div className="boxBody seeMe">
            <div className="boxBodyStatus">
              <div>{state.selectedEthAddr}</div>
              <div>Eth: {state.ethBalance}</div>
            </div>
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
  )
}

import React from 'react'
import EthLogo from "./../img/ethereum.png";
import { Store } from '../common/Store';
import { Button } from 'antd';
import { transferOneLinkToken } from '../common/Actions';



const whiteText = {
  color: 'white'
}


export default function EthHeaderBox() {
  const { state } = React.useContext(Store);

  return (
    <div className="fullFlexRow">
        <div className="flexCol">
          <div className="boxHead flexRow">
            <div><img className="boxHeadLogo" src={EthLogo}/></div>
            <div>Ethereum Address on Ropsten</div>
          </div>
          <div className="boxBody">
            <div className="boxBodyStatus">
              <div>  <a target="_blank" href={`https://ropsten.etherscan.io/address/${state.selectedEthAddr}`}> 
                  {state.selectedEthAddr}
              </a>
           </div>
              <div className="flexRow">
                <div>Eth:</div>
                <div>{state.ethBalance}</div>
              </div>
              <div>Link: {state.userLinkBalance}</div>
              <div style={whiteText}>.</div>
            </div>
            <div className="boxBodybuttons">
              <Button
                type="dashed"
                onClick={ async()=>{
                    await transferOneLinkToken(state.ethWeb3, state.chainLinkTokenAddr, state.chainLinkContractAddr, state.selectedEthAddr);
                  }
                }
              >
                Fund ChainLink Contract With Link Tokens
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}

import React from 'react'
import EthLogo from "./../img/ethereum.png";
import LoomLogo from "./../img/loom.png";
import ChainLinkLogo from "./../img/chainlink.png";
import { Button } from 'antd';
import { Store, ActionType } from '../common/Store';
import Web3 from 'web3';




export default function StatusAndButtons() {
  
  const { state, dispatch } = React.useContext(Store);  
  //const [w3, setw3] = React.useState<Web3| null>(null);
  
  

  React.useEffect(() => {
    if (state.injectedProvider){
      console.log('have injected provider');
      
      if (state.injectedProvider.selectedAddress){
        console.log('setting selected addr', state.injectedProvider.selectedAddress);

        dispatch({
          type: ActionType.SET_SELECTED_ETH_ADDR,
          payload: state.injectedProvider.selectedAddress
        });

      }else{
        console.warn('dont have selected address, yet');
      }
    }
  }, [state.injectedProvider]);



  React.useEffect(() => {
    const fetchBalance = async() => {
      if (state.injectedProvider){
        let w3: Web3 = new Web3(state.injectedProvider);
        let b = await w3.eth.getBalance(state.selectedEthAddr);
        let converted = w3.utils.fromWei(b, 'ether');
        console.log("coverted:", converted);

        dispatch({
          type: ActionType.SET_ETH_BALANCE,
          payload: converted
        })

      }else{
        console.error('meta mask injected provider was expected here, but not available');
      }
    }

    if (state.selectedEthAddr){
      fetchBalance();
    }
  }, [state.selectedEthAddr])


  return ( 
    <div className="flexRow seeMe">
    <div className="fullFlexRow">
        <div className="flexCol">
          <div className="boxHead flexRow">
            <div><img className="boxHeadLogo" src={ChainLinkLogo}/></div>
            <div>ChainLink</div>
          </div>
          <div className="boxBody seeMe">
            <div className="boxBodyStatus"> 
              <div>contract:</div>
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

      <div className="fullFlexRow">
        <div className="flexCol">
          <div className="boxHead flexRow">
            <div><img className="boxHeadLogo" src={EthLogo}/></div>
            <div>Ethereum Network</div>
          </div>
          <div className="boxBody seeMe">
            <div className="boxBodyStatus">
              <div>a:{state.selectedEthAddr}</div>
              <div>b: {state.ethBalance}</div>
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

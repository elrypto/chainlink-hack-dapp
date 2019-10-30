import React from 'react'
import EthLogo from "./../img/ethereum.png";
import LoomLogo from "./../img/loom.png";
import ChainLinkLogo from "./../img/chainlink.png";
import { Button } from 'antd';
import { Store } from '../common/Store';
import Web3 from 'web3';


export default function StatusAndButtons() {
  const { state, dispatch } = React.useContext(Store);  
  //const [w3, setw3] = React.useState<Web3| null>(null);
  

  React.useEffect(() => {
    const fetchBalance = async() => {
     //const ethersWeb3 = new ethers.providers.Web3Provider(state.injectedProvider);
      //let b = await ethersWeb3.getBalance(state.selectedEthAddr);
      
     // ethersWeb3.getBalance(state.selectedEthAddr).then((balance) => {

        // balance is a BigNumber (in wei); format is as a sting (in ether)
      //  let etherString = ethers.utils.formatEther(balance);
    
     //   console.log("Balance: " + etherString);
   
      
      //console.log("getting balance for addres:", state.selectedEthAddr);
      //console.log("balance for address:", b);

      let w3 = new Web3(state.injectedProvider);
      let b = await w3.eth.getBalance(state.injectedProvider.selectedAddress);
      console.log("balance(w3):", b);
    }

     /* if (!w3){
        let tempW3 = new Web3(state.injectedProvider);
        setw3(tempW3);
      }
    }*/
    if (state.injectedProvider){
      console.log("have injected web3 now");
      console.log('eth address:', state.injectedProvider.selectedAddress);
     fetchBalance();
    }
  }, [state.injectedProvider]);

/*

  React.useEffect(() => {
    const fetchBalance = async() => {
      //let b = await state.etherWeb3.getBalance(state.selectedEthAddr);
      console.log("getting balance for addres:", state.selectedEthAddr);
      let b = await state.ethersWeb3.getBalance(state.selectedEthAddr);
      console.log("balance for address:", b);
    }

    if (state.ethersWeb3){
      console.log('have ethers');
      console.log(state.ethersWeb3);    
      fetchBalance();
    }
  }, [state.ethersWeb3]);
  
*/

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
            <div className="boxBodyStatus">
              <div>a:{state.selectedEthAddr}</div>
              <div>b:</div>
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

import React from 'react'
import { Store, ActionType } from '../common/Store';
import ChainLinkHeaderBox from './ChainLinkHeaderBox';
import EthHeaderBox from './EthHeaderBox';
import LoomHeaderBox from './LoomHeaderBox';
import useLoadInjectedWeb3State from './hooks/useLoadInjectedWeb3State';
import useLoadLoomIntoState from './hooks/useLoadLoomIntoState';
import { linkBalance } from '../common/Actions';
import EthHeaderBox2 from './EthHeaderBox2';
import ChainLinkHeaderBox2 from './ChainLinkHeaderBox2';



export default function StatusAndButtons() {
  const { state, dispatch } = React.useContext(Store);  
  useLoadInjectedWeb3State();
  useLoadLoomIntoState();


  /* load chain link balances */
  React.useEffect(() => {
    const fetchChainLinkBalances = async() => {
      let b1 = await linkBalance(state.ethWeb3, state.chainLinkTokenAddr, state.selectedEthAddr);

      let b2 = await linkBalance(state.ethWeb3, state.chainLinkTokenAddr, state.chainLinkContractAddr);

      dispatch({
        type: ActionType.SET_USER_LINK_BALANCE,
        payload: b1
      });

      dispatch({
        type: ActionType.SET_CONTRACT_LINK_BALANCE,
        payload: b2
      });

    }
    if (state.ethWeb3){
      fetchChainLinkBalances();
    }

  }, [state.ethWeb3]);

  
  return ( 
    <div className="flexRow">
   
      <EthHeaderBox2 />     

      <ChainLinkHeaderBox2 />

      <LoomHeaderBox />
           
    </div>  
  );
}

import React from 'react'
import { Store, ActionType } from '../common/Store';
import ChainLinkHeaderBox from './ChainLinkHeaderBox';
import EthHeaderBox from './EthHeaderBox';
import LoomHeaderBox from './LoomHeaderBox';
import useLoadInjectedWeb3State from './hooks/useLoadInjectedWeb3State';
import useLoadLoomIntoState from './hooks/useLoadLoomIntoState';



export default function StatusAndButtons() {
  const { state, dispatch } = React.useContext(Store);  
  useLoadInjectedWeb3State();
  useLoadLoomIntoState();

  
  return ( 
    <div className="flexRow seeMe">
   
      <ChainLinkHeaderBox />
        
      <EthHeaderBox />     

      <LoomHeaderBox />
           
    </div>  
  );
}

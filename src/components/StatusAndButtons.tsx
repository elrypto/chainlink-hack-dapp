import React from 'react'
import { Store } from '../common/Store';
import ChainLinkHeaderBox from './ChainLinkHeaderBox';
import EthHeaderBox from './EthHeaderBox';
import LoomHeaderBox from './LoomHeaderBox';
import useLoadInjectedWeb3State from './hooks/useLoadInjectedWeb3State';




export default function StatusAndButtons() {
  const { state, dispatch } = React.useContext(Store);  
  useLoadInjectedWeb3State();

  return ( 
    <div className="flexRow seeMe">
   
      <ChainLinkHeaderBox />
        
      <EthHeaderBox />     

      <LoomHeaderBox />
           
    </div>  
  );
}

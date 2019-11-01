import React from 'react'
import ChainLinkLogo from "./../img/chainlink.png";
import { Button } from 'antd';
import { Store } from '../common/Store';
import { readChainLinkContract, invokeChainLinkContract } from '../common/Actions';

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
          <div>  
            <a target="_blank" href={`https://ropsten.explorer.chain.link/job-runs?search=80fecd06d2e14c67a22cee5f9728e067`}> 
              ChainLink explorer for job runs (Ropsten)  
            </a>
          </div>
          
          <div>Link: {state.contractLinkBalance}</div>
          <div>ChainLink contract count: {state.contractSkillsCount}</div>
        </div>
        <div className="boxBodybuttons">
          
          <Button
            type="dashed"
            onClick={ async() => {
              let invokePath: string = 'https://plasmalink-api.herokuapp.com/createSkill';
              let parsePath: string = 'message';
              let oracleAddr: string = '0x1948C20CC492539968BB9b041F96D6556B4b7001';
              let jobId: string = '80fecd06d2e14c67a22cee5f9728e067';
       
              await invokeChainLinkContract(state.ethWeb3, invokePath, parsePath, state.chainLinkContractAddr, 
                                                      state.selectedEthAddr, oracleAddr, jobId, dispatch);
            }}
          >
            Invoke ChainLink to Add A Value on Loom Plasma Chain (via CL Contract)
          </Button>
       
          <Button
            type="dashed"
            onClick={ async() => {
              let invokePath: string = 'https://plasmalink-api.herokuapp.com/numberOfSkills';
              let parsePath: string = 'message';
              let oracleAddr: string = '0x1948C20CC492539968BB9b041F96D6556B4b7001';
              let jobId: string = '80fecd06d2e14c67a22cee5f9728e067';
       
              await invokeChainLinkContract(state.ethWeb3, invokePath, parsePath, state.chainLinkContractAddr, 
                                                      state.selectedEthAddr, oracleAddr, jobId, dispatch);
            }}
          >
            Invoke ChainLink to Read Value on Loom Plasma Chain (via CL Contract)
          </Button>
       
          <Button
            type="dashed"
            onClick={ async()=>{
              await readChainLinkContract(state.ethWeb3, state.chainLinkContractAddr, dispatch);
            }}
          >
            Read Plasma Chain Value (via CL Contract)
          </Button>
        </div>
      </div>
    </div>
  </div>
  )
}

import _ from "lodash";
import { toast } from "react-toastify";
import { ActionType, Store } from "./Store";
import Axios from "axios";
import { Dispatch, ILoomObject} from './Interfaces';
import Web3 from "web3";
import LinkToken from '../contracts/LinkToken.json';
import ChainLinkContract from '../contracts/MyHTTPContract.json'
import { transferToken, loadTokenContract } from "../utils/EthUtil";



const ONE_AS_WEI = '1000000000000000000';


export const notify = (msg: string, success?: boolean) => {
  !success ? toast(msg) : toast.success(msg, { autoClose: false });
};


export const notifyError = (msg: string) => {
  toast.error(msg, { autoClose: false });
};


export const notifyWarn = (msg: string) => {
  if (!toast.isActive("nfId")) {
    toast.warn(msg, { toastId: "nfId" });
  }
};

/*
  direct return
*/
export const rpcStatus = async():Promise<boolean> => {
  try{
    const result = await Axios.get('/api/v1/projects');
    return true;
  }catch (error){
    console.error("Could not connect to server on rpc check");
    return false;
  }
}


export const fetchSkills = async (loomObj: ILoomObject | any, dispatch: Dispatch) => {
  let skillsCount = await loomObj.instance.methods.numberOfSkills().call();
  let skills = [];

  for (let i = 0; i < skillsCount; i++) {
    let nextSkill = await loomObj.instance.methods.skillsList(i).call();
    skills.push(nextSkill);
  }
  dispatch({
    type: ActionType.SET_SKILLS_LIST,
    payload: skills
  });

  return skills;
};


export const readChainLinkContract = async(web3: Web3, chainLinkContractAddr: string, dispatch: Dispatch) => {
  let clContract = await loadTokenContract(web3, ChainLinkContract, chainLinkContractAddr);
  let returnedData = await clContract.methods.data().call();
  
  dispatch ({
    type: ActionType.SET_CONTRACT_SKILLS_COUNT,
    payload: returnedData
  })

}


export const invokeChainLinkContract = async (web3: Web3, urlToInvoke: string, responseParsePath: string,  
                                                              chainLinkContractAddr: string, userAddress: string,
                                                              oracleAddress: string, jobId: string,
                                                              dispatch: Dispatch) => {
  console.log('invokeChainLinkContract() with url:', urlToInvoke);
  console.log('invokeChainLinkContract() with path:', responseParsePath);

  let clContract = await loadTokenContract(web3, ChainLinkContract, chainLinkContractAddr);
  
  const tx = await clContract.methods.createRequestTo(
          oracleAddress,
          web3.utils.toHex(jobId),
          ONE_AS_WEI,
          urlToInvoke,
          responseParsePath,
          '100'
      )
      .send(
    {
      from: userAddress
    }
  )

  console.log('invoke tx hash:', tx);
}



export const transferOneLinkToken = async(web3: Web3, linkTokenContractAddr: string, toAddr: string, fromAddr: string) => {
  let hash = await transferToken(web3, LinkToken, linkTokenContractAddr, ONE_AS_WEI, toAddr, fromAddr);
  console.log('chainlink token transfer:', hash);
  notify('chainlink transfer successful in block: '+ hash.blockNumber);
}


export const linkBalance = async (web3: Web3, linkTokenContractAddr: string, addr: string) => {
  let c = loadTokenContract(web3, LinkToken, linkTokenContractAddr);
  let bal = await c.methods.balanceOf(addr).call();
  return web3.utils.fromWei(bal, 'ether')
}


export const addSkill = async (skillName: string, loomObj: ILoomObject| any) => {
  console.log("Action.addSkill()");

  try {
    const tx = await loomObj.instance.methods
      .addSkill(skillName)
      .send({ from: loomObj.currentUserAddress });

    doNotifyTx("addSkill", tx);
  } catch (error) {
    doNotifyError(error);
  }
};


const doNotifyError = (error: any) => {
  console.error("Error occured submitting transaction to sideChain:", error);
  notifyError("Error occured during transaction:" + error);
};


const doNotifyTx = (txName: string, txObj: any) => {
  console.log("sChain tx submitted - " + txName + ":", txObj);
  notify("tx submitted, hash:" + txObj.transactionHash);
};

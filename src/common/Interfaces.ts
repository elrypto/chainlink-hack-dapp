import Web3 from "web3";

/**
|--------------------------------------------------
|  Interfaces
|--------------------------------------------------
*/
export type Dispatch = React.Dispatch<IAction>;


export interface IAppState {
  ethWeb3: Web3| null;
  injectedProvider: any| null;
  selectedEthAddr: string;
  ethersWeb3: any;
  ethBalance: string;
  loomObj: ILoomObject | null;
  loomUserAddr: string;
  loomContractAddr: string;
  skills: Array<string>;
  chainLinkContractAddr: string;
  chainLinkTokenAddr: string;
}

export interface IAction {
  type: string; //enum from Store.ActionType
  payload: any;
}


export interface ILoomConnectionInfo {
  networkAlias: string;  // LOCAL_DEV | TEST | EXTDEV | PROD
  writeUrl: string;    // 'ws://127.0.0.1:46658/websocket';
  readUrl: string;    //  'ws://127.0.0.1:46658/queryws';
  networkId : string; //  'default' 
}

export interface ILoomObject {
  contract: any;
  client: any;
  privateKey: Uint8Array|any;
  publicKey: Uint8Array|any;
  currentUserAddress: string;
  web3: any;
  instance: any;
  currentNetwork: string;

  connectionInfo: ILoomConnectionInfo|any;
}


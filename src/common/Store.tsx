import React from "react";
import {
  IAction,
  IAppState
} from "./Interfaces";


export enum ActionType {
  SET_ETHWEB3 = "plasmalink/ETHWEB3",
  SET_INJECTED_PROVIDER = "plasmalink/SET_INJECTED_PROVIDER",
  SET_SELECTED_ETH_ADDR = "plasmalink/SET_SELECTED_ETH_ADDR",
  SET_ETH_BALANCE = "plasmalink/SET_ETH_BALANCE",
  SET_LOOM_OBJ = "plasmalink/SET_LOOM_OBJ",
  SET_LOOM_USER_ADDR = "plasmalink/SET_LOOM_USER_ADDR",
  SET_SKILLS_LIST = "plasmalink/SKILLS_LIST",
}


const initialState: IAppState = {
  ethWeb3: null,
  injectedProvider: null,
  selectedEthAddr: '--',
  ethersWeb3: null,
  ethBalance: '--',
  loomObj: null,
  loomUserAddr: '--',
  loomContractAddr: '0xf9385B9F7AB544038839c293b975E83C07beed17',
  skills: [],
  chainLinkContractAddr: '0x8Ba7582B2113e35AB17f52875a927e02500A0d7D',
  chainLinkTokenAddr: '0x20fe562d797a42dcb3399062ae9546cd06f63280'
};


export const Store = React.createContext<IAppState | any>(initialState);

function reducer(state: IAppState, action: IAction | any): IAppState {
  switch (action.type) {
    case ActionType.SET_ETHWEB3:
      return {
        ...state, ethWeb3: action.payload
      }
    case ActionType.SET_INJECTED_PROVIDER:
      return {
        ...state, injectedProvider: action.payload
      }
    case ActionType.SET_SELECTED_ETH_ADDR:
      return {
        ...state, selectedEthAddr: action.payload
      }
    case ActionType.SET_ETH_BALANCE:
      return {
        ...state, ethBalance: action.payload
      }
    case ActionType.SET_LOOM_OBJ:
      return {
        ...state, loomObj: action.payload
      }
    case ActionType.SET_LOOM_USER_ADDR:
      return {
        ...state, loomUserAddr: action.payload
      }
    case ActionType.SET_SKILLS_LIST:
      return {
        ...state, skills: action.payload
      }
    default:
      return state;
  }
}


export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}


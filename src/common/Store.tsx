import React from "react";
import {
  IAction,
  IAppState
} from "./Interfaces";


export enum ActionType {
  SET_ETHWEB3 = "plasmalink/ETHWEB3",
  SET_INJECTED_PROVIDER = "plasmalink/SET_INJECTED_PROVIDER",
  SET_SELECTED_ETH_ADDR = "plasmalink/SET_SELECTED_ETH_ADDR",
  SET_ETHERS_WEB3 = "plasmalink/SET_ETHERS_WEB3"
}


const initialState: IAppState = {
  ethWeb3: null,
  injectedProvider: null,
  selectedEthAddr: '',
  ethersWeb3: null
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
    case ActionType.SET_ETHERS_WEB3:
      return {
        ...state, ethersWeb3: action.payload
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


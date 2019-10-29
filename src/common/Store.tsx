import React from "react";
import {
  IAction,
  IAppState
} from "./Interfaces";


export enum ActionType {
  SET_ETHWEB3 = "plasmalink/ETHWEB3",
}


const initialState: IAppState = {
  ethWeb3: null
    /*users: [],*/
};


export const Store = React.createContext<IAppState | any>(initialState);

function reducer(state: IAppState, action: IAction | any): IAppState {
  switch (action.type) {
    case ActionType.SET_ETHWEB3:
      return {
        ...state, ethWeb3: action.payload
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


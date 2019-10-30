import React from 'react';
import { Store, ActionType } from '../../common/Store';



export default function useInjectedWeb3() {
    const { dispatch } = React.useContext(Store);
    let provider;

    React.useEffect(() => {
        if (typeof window.ethereum !== 'undefined'
            || (typeof window.web3 !== 'undefined')) {

            // Web3 browser user detected. You can now use the provider.
            provider = window['ethereum'] || window.web3.currentProvider;
            //let newWeb3 = new Web3(provider);

            dispatch({
                type: ActionType.SET_INJECTED_PROVIDER,
                payload: provider
            })

            dispatch({
                type: ActionType.SET_SELECTED_ETH_ADDR,
                payload: provider.selectedAddress
            })

           /*

            dispatch({
                type: ActionType.SET_ETHERS_WEB3,
                payload: ethersWeb3
            })*/
        }
    }, []);

    return provider;
}


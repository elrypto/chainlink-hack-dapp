import React from 'react';
import { Store, ActionType } from '../../common/Store';



/*


MetaMask: MetaMask will soon stop reloading pages on network change.
If you rely upon this behavior, add a 'networkChanged' event handler to trigger the reload manually: https://metamask.github.io/metamask-docs/API_Reference/Ethereum_Provider#ethereum.on(eventname%2C-callback)
Set 'ethereum.autoRefreshOnNetworkChange' to 'false' to silence this warning: https://metamask.github.io/metamask-docs/API_Reference/Ethereum_Provider#ethereum.autorefreshonnetworkchange'



*/



export default function useInjectedWeb3() {
    const { dispatch } = React.useContext(Store);
    let provider;

    React.useEffect(() => {
        if (typeof window.ethereum !== 'undefined'
            || (typeof window.web3 !== 'undefined')) {

            
            // Web3 browser user detected. You can now use the provider.
            provider = window['ethereum'] || window.web3.currentProvider;
            //let newWeb3 = new Web3(provider);

            provider.enable();

            console.log('network:', provider.networkVersion);
            console.log('selectedAddress:', provider.selectedAddress);
            console.log('is metamask:', provider.isMetaMask);
             
            console.log('legacyprovider:', window.web3.currentProvider);

            dispatch({
                type: ActionType.SET_INJECTED_PROVIDER,
                payload: provider
            })
        }
    }, [window['ethereum']]);

    return provider;
}


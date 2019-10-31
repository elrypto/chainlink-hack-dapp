import { notifyError } from "../common/Actions";

export function toEth(web3, weiVal) {
  return web3.utils.fromWei(weiVal, 'ether');
}

export function toWei(web3, ethVal) {
  return web3.utils.toWei(ethVal, 'ether');
}


export async function transferToken(web3, contractJson, contractAddr, amount, toAddr, fromAddr){
  console.log('in transferToken() web3:', web3);
  console.log('in transferToken() contractJson:', contractJson);
  console.log('in transferToken() contract addr:',  contractAddr);
  console.log('in transferToken() amount :', amount);
  console.log('in transferToken() toAddr:', toAddr);
  console.log('in transferToken() fromAddr:', fromAddr);


  let contract =  new web3.eth.Contract(contractJson.abi, contractAddr); 
  console.log("have contract:", contract);

  try{
    let hash = await contract.methods.transfer(toAddr, amount).send(
          {
            from: fromAddr
          }
    )
    return hash;

  }catch(e){
    console.error(e);
    notifyError('Error during transfer:', e.message);
  }
}
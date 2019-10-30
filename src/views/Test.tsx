import React from 'react'
import StatusAndButtons from '../components/StatusAndButtons'
import useInjectedWeb3 from '../components/chainstate/useInjectedWeb3';


export default function Test() {
  useInjectedWeb3();

  return (
    <div className="offset">
      <div className="jumbotron">
        <div className="narrow">
          <div className="col-12">
            <h3 className="heading text-center">demo</h3>
            <div className="heading-underline"></div>
            
                <StatusAndButtons />
          </div>
        </div>
      </div>
    </div>
  )
}

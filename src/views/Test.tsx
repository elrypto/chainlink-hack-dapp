import React from 'react'
import StatusAndButtons from '../components/StatusAndButtons'
import useInjectedWeb3 from '../components/hooks/useInjectedWeb3';


export default function Test() {
  useInjectedWeb3();

  return (
    <div className="offset">
      <div className="jumbotron">
        <div className="narrow">
          <div className="col-12">
            <h3 className="heading text-center">demo</h3>
            <p className="heading text-center">Invoking chainlink contract and adapter to read and write to a plasmachain contract</p>
            <div className="heading-underline"></div>
            
                <StatusAndButtons />
          </div>
        </div>
      </div>
    </div>
  )
}

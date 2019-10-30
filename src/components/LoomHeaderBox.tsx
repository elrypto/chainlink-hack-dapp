import React from 'react';
import LoomLogo from "./../img/loom.png";
import { Button } from 'antd';


export default function LoomHeaderBox() {
  return (
    <div className="fullFlexRow">
        <div className="flexCol">
          <div className="boxHead flexRow">
            <div><img className="boxHeadLogo" src={LoomLogo}/></div>
            <div>Loom Network</div>
          </div>
          <div className="boxBody seeMe">
            <div className="boxBodyStatus">
              <div>
                token balance:
              </div>
              <div>
                gateway balance:
              </div>
              <div>
                data field:
              </div>
            </div>
            <div className="boxBodybuttons">
              <Button
                type="dashed"
              >
                Lets See
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}

import React from 'react';
import useLoomWithConfig from "../chainstate/useLoomWithConfig";
import { Store, ActionType } from '../../common/Store';
import { ILoomObject } from '../../common/Interfaces';

export default function useLoadLoomIntoState(){
  const { dispatch } = React.useContext(Store);
  const loomObj = useLoomWithConfig();

  React.useEffect(() => {
    if (loomObj){
      console.log("have loom obj for extdev", loomObj);
      
      dispatch({
        type: ActionType.SET_LOOM_OBJ,
        payload: loomObj
      });

      /*  if (loomObj && loomObj.currentUserAddr){
        dispatch({
          type: ActionType.SET_LOOM_USER_ADDR,
          payload: currentUserAddr
        })
      }
      */
    }
  }, [loomObj]);

}
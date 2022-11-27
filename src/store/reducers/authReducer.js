import * as actions from './../actions/actionTypes';
import {modifyAuthErrorMsg} from './../../helpers/errorMsgHandler';

const initialState = {
  loading:false,
  error:null
};

const authReducer = (state=initialState, {type, payload}) => {
  switch (type){
    case actions.SIGN_UP_START:
      case actions.SIGN_IN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

      case actions.SIGN_UP_SUCCESS:
      case actions.SIGN_IN_SUCCESS:
        return {
          ...state,
          loading: false,
          error: false,
        };

        case actions.SIGN_UP_FAIL:
        case actions.SIGN_IN_FAIL:
          return {
            ...state,
            loading: false,
            error: modifyAuthErrorMsg(payload)
          };

          default:
            return state;
  }
}

export default authReducer
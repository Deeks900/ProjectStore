import * as actions from './../actions/actionTypes';
import {modifyAuthErrorMsg} from './../../helpers/errorMsgHandler';

const initialState = {
  loading:false,
  error:null
};

const signUpReducer = (state=initialState, {type, payload}) => {
    switch (type){
      case actions.CLEAR_AUTH_PROFILE_STATE:
        return {
          initialState
        };
      case actions.SIGN_UP_START:
        return {
          ...state,
          loading: true,
          error: null,
        };
  
        case actions.SIGN_UP_SUCCESS:
          return {
            ...state,
            loading: false,
            error: false,
          };
  
          case actions.SIGN_UP_FAIL:
            return {
              ...state,
              loading: false,
              error: modifyAuthErrorMsg(payload)
            };
  
            default:
              return state;
    }
  }
  
  export default signUpReducer
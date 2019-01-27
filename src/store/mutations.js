import {RECEIVE_PETSINFO} from './mutations-type'
export default {
  [RECEIVE_PETSINFO](state,{petsInfo}){
    state.petsInfo = petsInfo
  }
}

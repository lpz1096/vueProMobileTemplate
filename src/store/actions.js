import {RECEIVE_PETSINFO} from './mutations-type'

export default {
  receive_petsinfo({commit},{Money,NickName}){
    let petsInfo ={
      Money,
      NickName
    }
    commit(RECEIVE_PETSINFO,{petsInfo})
  },
}

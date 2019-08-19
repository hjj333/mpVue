import {RECEIVE_LIST} from './mutation-types'
import data from '../datas/list-data'
export default {
    getList ({ commit }) {
        commit (RECEIVE_LIST, data)
    }
}
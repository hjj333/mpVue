import { RECEIVE_LIST, RECEIVE_MOVIES } from './mutation-types'
import data from '../datas/list-data'
export default {
    getList({ commit }) {
        commit(RECEIVE_LIST, data)
    },
    getMovies({ commit }, data) {
        commit(RECEIVE_MOVIES, data)
    }
}
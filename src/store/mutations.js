import { RECEIVE_LIST, RECEIVE_MOVIES } from './mutation-types'
export default {
    [RECEIVE_LIST] (state, { list_data }) {
        state.list = list_data
    },
    [RECEIVE_MOVIES] (state, data) {
        state.movies = data
    }
}
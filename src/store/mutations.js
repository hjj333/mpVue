import { RECEIVE_LIST } from './mutation-types'
export default {
    [RECEIVE_LIST] (state, { list_data }) {
        state.list = list_data
    }
}
import{
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types'
import _ from 'lodash'

export default (state = {}, action ) => 
{
    switch(action.type)
    {
        case EDIT_STREAM:
        case CREATE_STREAM:
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload }
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case DELETE_STREAM:
            return _.omit(state, action.payload)
        default:
            return state
    }
}
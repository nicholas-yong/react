import { CombinedState, combineReducers  } from "redux";
import postReducer from './postReducer';

//Place reducers inside here.
export default combineReducers({
    post: postReducer
});
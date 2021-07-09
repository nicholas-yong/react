import { CombinedState, combineReducers  } from "redux";
import postReducer from './postReducer';
import userReducer from "./userReducer";

//Place reducers inside here.
export default combineReducers({
    post: postReducer,
    users: userReducer
});
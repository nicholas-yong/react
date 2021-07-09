import jsonplaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) =>
{
    //Need to make sure we dispatch the result of an action creator
    await dispatch(fetchPosts());
    _.chain(getState().post)
        .map('userId')
        .uniq()
        .forEach( id => dispatch(fetchUser(id)))
        .value()
};

export const fetchPosts = () =>

    async dispatch =>
    {
        const response = await jsonplaceholder.get('./posts');
        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    }

export const fetchUser = userId => async dispatch =>
{
    const repsonse = await jsonplaceholder.get(`./users/${userId}`)
    dispatch({ type: 'FETCH_USER', payload: repsonse.data })
}


//Memoized Version
/* const _fetchUser = _.memoize( async(id, dispatch) =>
{
    const repsonse = await jsonplaceholder.get(`./users/${id}`)
    dispatch({ type: 'FETCH_USER', payload: repsonse.data })
}) */
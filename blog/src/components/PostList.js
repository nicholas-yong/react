import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../Actions';

class PostList extends React.Component
{
    componentDidMount()
    {
        this.props.fetchPosts();
    }

    render()
    {
        return  <div>PostList</div>
    }
}



export default connect(undefined, { fetchPosts }) ( PostList )
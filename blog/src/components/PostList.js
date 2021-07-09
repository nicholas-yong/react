import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../Actions';
import UserHeader from './UserHeader';

class PostList extends React.Component
{
    componentDidMount()
    {
        this.props.fetchPostsAndUsers();
    }

    buildList()
    {
        return this.props.posts.map( item =>
            {
                return(
                    <div className = "item" key = {item.id}>
                            <i className = "large middle aligned icon user"/>
                            <div className = "content">
                                <div className = "description">
                                    <h2>{item.title}</h2>
                                    <p>{item.title}</p>
                                </div>
                                <UserHeader userId = {item.userId}/>
                            </div>
                    </div>
                );
            }
        )
    }

    render()
    {
        return  <div>{this.buildList()}</div>
    }
}

const mapStateToProps = state =>
{
    return { posts: state.post }
}



export default connect(mapStateToProps, { fetchPostsAndUsers }) ( PostList )
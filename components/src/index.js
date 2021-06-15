import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () =>
{
    return (
        <div className = "ui container comments">
          <ApprovalCard>
               <div>
               <h4>Warning!</h4>
               Are you sure you want to do this?
               </div>
          </ApprovalCard>
           <ApprovalCard>
               <CommentDetail 
                    author = "Sam" 
                    timeAgo = "Today at 4:45PM" 
                    comment = "Long Ago" 
                    avatarImage = {faker.image.image()}/>
          </ApprovalCard>
          <ApprovalCard>
               <CommentDetail 
                    author = "Alex"  
                    timeAgo = "Today at 4:50PM" 
                    comment = "The Four" 
                    avatarImage = {faker.image.image()}/>
          </ApprovalCard>
          <ApprovalCard>
               <CommentDetail 
                    author = "Jane" 
                    timeAgo = "Today at 4:55PM"  
                    comment = "Nations Lived in Harmony" 
                    avatarImage = {faker.image.image()}/>
          </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
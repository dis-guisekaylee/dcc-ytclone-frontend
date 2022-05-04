import React from 'react';

const Comment = ({comment}) => {
    return ( 

        <div>
        {comment.text}, {comment.date}, {comment.likes}, {comment.dislikes}, {comment.replies.map((reply) => <p>{reply.text}</p>)}
        </div>
      

    );
}
 
export default Comment;
import React from 'react';

const Comment = ({comment}) => {
    return ( 

        <li>
        {comment.text}, {comment.date}, {comment.likes}, {comment.dislikes}
        </li>
      

    );
}
 
export default Comment;
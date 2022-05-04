import axios from 'axios';
import React from 'react';
import useForm from '../useForm';

const CommentForm = ({setComments}) => {

    const { formValues, handleChange, handleSubmit } = useForm(postComment);

    async function postComment() {
        let postFormData = {...formValues, videoID:"2435ljg"};
        console.log(postFormData);
        await axios.post("http://localhost:3003/api/comments", postFormData).then( res => setComments(res.data) );
    };

    return ( 
        <div>
            <form onSubmit={ e => handleSubmit(e)}>
                <input name="text" value={ formValues.value } onChange={ e => handleChange(e)} />
                <input type="submit" value="Submit" />
            </form>
        </div>
     );
}
 
export default CommentForm;
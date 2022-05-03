import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [comments, setComments] = useState([]);


  async function makeGetRequest() {
    let response = await axios.get(`http://localhost:3003/api/comments`);
    setComments(response.data);
  }


  useEffect(() => {
    makeGetRequest();
  }, []);

  return (
      <div><ul>
        {comments.map((comment) => <li key={comment._id}>{comment.text}</li>)}
        </ul></div>
      // <h1>Comments on Video "53dghhfg"</h1>
      // <button onClick={this.makeGetRequest()}>View Comments</button>

  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentMapper from "./components/CommentMapper";
import CommentForm from "./components/CommentForm";

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
      <div>
        <CommentForm setComments={setComments} />
        <CommentMapper comments={comments} />
      </div>
      // <h1>Comments on Video "53dghhfg"</h1>
      // <button onClick={this.makeGetRequest()}>View Comments</button>

  );
}

export default App;


import "./App.css";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001", { transports: ["websocket"] });

const App = () => {

  const [markdownData, setMarkdownData] = useState("");
  const [html, setHtml] = useState("");

  useEffect(() => {
    socket.emit("markdownData", markdownData);

    socket.on("html", (data) => {
      setHtml(data);
    });
  }, [markdownData]);

  

  const handleClientInputChange = (event) => {
    const newMarkdowndata = event.target.value;
    setMarkdownData(newMarkdowndata);
  };

  return (

  
    <div>
      <div className="container">
        <div className="textarea-container">
          <h2>Markdown </h2>
          <textarea
            className="textarea"
            value={markdownData}
            onChange={handleClientInputChange}
          ></textarea>
        </div>
        <div className="preview-container">
          <h2>Preview</h2>
          <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default App;

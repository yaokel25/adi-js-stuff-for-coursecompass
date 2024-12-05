import React, { useState } from "react";
import '../styling/Edit.css';

function Edit() {
  const [title, setTitle] = useState("");
  const [standards, setStandards] = useState("");
  const [details, setDetails] = useState("");

  const handleSave = () => {
    alert(`Title: ${title}\nStandards: ${standards}\nDetails: ${details}`);
  };

  return (
    <div className="container">
      <h1>Lesson Plan Editor</h1>
      <div className="section">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
      </div>
      <div className="section">
        <label htmlFor="standards">Standards:</label>
        <textarea
          id="standards"
          value={standards}
          onChange={(e) => setStandards(e.target.value)}
          rows="5"
          className="textarea"
        ></textarea>
      </div>
      <div className="section">
        <label>Details:</label>
        <div
          contentEditable
          className="editor"
          onInput={(e) => setDetails(e.target.innerHTML)}
        >
          Type details here...
        </div>
      </div>
      <button className="button" onClick={handleSave}>
        Save Lesson Plan
      </button>
    </div>
  );
}

export default Edit;

import React, { useState } from 'react';
//import DOMPurify from 'dompurify'; // Optional: for sanitizing input
//import './HtmlEditor.css'; // Import the CSS file

const HtmlEditor = () => {
  const [htmlCode, setHtmlCode] = useState('');

  // Handle changes in the textarea
  const handleChange = (e) => {
    setHtmlCode(e.target.value);
  };

  return (
    <div className="html-editor-container">
      <h2>HTML Renderer</h2>
      <textarea
        className="html-input"
        value={htmlCode}
        onChange={handleChange}
        placeholder="Enter your HTML code here..."
      />
      <div className="rendered-output">
        <h3>Rendered Output:</h3>
        <div
          className="html-preview"
          //dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlCode) }} // Sanitize to avoid XSS attacks
        />
      </div>
    </div>
  );
};

export default HtmlEditor;

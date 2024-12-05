const { useState } = React;

function Edit() {
  const [title, setTitle] = useState("");
  const [standards, setStandards] = useState("");
  const [details, setDetails] = useState("");

  const handleSave = () => {
    alert(`Title: ${title}\nStandards: ${standards}\nDetails: ${details}`);
  };

  return (
    <div>
      <h1>Unit Overview Editor</h1>
      <div className="section">
        <label>Title:</label><br />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />
      </div>
      <div className="section">
        <label>Standards:</label><br />
        <textarea
          value={standards}
          onChange={(e) => setStandards(e.target.value)}
          rows="5"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        ></textarea>
      </div>
      <div className="section">
        <label>Details:</label><br />
        <div
          contentEditable
          className="editor"
          onInput={(e) => setDetails(e.target.innerHTML)}
        >
          Type details here...
        </div>
      </div>
      <button className="button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default Edit;

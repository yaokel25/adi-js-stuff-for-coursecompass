import React, { useState } from "react";
import JoditEditor from "jodit-react";
import "../styling/EditCourse.css";

const LessonPlanPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: "Title",
    duration: "2021-04-05 to 2021-04-09",
    standards: ["Standard 1", "Standard 2", "Standard 3"],
    learningObjective: "Objectives",
    essentialQuestion: "Essential question",
    lessonDescription: "Unit description",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const config = {
    readonly: !isEditing, 
    toolbarButtonSize: "xsmall",
    toolbarSticky: false,
    toolbarStickyOffset: null,
  };

  return (
    <div className="lesson-plan-container">
      <h1>Unit Overview</h1>

      <button
        onClick={() => setIsEditing(!isEditing)}
        className="toggle-button"
        aria-label={isEditing ? "Switch to view mode" : "Switch to edit mode"}
      >
        {isEditing ? "View Mode" : "Edit Mode"}
      </button>

      {/* Unit Title */}
      <div className="field-container">
        <label htmlFor="title">Unit:</label>
        {isEditing ? (
          <input
            id="title"
            type="text"
            value={formData.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            aria-label="Enter unit title"
          />
        ) : (
          <p>{formData.title}</p>
        )}
      </div>

      {/* Duration and Standards side by side */}
      <div className="two-fields">
        {/* Duration */}
        <div className="field-container">
          <label htmlFor="duration">Duration:</label>
          {isEditing ? (
            <input
              id="duration"
              type="text"
              value={formData.duration}
              onChange={(e) => handleInputChange("duration", e.target.value)}
              aria-label="Enter duration"
            />
          ) : (
            <p>{formData.duration}</p>
          )}
        </div>

        {/* Standards */}
        <div className="field-container">
          <label htmlFor="standards">Standards:</label>
          {isEditing ? (
            <textarea
              id="standards"
              value={formData.standards.join("\n")}
              onChange={(e) =>
                handleInputChange("standards", e.target.value.split("\n"))
              }
              aria-label="Enter standards"
            />
          ) : (
            <ul>
              {formData.standards.map((standard, index) => (
                <li key={index}>{standard}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Learning Objective */}
      <div className="field-container">
        <label htmlFor="learning-objective">Integrated Learning Objective:</label>
        {isEditing ? (
          <JoditEditor
            id="learning-objective"
            value={formData.learningObjective}
            config={config}
            onBlur={(newContent) =>
              handleInputChange("learningObjective", newContent)
            }
            aria-label="Edit integrated learning objective"
          />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: formData.learningObjective }} />
        )}
      </div>

      {/* Essential Question */}
      <div className="field-container">
        <label htmlFor="essential-question">Inclusive Essential Question:</label>
        {isEditing ? (
          <JoditEditor
            id="essential-question"
            value={formData.essentialQuestion}
            config={config}
            onBlur={(newContent) =>
              handleInputChange("essentialQuestion", newContent)
            }
            aria-label="Edit essential question"
          />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: formData.essentialQuestion }} />
        )}
      </div>

      {/* Lesson Description */}
      <div className="field-container">
        <label htmlFor="lesson-description">Lesson Description:</label>
        {isEditing ? (
          <JoditEditor
            id="lesson-description"
            value={formData.lessonDescription}
            config={config}
            onBlur={(newContent) =>
              handleInputChange("lessonDescription", newContent)
            }
            aria-label="Edit lesson description"
          />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: formData.lessonDescription }} />
        )}
      </div>
    </div>
  );
};

export default LessonPlanPage;

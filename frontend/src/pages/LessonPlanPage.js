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
    readonly: false,
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

      {/* Duration and Standards remain vertical */}
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

      {/* Essential Question and Lesson Description side by side */}
      <div className="two-fields">
        {/* Essential Question */}
        <div className="field-container">
          <label htmlFor="essential-question">Inclusive Essential Question:</label>
          {isEditing ? (
            <JoditEditor
              value={formData.essentialQuestion}
              config={config}
              onBlur={(newContent) =>
                handleInputChange("essentialQuestion", newContent)
              }
            />
          ) : (
            <p>{formData.essentialQuestion}</p>
          )}
        </div>

        {/* Lesson Description */}
        <div className="field-container">
          <label htmlFor="lesson-description">Lesson Description:</label>
          {isEditing ? (
            <JoditEditor
              value={formData.lessonDescription}
              config={config}
              onBlur={(newContent) =>
                handleInputChange("lessonDescription", newContent)
              }
            />
          ) : (
            <p>{formData.lessonDescription}</p>
          )}
        </div>
      </div>

      {/* Integrated Learning Objective as a plain textbox */}
      <div className="field-container">
        <label htmlFor="learning-objective">Integrated Learning Objective:</label>
        {isEditing ? (
          <input
            id="learning-objective"
            type="text"
            value={formData.learningObjective}
            onChange={(e) =>
              handleInputChange("learningObjective", e.target.value)
            }
            aria-label="Edit learning objective"
          />
        ) : (
          <p>{formData.learningObjective}</p>
        )}
      </div>
    </div>
  );
};

export default LessonPlanPage;

import React, { useState } from "react";
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

      {/* Duration and Standards*/}
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

      {/* Essential Question and Lesson Description */}
      <div className="two-fields">
        {/* Essential Question */}
        <div className="field-container">
          <label htmlFor="essential-question">Inclusive Essential Question:</label>
          {isEditing ? (
            <textarea
              id="essential-question"
              value={formData.essentialQuestion}
              onChange={(e) =>
                handleInputChange("essentialQuestion", e.target.value)
              }
              aria-label="Edit essential question"
            />
          ) : (
            <p>{formData.essentialQuestion}</p>
          )}
        </div>

        {/* Lesson Description */}
        <div className="field-container">
          <label htmlFor="lesson-description">Lesson Description:</label>
          {isEditing ? (
            <textarea
              id="lesson-description"
              value={formData.lessonDescription}
              onChange={(e) =>
                handleInputChange("lessonDescription", e.target.value)
              }
              aria-label="Edit lesson description"
            />
          ) : (
            <p>{formData.lessonDescription}</p>
          )}
        </div>
      </div>

      {/* Integrated Learning Objective*/}
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

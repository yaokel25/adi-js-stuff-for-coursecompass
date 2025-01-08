import '../styling/EditCourse.css';
import JoditEditor from "jodit-react";

function EditCourse() {
    return (
      <div className="EditCourse">
        <header className="EditCourse-header">
            <form>
                <label for="course-title">Course Title:</label>
                <input type="textarea" id="course-title" className="course-title" value="John" />
            </form>
        </header>
      </div>
    );
  }
  
  export default EditCourse;
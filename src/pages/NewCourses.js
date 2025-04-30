import React, { useState } from "react";
import "./NewCourses.css";

function NewCourses() {
  const [formData, setFormData] = useState({
    courseCode: "",
    courseTitle: "",
    description: "",
    instructor: "",
    credits: "",
    startDate: "",
    endDate: "",
    category: "core",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.courseCode.trim()) {
      newErrors.courseCode = "Course code is required";
    }

    if (!formData.courseTitle.trim()) {
      newErrors.courseTitle = "Course title is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.instructor.trim()) {
      newErrors.instructor = "Instructor name is required";
    }

    if (!formData.credits) {
      newErrors.credits = "Credits are required";
    } else if (isNaN(formData.credits) || parseInt(formData.credits) <= 0) {
      newErrors.credits = "Credits must be a positive number";
    }

    if (!formData.startDate) {
      newErrors.startDate = "Start date is required";
    }

    if (!formData.endDate) {
      newErrors.endDate = "End date is required";
    } else if (
      formData.startDate &&
      new Date(formData.endDate) <= new Date(formData.startDate)
    ) {
      newErrors.endDate = "End date must be after start date";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after successful submission
      setFormData({
        courseCode: "",
        courseTitle: "",
        description: "",
        instructor: "",
        credits: "",
        startDate: "",
        endDate: "",
        category: "core",
      });

      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="new-courses-container">
      <h2 className="new-courses-header">Register for New Course</h2>

      {submitSuccess && (
        <div className="success-message">Course registered successfully!</div>
      )}

      <form className="course-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="courseCode">
              Course Code
            </label>
            <input
              type="text"
              id="courseCode"
              name="courseCode"
              className="form-input"
              value={formData.courseCode}
              onChange={handleChange}
              placeholder="e.g., CS101"
            />
            {errors.courseCode && (
              <div className="form-error">{errors.courseCode}</div>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="courseTitle">
              Course Title
            </label>
            <input
              type="text"
              id="courseTitle"
              name="courseTitle"
              className="form-input"
              value={formData.courseTitle}
              onChange={handleChange}
              placeholder="e.g., Introduction to Computer Science"
            />
            {errors.courseTitle && (
              <div className="form-error">{errors.courseTitle}</div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="form-textarea"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter course description"
          ></textarea>
          {errors.description && (
            <div className="form-error">{errors.description}</div>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="instructor">
              Instructor
            </label>
            <input
              type="text"
              id="instructor"
              name="instructor"
              className="form-input"
              value={formData.instructor}
              onChange={handleChange}
              placeholder="e.g., Dr. Jane Smith"
            />
            {errors.instructor && (
              <div className="form-error">{errors.instructor}</div>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="credits">
              Credits
            </label>
            <input
              type="number"
              id="credits"
              name="credits"
              className="form-input"
              value={formData.credits}
              onChange={handleChange}
              min="1"
              placeholder="e.g., 3"
            />
            {errors.credits && (
              <div className="form-error">{errors.credits}</div>
            )}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            name="category"
            className="form-select"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="core">Core Course</option>
            <option value="elective">Elective</option>
            <option value="lab">Laboratory</option>
            <option value="project">Project</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="startDate">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="form-input"
              value={formData.startDate}
              onChange={handleChange}
            />
            {errors.startDate && (
              <div className="form-error">{errors.startDate}</div>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="endDate">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              className="form-input"
              value={formData.endDate}
              onChange={handleChange}
            />
            {errors.endDate && (
              <div className="form-error">{errors.endDate}</div>
            )}
          </div>
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register Course"}
        </button>
      </form>
    </div>
  );
}

export default NewCourses;

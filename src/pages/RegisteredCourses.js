import React, { useState } from "react";
import "./RegisteredCourses.css";

function RegisteredCourses() {
  // Mock data for registered courses with added year and projects
  const [courses] = useState([
    {
      id: 1,
      code: "CS101",
      title: "Introduction to Computer Science",
      description:
        "A foundational course covering basic principles of computer science and programming.",
      instructor: "Mr. K.Kanistan",
      credits: 3,
      status: "Finished",
      grade: "A",
      year: "2022",
      project: {
        name: "Basic Programming Portfolio",
        startDate: "2022-02-15",
        endDate: "2022-05-10",
        incharge: "Mr. K.Kanistan",
      },
    },
    {
      id: 2,
      code: "CS201",
      title: "Data Structures and Algorithms",
      description:
        "Study of fundamental data structures and algorithms used in computer programming.",
      instructor: "Prof. M.Sanjevan",
      credits: 4,
      status: "Ongoing",
      grade: "In Progress",
      year: "2023",
      project: {
        name: "Algorithm Implementation Project",
        startDate: "2023-09-05",
        endDate: "2023-12-15",
        incharge: "Prof. M.Sanjevan",
      },
    },
    {
      id: 3,
      code: "CS301",
      title: "Database Systems",
      description:
        "Introduction to database design, implementation, and management.",
      instructor: "Dr. K.Kanthu",
      credits: 3,
      status: "Finished",
      grade: "B+",
      year: "2023",
      project: {
        name: "Database Design and Implementation",
        startDate: "2023-01-20",
        endDate: "2023-04-25",
        incharge: "Dr. K.Kanthu",
      },
    },
    {
      id: 4,
      code: "CS401",
      title: "Web Development",
      description:
        "Comprehensive study of web technologies, frameworks, and best practices.",
      instructor: "Prof. S.Thanojan",
      credits: 4,
      status: "Ongoing",
      grade: "In Progress",
      year: "2024",
      project: {
        name: "Full-Stack Web Application",
        startDate: "2024-02-10",
        endDate: "2024-06-01",
        incharge: "Prof. S.Thanojan",
      },
    },
    {
      id: 5,
      code: "CS501",
      title: "Artificial Intelligence",
      description: "Introduction to AI concepts, algorithms, and applications.",
      instructor: "Dr. K.Rickes",
      credits: 4,
      status: "Finished",
      grade: "A-",
      year: "2024",
      project: {
        name: "Machine Learning Model Development",
        startDate: "2024-01-15",
        endDate: "2024-04-20",
        incharge: "Dr. K.Rickes",
      },
    },
  ]);

  // State for search and filter
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("");

  // State for modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Get unique years for filter dropdown
  const years = [...new Set(courses.map((course) => course.year))].sort();

  // Handle view project button click
  const handleViewProject = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Handle print project
  const handlePrintProject = () => {
    window.print();
  };

  // Handle share project
  const handleShareProject = () => {
    // In a real application, you might implement sharing via email, social media, etc.
    alert("Sharing functionality would be implemented here!");
  };

  // Filter courses based on search term and year filter
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesYear = yearFilter === "" || course.year === yearFilter;

    return matchesSearch && matchesYear;
  });

  return (
    <div className="registered-courses-container">
      <h2 className="courses-header">Registered Courses</h2>

      <div className="search-filter-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by course code or name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-box">
          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="year-filter"
          >
            <option value="">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="courses-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div className="course-card" key={course.id}>
              <h3 className="course-title">{course.title}</h3>
              <div className="course-code">
                {course.code} | {course.credits} Credits
              </div>
              <div className="course-year">Year: {course.year}</div>
              <p className="course-description">{course.description}</p>
              <div className="course-details">
                <p>
                  <strong>Instructor:</strong> {course.instructor}
                </p>
                <p>
                  <strong>Grade:</strong> {course.grade}
                </p>
              </div>
              <div className="course-footer">
                <span
                  className={`course-status status-${course.status.toLowerCase()}`}
                >
                  {course.status}
                </span>
                <button
                  className="view-project-btn"
                  onClick={() => handleViewProject(course.project)}
                >
                  View Project
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-courses-message">
            No courses match your search criteria.
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {showModal && selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Project Details</h3>
              <button
                className="close-modal"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="project-detail">
                <span className="project-label">Project Name:</span>
                <span className="project-value">{selectedProject.name}</span>
              </div>
              <div className="project-detail">
                <span className="project-label">Start Date:</span>
                <span className="project-value">
                  {new Date(selectedProject.startDate).toLocaleDateString()}
                </span>
              </div>
              <div className="project-detail">
                <span className="project-label">End Date:</span>
                <span className="project-value">
                  {new Date(selectedProject.endDate).toLocaleDateString()}
                </span>
              </div>
              <div className="project-detail">
                <span className="project-label">In Charge:</span>
                <span className="project-value">
                  {selectedProject.incharge}
                </span>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="modal-btn print-btn"
                onClick={handlePrintProject}
              >
                Print
              </button>
              <button
                className="modal-btn share-btn"
                onClick={handleShareProject}
              >
                Share
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisteredCourses;

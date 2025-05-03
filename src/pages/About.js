import React from "react";
import "./About.css";
import kanistanImg from "../images/kanistan.png";

function About() {
  return (
    <div className="about-container">
      <h2 className="about-header">
        About Project Information Management System
      </h2>

      <div className="about-content">
        <div className="about-section">
          <h3 className="about-section-title">Overview</h3>
          <p>
            The Project Information Management System (PIMS) is a comprehensive
            platform designed to help students manage their academic projects,
            courses, and educational journey. Our system provides a centralized
            location for tracking course progress, managing project deadlines,
            and maintaining academic records.
          </p>
        </div>

        <div className="about-section">
          <h3 className="about-section-title">Features</h3>
          <ul>
            <li>
              Personal dashboard with student information and progress overview
            </li>
            <li>Course registration and management</li>
            <li>Project tracking with status updates</li>
            <li>Visual representation of academic progress</li>
            <li>Instructor contact information</li>
            <li>Grade tracking and GPA calculation</li>
          </ul>
        </div>

        <div className="about-section">
          <h3 className="about-section-title">How to Use</h3>
          <p>
            Navigate through the system using the menu at the top of the page.
            The Home page provides an overview of your information and current
            progress. Use the Registered Courses page to view details about
            courses you're currently taking or have completed. The New Courses
            page allows you to register for additional courses.
          </p>
          <p>
            For any questions or technical support, please contact our support
            team at support@pims.edu.
          </p>
        </div>

        <div className="about-section">
          <h3 className="about-section-title">About me</h3>
          <div className="team-members">
            <div className="team-member">
              <img
                src={kanistanImg}
                alt="KANISTAN"
                className="team-member-image"
              />
              <div className="team-member-name">KANESALINGAM KANISTAN</div>
              <div className="team-member-role">COMPUTER ENGINEER (R)</div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h3 className="about-section-title">Version Information</h3>
          <p>Current Version: 1.0.0</p>
          <p>Last Updated: April 24, 2025</p>
        </div>
      </div>
    </div>
  );
}

export default About;

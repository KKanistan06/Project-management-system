import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./Home.css";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function Home() {
  // Mock data for student information
  const studentData = {
    name: "K.Kanistan",
    id: "STD1010",
    address: "Point Pedro, Jaffna.",
    phone: "0772664192",
  };

  // Mock data for courses
  const coursesData = {
    finished: 8,
    ongoing: 3,
  };

  // Mock data for projects
  const projectsData = [
    { id: 1, name: "Web Development ", status: "Finished" },
    { id: 2, name: "Mobile App Development ", status: "Finished" },
    { id: 3, name: "Database Design ", status: "Finished" },
    { id: 4, name: "AI Research Paper ", status: "Ongoing" },
  ];

  // Chart data for courses
  const courseChartData = {
    labels: ["Finished Courses", "Ongoing Courses"],
    datasets: [
      {
        data: [coursesData.finished, coursesData.ongoing],
        backgroundColor: ["#4caf50", "#8bc34a"],
        borderColor: ["#388e3c", "#689f38"],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%", 
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 20,
        },
      },
      title: {
        display: true,
        text: "",
        padding: {
          top: 10,
          bottom: 10,
        },
      },
    },
  };

  return (
    <div className="home-container">
      <div className="card">
        <h3 className="card-title">Student Information</h3>
        <div className="card-content">
          <div className="student-info">
            <span className="label">Name:</span>
            <span className="value">{studentData.name}</span>

            <span className="label">Student ID:</span>
            <span className="value">{studentData.id}</span>

            <span className="label">Address:</span>
            <span className="value">{studentData.address}</span>

            <span className="label">Phone:</span>
            <span className="value">{studentData.phone}</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">Course Status</h3>
        <div className="card-content">
          <div className="chart-container">
            <Doughnut data={courseChartData} options={chartOptions} />
          </div>
          <div className="chart-summary">
            <p>Total Courses: {coursesData.finished + coursesData.ongoing}</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="card-title">Projects</h3>
        <div className="card-content">
          <div className="projects-list">
            {projectsData.map((project) => (
              <div className="project-item" key={project.id}>
                <span className="project-name">{project.name}</span>
                <span
                  className={`status-badge status-${project.status.toLowerCase()}`}
                >
                  {project.status}
                </span>
              </div>
            ))}
          </div>
          <div className="chart-summary">
            <p>
              Finished Projects:{" "}
              {projectsData.filter((p) => p.status === "Finished").length}
            </p>
            <p>
              Ongoing Projects:{" "}
              {projectsData.filter((p) => p.status === "Ongoing").length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

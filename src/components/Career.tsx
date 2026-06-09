import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science (B.E)</h4>
                <h5>Sri Eshwar College of Engineering</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Currently pursuing my Bachelor of Engineering in Computer Science. Building a strong foundation in Programming, Web Development, and Data Structures & Algorithms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer Intern</h4>
                <h5>Better Tomorrow</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on Full-Stack Development, building components and learning industry best practices in frontend and backend workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Intern</h4>
                <h5>Various Projects</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Specializing in the MERN Stack. Built many complex full-stack web applications featuring real-time data, AI integration, and robust backends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

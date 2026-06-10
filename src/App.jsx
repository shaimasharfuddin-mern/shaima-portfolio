import { motion } from "framer-motion";

const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MongoDB Atlas",
  "JWT",
  "REST APIs",
  "Cloudinary",
  "Nodemailer",
  "Git",
  "GitHub",
  "Vercel",
  "Render",
];

function App() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "#0f172a",
          borderBottom: "1px solid #1e293b",
          padding: "15px 8%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "#38bdf8" }}>Shaima.dev</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#skills" style={linkStyle}>Skills</a>
          <a href="#projects" style={linkStyle}>Projects</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          padding: "120px 8%",
          textAlign: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: "3.5rem",
            marginBottom: "15px",
          }}
        >
          Shaima Sharfuddin
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            color: "#38bdf8",
            marginBottom: "20px",
          }}
        >
          MERN Stack Developer
        </motion.h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "1.8",
            color: "#cbd5e1",
          }}
        >
          Building scalable full-stack applications using React, Node.js,
          Express.js, and MongoDB. Passionate about creating modern web
          experiences and solving real-world problems through technology.
        </p>

        <div
          style={{
            marginTop: "35px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://github.com/shaimasharfuddin-mern"
            target="_blank"
            rel="noreferrer"
            style={buttonStyle}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shaima-shaima-6b3659300/"
            target="_blank"
            rel="noreferrer"
            style={buttonStyle}
          >
            LinkedIn
          </a>

          <a
            href="/SHAIMA_DOC.pdf"
            download
            style={buttonStyle}
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        style={{
          padding: "80px 8%",
        }}
      >
        <h2 style={headingStyle}>About Me</h2>

        <p
          style={{
            color: "#cbd5e1",
            maxWidth: "850px",
            lineHeight: "1.8",
          }}
        >
          I am a MERN Stack Developer focused on building production-ready web
          applications. My experience includes authentication systems,
          role-based access control, REST API development, MongoDB Atlas,
          Cloudinary integration, email notification systems, and cloud
          deployment using Vercel and Render.
        </p>
      </section>

      {/* Skills */}
      <section
        id="skills"
        style={{
          padding: "80px 8%",
        }}
      >
        <h2 style={headingStyle}>Skills</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "15px",
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill}
              style={{
                background: "#1e293b",
                padding: "18px",
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        style={{
          padding: "80px 8%",
        }}
      >
        <h2 style={headingStyle}>Featured Project</h2>

        <div
          style={{
            background: "#1e293b",
            padding: "30px",
            borderRadius: "16px",
          }}
        >
          <h3
            style={{
              color: "#38bdf8",
            }}
          >
            SkillSync — MERN Job Portal
          </h3>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.8",
            }}
          >
            Full-stack recruitment platform supporting recruiters and
            jobseekers. Features include JWT authentication, role-based access
            control, resume uploads via Cloudinary, recruiter workflows,
            application management, email notifications, and production
            deployment.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              margin: "20px 0",
            }}
          >
            {[
              "React",
              "Node.js",
              "Express",
              "MongoDB Atlas",
              "JWT",
              "Cloudinary",
              "Nodemailer",
            ].map((tech) => (
              <span
                key={tech}
                style={{
                  background: "#334155",
                  padding: "8px 12px",
                  borderRadius: "20px",
                  fontSize: "14px",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <a
              href="https://job-portal-bay-one.vercel.app"
              target="_blank"
              rel="noreferrer"
              style={buttonStyle}
            >
              Live Demo
            </a>

            <a
              href="https://github.com/shaimasharfuddin-mern/job-portal"
              target="_blank"
              rel="noreferrer"
              style={buttonStyle}
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          padding: "80px 8%",
          textAlign: "center",
        }}
      >
        <h2 style={headingStyle}>Contact</h2>

        <p style={{ color: "#cbd5e1" }}>
          shaimasharfuddin654@gmail.com
        </p>

        <p style={{ color: "#cbd5e1" }}>
          Available for internships and entry-level MERN Stack Developer roles.
        </p>
      </section>
    </div>
  );
}

const headingStyle = {
  color: "#38bdf8",
  marginBottom: "30px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const buttonStyle = {
  background: "#38bdf8",
  color: "#0f172a",
  padding: "12px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
};

export default App;
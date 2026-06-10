import { motion } from "framer-motion";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          Shaima Sharfuddin
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            color: "#38bdf8",
          }}
        >
          MERN Stack Developer
        </motion.h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "20px auto",
            lineHeight: "1.7",
          }}
        >
          Passionate MERN Stack Developer focused on building scalable web
          applications using React, Node.js, Express.js, and MongoDB.
        </p>
      </section>

      {/* ABOUT */}
      <section
        style={{
          padding: "50px 20px",
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h2>About Me</h2>

        <p>
          I am a MERN Stack Developer skilled in developing full-stack web
          applications with authentication, REST APIs, cloud deployment,
          MongoDB Atlas integration, and modern React frontends.
        </p>
      </section>

      {/* SKILLS */}
      <section
        style={{
          padding: "50px 20px",
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h2>Skills</h2>

        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            gap: "15px",
          }}
        >
          <li>React</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>JWT Authentication</li>
          <li>Cloudinary</li>
          <li>Nodemailer</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>Vercel</li>
          <li>Render</li>
        </ul>
      </section>

      {/* PROJECT */}
      <section
        style={{
          padding: "50px 20px",
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h2>Featured Project</h2>

        <div
          style={{
            border: "1px solid #334155",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          <h3>SkillSync - MERN Job Portal</h3>

          <p>
            Full-stack recruitment platform supporting recruiter and job seeker
            workflows with authentication, resume uploads, application tracking,
            and email notifications.
          </p>

          <p>
            <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB Atlas,
            JWT, Cloudinary, Nodemailer
          </p>

          <a
            href="https://job-portal-bay-one.vercel.app"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#38bdf8",
              marginRight: "20px",
            }}
          >
            Live Demo
          </a>

          <a
            href="https://github.com/shaimasharfuddin-mern/job-portal"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#38bdf8",
            }}
          >
            GitHub
          </a>
        </div>
      </section>

      {/* GITHUB */}
      <section
        style={{
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2>GitHub</h2>

        <a
          href="https://github.com/shaimasharfuddin-mern"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#38bdf8",
            fontSize: "20px",
          }}
        >
          Visit My GitHub Profile
        </a>
      </section>

      {/* RESUME */}
      <section
        style={{
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2>Resume</h2>

        <button
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Download Resume
        </button>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h2>Contact</h2>

        <p>Email: your-email@example.com</p>

        <p>
          GitHub:
          {" "}
          github.com/shaimasharfuddin-mern
        </p>
      </section>
    </div>
  );
}

export default App;
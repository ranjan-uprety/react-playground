import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "javascript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "web design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "git and github",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "react",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "nodejs",
    level: "beginner",
    color: "#3C873A",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="/photo.jpg" alt="Ranjan" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Ranjan Uprety</h1>
      <p>
        Full-stack web developer. When not coding or learning to code, I like to
        play MLBB, to cook, ride my bike, or to just watch netflix.
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          emoji={skill.emoji}
          color={skill.color}
          level={skill.level}
        />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>
        {skill}
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);

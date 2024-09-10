import {
    SiPython,
    SiPostgresql,
    SiDocker,
    SiAwsamplify,
    SiGooglecloud,
    SiTableau,
    SiTensorflow,
    SiKeras,
    SiSpacy,
    SiScikitlearn,
    SiFlask,
    SiPowerbi,
    SiDjango,
    SiStreamlit,
    SiR,
    SiHuggingface
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const skillsConfig = {
    coreSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50} style={{ color: "#3776AB" }} />, // Python (Blue)
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiPostgresql size={50} style={{ color: "#336791" }} />, // Postgres (Blue)
            text: "Postgres"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <FaGitAlt size={50} style={{ color: "#F1502F" }} />, // Git (Red)
            text: "Git"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiTableau size={50} style={{ color: "#E97627" }} />, // Tableau (Orange)
            text: "Tableau"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiStreamlit size={50} style={{ color: "#FF4B4B" }} />, // Streamlit (Red)
            text: "Streamlit"
        }
    ],
    mlNlpSkills: [
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiScikitlearn size={50} style={{ color: "#F7931E" }} />, // Scikit-learn (Orange)
            text: "Scikit-learn"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiHuggingface size={50} style={{ color: "#FFD700" }} />, // Transformers (Yellow)
            text: "Transformers"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiTensorflow size={50} style={{ color: "#FF6F00" }} />, // TensorFlow (Orange)
            text: "TensorFlow"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <SiKeras size={50} style={{ color: "#D00000" }} />, // Keras (Red)
            text: "Keras"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiSpacy size={50} style={{ color: "#09A3D5" }} />, // SpaCy (Blue)
            text: "SpaCy"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiPython size={50} style={{ color: "#306998" }} />, // NLTK (Blue)
            text: "NLTK"
        },
    ],
    cloudPlatforms: [
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiAwsamplify size={50} style={{ color: "#FF9900" }} />, // AWS (Orange)
            text: "AWS"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiGooglecloud size={50} style={{ color: "#4285F4" }} />, // Google Cloud (Blue)
            text: "Google Cloud (GCP)"
        }
    ],
    complementarySkills: [
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiR size={50} style={{ color: "#276DC3" }} />, // R (Blue)
            text: "R"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiPowerbi size={50} style={{ color: "#F2C811" }} />, // Power BI (Yellow)
            text: "Power BI"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiFlask size={50} style={{ color: "#000000" }} />, // Flask (Black)
            text: "Flask"
        },
        {
            id: "skills-16",
            className: "skill-icon",
            icon: <SiDjango size={50} style={{ color: "#092E20" }} />, // Django (Green)
            text: "Django"
        },
        {
            id: "skills-17",
            className: "skill-icon",
            icon: <SiDocker size={50} style={{ color: "#2496ED" }} />, // Docker (Blue)
            text: "Docker"
        }
    ]
};

export default skillsConfig;

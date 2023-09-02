import React from "react";
import styles from "../styles/project.module.css";

const Project = ({ title, description, imageUrl, projectLink }) => {
  return (
    <div className={styles.projectCard}>
      <img src={imageUrl} alt={title} className={styles.projectImage} />
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.projectLink}
      >
        View Project
      </a>
    </div>
  );
};

export default Project;

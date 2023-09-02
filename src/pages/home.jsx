import styles from "../styles/home.module.css";
import Project from "../components/project.jsx";

export default function Home() {
  const projects = [
    {
      title: "Fundarte",
      description:
        "Promoting and producing multidisciplinary art projects in Miami and beyond. They have a deep commitment to showcasing brilliant international artists, nurturing local creators, and advancing Miami’s presence in the global artistic conversation.",
      imageUrl:
        "https://fundarte.us/wp-content/uploads/2022/11/Portada-Slider.png",
      projectLink: "https://fundarte.us/",
    },
    {
      title: "Randy Valdes",
      description:
        "Randy Valdes is a Cuban-born director and cinematographer whose works encompass various genres, from documentaries to commercials. His dynamic visual storytelling captures profound human experiences and diverse cultural narratives.",
      imageUrl:
        "https://randyvaldes.com/wp-content/uploads/2021/12/Screen-Shot-2021-01-29-at-9.04.40-AM-e1639196794664.png",
      projectLink: "https://randyvaldes.com/",
    },
  ];
  return (
    <main>
      <h1 className={styles.pageTitle}>Welcome to My Portfolio</h1>
      <h2 className={styles.sectionTitle}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </main>
  );
}

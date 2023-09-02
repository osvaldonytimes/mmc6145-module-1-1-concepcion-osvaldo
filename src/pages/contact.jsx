import styles from "../styles/contact.module.css";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Layout from "../components/layout.jsx";

const Contact = () => {
  return (
    <>
      <Header />
      <Layout>
        <div className={styles.contactContainer}>
          <h1>Contact Me</h1>
          <p>
            I'd love to connect with you. You can find me on the following
            platforms:
          </p>

          <ul className={styles.socialList}>
            <li>
              <a
                href="https://www.linkedin.com/in/osvaldoconcepcion/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/osvaldonytimes"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </Layout>
      <Footer />
    </>
  );
};
export default Contact;

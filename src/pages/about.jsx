import styles from "../styles/about.module.css";

export default function About() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>About me</h1>
      <p className={styles.intro}>
        My name is Osvaldo Concepcion but you can call me Os. This website is
        about me, so I can’t guarantee you that it will be entertaining.
      </p>
      <section className={styles.bio}>
        <p>
          I’m Cuban, born and raised in the countryside. Currently, I work as an
          Engineer Manager for The New York Times, focusing on their Cooking
          mobile app. Despite my profession, I only got my first computer at age
          22 and my first cell phone when I was 24, right after arriving in the
          US. At present, I'm 35 years old.
        </p>
        <p>
          I've always believed the term "artist" is one of the grandest
          compliments one can give. Art, in its various forms, has fascinated me
          since childhood. What intrigues me most is its ability to evoke
          different emotions in different individuals. I consider anything
          involving creation as an art, even software development. Like all
          things, there are masters whose code leaves you in awe, while others,
          well...
        </p>
        <p>
          Music has a special place in my heart, though I admit, I've been
          banished from karaoke bars for my unmistakable lack of talent.
          However, painting is a different story. It's something I indulge in
          daily. It's my strange little way of expressing every facet of my
          being.
        </p>
        <p>
          If you're ever looking for a book recommendation, “The Little Prince”
          by Antoine de Saint-Exupery would be my top pick. And for a
          soul-stirring song? “Heroes” by David Bowie.
        </p>
        <p>
          At my core, I'm a nerd. Authenticity goes a long way with me, so be
          raw and wear your heart on your sleeve. As for the rest of my story,
          perhaps we can share it over a drink someday. Dale!
        </p>
      </section>
    </main>
  );
}

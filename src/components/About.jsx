import Title from "./Title";

export default function About() {
  return (
    <section className="section" id="about">
      <Title title="about" sub="Nazareth"></Title>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src="./images/4.jpeg"
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the Magical City</h3>
          <p>
            Nazareth, located in northern Israel, is renowned as the historic
            hometown of Jesus and a major pilgrimage site with significant
            religious landmarks, including the Basilica of the Annunciation. The
            city blends ancient charm with vibrant markets, narrow alleyways,
            and cultural sites that reflect its rich history and diverse
            communities.
          </p>
          <p>
            As the largest Arab city in Israel, Nazareth offers a unique
            cultural and culinary experience, attracting visitors worldwide.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}

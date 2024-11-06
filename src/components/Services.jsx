import { highlights } from "../data";
import Title from "./Title";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Services() {
  return (
    <section className="section services" id="services">
      <Title title="Highlights of" sub="Nazareth" />
      <div className="section-center services-center">
        {highlights.map((highlight) => {
          const { id, icon, title, text } = highlight;
          return (
            <article key={id} className="service">
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

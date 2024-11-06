// eslint-disable-next-line react/prop-types
export default function Title({ title, sub }) {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{sub}</span>
      </h2>
    </div>
  );
}

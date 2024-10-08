import Link from "./Links.js";

export default function Certificates({ data }) {
    const { title, list } = data;
  
    return (
      <section className="certificates">
        <h2>{title}</h2>
        <ul>
          {list.map(({ name, provider, url }) => (
            <li key={name}>
              <h4>
              <Link to={url}>{name}</Link>
                <span className="provider"> &mdash; {provider}</span>
              </h4>
            </li>
          ))}
        </ul>
      </section>
    );
  }
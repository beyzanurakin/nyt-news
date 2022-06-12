import React from "react";
import { useGlobalContext } from "./context";

function News() {
  const { isLoading, news, articles } = useGlobalContext();
  console.log(news);
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="news">
      {articles.map((article) => {
        const { id, title, published_date, section, abstract, url } = article;
        return (
          <article key={id} className="new">
            <h4 className="title">{title}</h4>
            <p className="info">
              <b>Section: </b>
              {section}
            </p>
            <p className="info">{published_date}</p>
            <p className="info">{abstract}</p>
            <a
              href={url}
              className="read-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </article>
        );
      })}
    </section>
  );
}

export default News;

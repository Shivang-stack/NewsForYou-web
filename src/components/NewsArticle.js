import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <a class="thumbnail">
      <img src={data.urlToImage || 'default-path-of-the-image' } class="img-fluid" />
      </a>
      <h3 className="news__title">{data.title}</h3>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
    </div>
  );
}

export default NewsArticle;

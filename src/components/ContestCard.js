import React from "react";
import "./ContestCard.css";

function ContestCard({ title, posted, description, author, image, alt }) {
  return (
    <div className="contest-card">
      <h2>{title}</h2>
      <div className="posted">
        <span>Posted on {posted}</span>
      </div>
      <pre className="description">{description}</pre>
      {image && (
        <figure>
            <img src={image} alt={alt} />
        </figure>
      )}
      <div className="author">
        <span>👤 {author}</span>
        <span>🕒 {posted}</span>
      </div>
    </div>
  );
}

export default ContestCard;

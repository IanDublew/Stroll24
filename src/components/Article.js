import React from "react";
import { Link } from "react-router-dom";

function Article({ id, title, date, preview, minutes }) {
  const defaultDate = "January 1, 2024";

  function generateReadingTimeEmoji(minutes) {
    const coffeeCupEmoji = "☕️";
    const bentoBoxEmoji = "🍝";

    if (minutes < 10) {
      const numCoffeeCups = Math.ceil(minutes / 10);
      return coffeeCupEmoji.repeat(numCoffeeCups) + ` ${minutes} min read`;
    } else {
      const numBentoBoxes = Math.ceil(minutes / 10);
      return bentoBoxEmoji.repeat(numBentoBoxes) + ` ${minutes} min read`;
    }
  }

  return (
    <article>
      <Link to={`/blog/${id}`}>
        <h3>{title}</h3>
      </Link>
      <small>{date || defaultDate} . <small>{generateReadingTimeEmoji(minutes)}</small></small> 
      <p>{preview}</p>
    </article>
  );
}

export default Article;

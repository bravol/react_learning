import React from "react";
import { people } from "./data.jsx";
import { getImageUrl } from "./utils";

export default function List() {
  const listItems = people.map((person) => (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        {person.name} {" " + person.profession + " "} know for{" "}
        {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

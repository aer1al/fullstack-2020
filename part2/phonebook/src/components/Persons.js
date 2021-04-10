import React from "react";

const Persons = ({ search, persons, handleClick }) => {
  return (
    <>
      <ul style={{ padding: "0", list_style_type: "none" }}>
        {!search &&
          persons.map((person) => (
            <div key={person.name} style={{ display: "flex" }}>
              <li key={person.name}>
                {person.name} {person.number}
              </li>
              <button onClick={() => handleClick(person)}>delete</button>
            </div>
          ))}
        {search &&
          persons
            .filter((person) =>
              person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((person) => (
              <li key={person.name}>
                {person.name} {person.number}
              </li>
            ))}
      </ul>
    </>
  );
};

export default Persons;

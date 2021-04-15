import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import personService from "./services/persons";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState(null);
  const [notifClass, setNotification] = useState("message");

  useEffect(() => {
    personService.getAll().then((initial) => setPersons(initial));
  }, []);

  const showNotif = (type, message) => {
    setNotification(type);
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 1800);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    const person = persons.find((person) => person.name === newPerson.name);

    if (person) {
      person.number !== newPerson.number
        ? window.confirm(
            `${person.name} is already added to the phonebook, replace their old number with a new one?`
          )
          ? personService.update(person.id, newPerson).then(() => {
              personService.getAll().then((initial) => setPersons(initial));
              setNewName("");
              setNewNumber("");
              showNotif(
                "message",
                `Added new number (${person.name} : ${person.number})`
              );
            })
          : alert(`${person.name}'s details were not updated`)
        : alert(`${person.name} is already added to the phonebook`);
    } else {
      personService.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
        showNotif("message", `Added ${newPerson.name}`);
      });
    }
  };

  const deletePerson = (person) => {
    personService
      .remove(person.id)
      .then(() => {
        setPersons(persons.filter((newPerson) => newPerson.id !== person.id));
        showNotif("error", `deleted ${person.name}`);
      })
      .catch(() => {
        setMessage(`${person.name} was already removed from the phonebook`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        setPersons(persons.filter((p) => p.id !== person.id));
        setNotification("error");
      });
  };

  return (
    <div>
      <Notification className={notifClass} message={message} />
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch} />
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons search={search} persons={persons} handleClick={deletePerson} />
    </div>
  );
};

export default App;

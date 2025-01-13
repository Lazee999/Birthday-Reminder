import React, { useState } from "react";
import AddEditForm from "./components/AddEditForm";
import BirthdayList from "./components/BirthdayList";
import "./styles.css";

const App = () => {
  const [birthdays, setBirthdays] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null); // For editing a specific person
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleAddBirthday = (person) => {
    setBirthdays((prev) => [...prev, { ...person, id: Date.now() }]);
  };

  const handleEditBirthday = (updatedPerson) => {
    setBirthdays((prev) =>
      prev.map((person) =>
        person.id === updatedPerson.id ? updatedPerson : person
      )
    );
    setSelectedPerson(null); // Clear the form after editing
  };

  const handleDeleteBirthday = (id) => {
    setBirthdays((prev) => prev.filter((person) => person.id !== id));
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark" : ""}`}>
      <div className="toggle-theme">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "🌞" : "🌙"}
        </button>
      </div>

      <h1 className="main-title">Birthday Reminder</h1>

      {/* Form for adding/editing */}
      <AddEditForm
        person={selectedPerson} // Pass selected person for editing
        onSave={selectedPerson ? handleEditBirthday : handleAddBirthday} // Save new or updated
        onCancel={() => setSelectedPerson(null)} // Cancel editing
      />

      {/* Birthday List */}
      <BirthdayList
        birthdays={birthdays}
        onEdit={setSelectedPerson} // Pass the selected person to the form
        onDelete={handleDeleteBirthday}
      />
    </div>
  );
};

export default App;

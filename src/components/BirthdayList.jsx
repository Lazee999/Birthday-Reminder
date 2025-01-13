import React from "react";

const BirthdayList = ({ birthdays, onEdit, onDelete }) => {
    return (
        <div className="birthday-list">
            {birthdays.map((person) => (
                <div className="birthday-card" key={person.id}>
                    {person.image && (
                        <img src={person.image} alt={person.name} className="birthday-avatar" />
                    )}
                    <h3>{person.name}</h3>
                    <p>Birthday: {new Date(person.birthday).toDateString()}</p>
                    <div className="button-group">
                        <button onClick={() => onEdit(person)} className="edit-btn">
                            Edit
                        </button>
                        <button onClick={() => onDelete(person.id)} className="delete-btn">
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BirthdayList;

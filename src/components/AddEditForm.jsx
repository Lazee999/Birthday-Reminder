import React, { useState, useEffect } from "react";

const AddEditForm = ({ person, onSave, onCancel }) => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    // Populate form when editing a person
    if (person) {
      setName(person.name);
      setBirthday(person.birthday);
      setImage(person.image || "");
    }
  }, [person]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (name && birthday) {
      onSave({ id: person?.id || Date.now(), name, birthday, image });
      setName("");
      setBirthday("");
      setImage("");
    }
  };

  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <input
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        className="input-field"
      />
      <input type="file" onChange={handleImageChange} className="file-input" />
      {image && <img src={image} alt="Preview" className="image-preview" />}
      <div className="form-buttons">
        <button onClick={onCancel} className="cancel-btn">
          Cancel
        </button>
        <button onClick={handleSubmit} className="save-btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddEditForm;

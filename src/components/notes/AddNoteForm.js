import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const AddNoteForm = ({ onSave, onChange }) => {
  return (
    <form onSubmit={onSave}>
      <TextInput name="title" label="Title" onChange={onChange} />

      <TextInput name="text" label="Text" onChange={onChange} />

      <button type="submit" className="btn btn-primary">
        Add Note
      </button>
    </form>
  );
};

AddNoteForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddNoteForm;

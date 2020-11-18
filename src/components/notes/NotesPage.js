import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadNotes } from "../../redux/actions/noteActions";
import { loadActivity } from "../../redux/actions/activityActions";
import PropTypes from "prop-types";
import NotesWall from "./NotesWall";
import AddNoteForm from "./AddNoteForm";
import { saveNote } from "../../api/notesApi";

function NotesPage({ notes, activity, loadNotes, loadActivity, ...props }) {
  const [note, setNote] = useState({ ...props.note });
  const [fetchCalls, setFetchCalls] = useState(0);

  useEffect(() => {
    // Load activity json once on mount.
    if (activity === null) {
      loadActivity();
    }

    // Load notes every second.
    const interval = setInterval(() => {
      loadNotes();
      setFetchCalls((fetchCalls) => fetchCalls + 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  let loggedInUserName = "Guest";
  if (activity != null) {
    loggedInUserName = activity.users[activity.loggedInUser].userName;
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function handleSave(event) {
    debugger;
    event.preventDefault();
    saveNote({ ...note, userId: activity.loggedInUser });
  }

  return (
    <>
      <p className="text-md-right">Welcome, {loggedInUserName}</p>
      <h1 className="jumbotron">Post-It Notes Activity</h1>
      <div className="row">
        <div className="col-xl">
          <NotesWall notes={notes} activity={activity} />
        </div>
        <div className="col-xs">
          <AddNoteForm onSave={handleSave} onChange={handleChange} />
        </div>
      </div>
      <footer>
        <div className="text-muted text-md-right">
          Fetch notes called {fetchCalls} times.
        </div>
      </footer>
    </>
  );
}

NotesPage.propTypes = {
  activity: PropTypes.object,
  notes: PropTypes.array.isRequired,
  note: PropTypes.object,
  loadNotes: PropTypes.func.isRequired,
  loadActivity: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    notes: state.notes,
    activity: state.activity,
  };
}

const mapDispatchToProps = {
  loadNotes,
  loadActivity,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotesPage);

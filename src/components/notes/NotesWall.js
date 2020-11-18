import React from "react";
import PropTypes from "prop-types";

const NotesWall = ({ notes, activity }) => {
  if (activity == null) {
    return null;
  }

  let userIds = Object.keys(activity.users);
  notes = addUserNameToNotes(notes, activity);

  return userIds.map((userId) => {
    return (
      <div key={userId}>
        <div className="row">
          <h5>{activity.users[userId].userName}&#39;s Ideas</h5>
        </div>
        <div className="row">
          {notes
            .filter((n) => n.userId === userId)
            .map((note) => {
              return (
                <div key={note.id} className="card col-sm-4 bg-light mx-1 mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.text}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  });
};

function addUserNameToNotes(notes, activity) {
  if (activity === null) {
    return [];
  }

  notes = notes.map((note) => {
    return {
      ...note,
      userName: activity.users[note.userId]
        ? activity.users[note.userId].userName
        : "",
    };
  });

  return notes;
}
NotesWall.propTypes = {
  notes: PropTypes.array.isRequired,
  activity: PropTypes.object,
};

export default NotesWall;

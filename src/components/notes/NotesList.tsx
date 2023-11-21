import React from "react";
import classes from "./NotesList.module.scss";
import Note from "./Note";
import { INote } from "../../models/Note";

interface INotesListProps {
  notes: INote[];
  remove: (_id: string) => void;
}

const NotesList = ({ notes, remove }: INotesListProps) => {
  return (
    <>
      {notes.length > 0 ? (
        <ul className={classes.list}>
          {notes.reverse().map((note) => (
            <Note {...note} key={note._id} remove={remove} />
          ))}
        </ul>
      ) : (
        <p className={classes.emptyNotes}>Create your first note ...</p>
      )}
    </>
  );
};

export default NotesList;

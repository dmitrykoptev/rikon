import React, { useEffect, useState } from "react";
import NotesList from "./components/notes/NotesList";
import NotesForm, { IInputs } from "./components/form/NotesForm";
import { ToastContainer, toast } from "react-toastify";
import { INote } from "./models/Note";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [notes, setNotes] = useState<INote[]>([]);

  const getNotes = async () => {
    try {
      const response = await fetch("/api/posts/");

      if (!response.ok) {
        throw new Error("Fetching notes failed ...");
      }

      const data = (await response.json()) as INote[];

      setNotes(data);
      console.log(data);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const addNote = async (note: IInputs) => {
    try {
      const response = await fetch("/api/posts/", {
        method: "POST",
        body: JSON.stringify({
          title: note.title,
          content: note.content,
          date: note.date,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Creating note failed ...");
      }

      getNotes();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const removeNote = async (_id: string) => {
    try {
      const response = await fetch(`api/posts/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Deleting note failed ...");
      }

      getNotes();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="container">
        <NotesForm add={addNote} />
        <NotesList notes={notes} remove={removeNote} />
      </div>
    </>
  );
}

export default App;

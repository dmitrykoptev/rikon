import React from "react";
import classes from "./Note.module.scss";
import { INote } from "../../models/Note";

interface INoteProps extends INote {
  remove: (_id: string) => void;
}

const Note = ({ _id, title, content, date, remove }: INoteProps) => {
  return (
    <li className={classes.note}>
      <h2>{title}</h2>
      <p>{content}</p>
      <p className={classes.date}>
        Дата создания
        <br /> {date}
      </p>
      <span className={classes.delete} onClick={() => remove(_id)}>
        X
      </span>
    </li>
  );
};

export default Note;

import React from "react";
import classes from "./NotesForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { INote } from "../../models/Note";

export interface IInputs extends Omit<INote, "_id"> {}

interface INotesFormProps {
  add: (note: IInputs) => void;
}

const NotesForm = ({ add }: INotesFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IInputs>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<IInputs> = (data) => {
    const newNote: IInputs = {
      title: data.title,
      content: data.content,
      date: new Date().toLocaleString("ru-RU", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    add(newNote);
    reset();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Добавить заметку</h2>
      <div className={classes.inputsContainer}>
        <input
          type="text"
          {...register("title", {
            required: "Поле обязательно к заполнению",
            validate: (value) =>
              value.trim() !== "" || "Поле не может быть заполнено пробелами",
          })}
          placeholder="Название..."
        />
        {!errors.title ? <p></p> : <p>{errors.title.message || "Error!"}</p>}
        <textarea
          rows={3}
          {...register("content", {
            required: "Поле обязательно к заполнению",
            validate: (value) =>
              value.trim() !== "" || "Поле не может быть заполнено пробелами",
          })}
          placeholder="Содержание..."
        />
        {!errors.content ? (
          <p></p>
        ) : (
          <p>{errors.content.message || "Error!"}</p>
        )}
      </div>
      <input type="submit" value="ДОБАВИТЬ" disabled={!isValid} />
    </form>
  );
};

export default NotesForm;

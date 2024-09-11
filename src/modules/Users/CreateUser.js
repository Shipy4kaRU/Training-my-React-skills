import formStyle from "./CreateUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import React, { useState } from "react";

const CreateUser = function (props) {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [users, setUsers] = useState({
    id: new Date(),
    name: "Данил",
    age: 19,
  });

  const nameInputHandler = (e) => {
    setInputName(e.target.value);
  };
  const ageInputHandler = (e) => {
    setInputAge(e.target.value);
  };

  const saveData = (e) => {
    e.preventDefault();
    props.onSave(inputName, inputAge);
    setInputAge("");
    setInputName("");
  };

  return (
    <Card className={`${formStyle.input}`}>
      <form onSubmit={saveData}>
        <div>
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={nameInputHandler}
            value={inputName}
          />
        </div>
        <div>
          <label htmlFor="age">Возраст</label>
          <input
            type="number"
            id="age"
            name="age"
            min="7"
            max="50"
            required
            onChange={ageInputHandler}
            value={inputAge}
          />
        </div>
        <Button>Добавить пользователя</Button>
      </form>
    </Card>
  );
};

export default CreateUser;

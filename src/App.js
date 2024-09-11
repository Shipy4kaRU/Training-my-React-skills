import { useState } from "react";
import CreateUser from "./modules/Users/CreateUser";
import UserList from "./modules/Users/UserList";
import ErrorModal from "./modules/UI/ErrorModal";

function App() {
  const [modal, setModal] = useState(false);

  const [users, setUsers] = useState([
    { id: new Date(), name: "Danil", age: 19 },
  ]);
  const saveDataHandler = (name, age) => {
    try {
      if (age < 10) {
        throw new Error("TOO LILY KID");
      }
      setUsers((previousState) => {
        return [{ name: name, age: age, id: new Date() }, ...previousState];
      });
    } catch (error) {
      console.error(`${error}`);
      setModal(true);
    }
  };
  const btnCloseModal = () => {
    setModal(false);
  };
  return (
    <div>
      {modal && (
        <ErrorModal
          onError={btnCloseModal}
          title="Произошла ошибка!"
          message="Что-то пошло не так..."
        />
      )}
      <CreateUser onSave={saveDataHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;

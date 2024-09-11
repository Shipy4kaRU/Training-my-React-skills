import style from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = function (props) {
  return (
    <Card className={`${style.users}`}>
      <ul>
        {props.users.map((user) => (
          <li
            key={user.id}
            style={{ fontSize: "19px", fontWeight: 500 }}
          >{`${user.name} - ${user.age}`}</li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;

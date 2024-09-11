import style from "./Button.module.css";

const Button = function (props) {
  return (
    <button onClick={props.onClick} className={`${style.button}`}>
      {props.children}
    </button>
  );
};

export default Button;

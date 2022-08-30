import React from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = React.useState([]);
  const [todo, setTodo] = React.useState([]);

  const handleInputOnchange = (event) => setInput(event.target.value);

  const handleSubmit = () => {
    todo.push({ id: input, title: input, checked: false });
    setTodo(todo);
    setInput("");
    console.log(todo);
  };

  const List = () => {
    return (
      <>
        <p>Your list</p>
        <ul>
          {todo.map((item) => {
            return <li key={item.id}> {item.title}</li>;
          })}
        </ul>
      </>
    );
  };

  return (
    <>
      <input type="text" onChange={handleInputOnchange} value={input} />
      <button type="submit" onClick={handleSubmit}>
        Button
      </button>
      <div>{input}</div>
      <List />
    </>
  );
}

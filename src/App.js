import React from "react";
import "./styles.css";

export default function ToDo() {
  const [list, setList] = React.useState(["hi", "hello"]);
  const handleAddTask = (event) => setList(list.push(event.target.value));

  return (
    <>
      <input type="text" onSubmit={handleAddTask} />
      <ul>
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
}

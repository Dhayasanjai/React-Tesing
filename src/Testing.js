import { useState } from 'react';

const Example = () => {
  const [clicked, setClicked] = useState(false);
  const [list, setList] = useState([]);
  const clickHandler = async () => {
    setClicked(true);
    const response = await fetch('');
    const data = await response.json();
    setList(data);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      {clicked && <p>it's only visible when the state is true </p>}
      {!clicked && <p>It's only visible when the state is false</p>}
      <button onClick={clickHandler}>Click me to Change</button>
      <ul>
        {list.map((li) => {
          return (
            <li key={li.name}>
              {li.name} {li.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Example;

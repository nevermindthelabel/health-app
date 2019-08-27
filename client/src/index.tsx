import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

type FormElem = React.FormEvent<HTMLFormElement>;
interface IToDo {
  text: string;
  complete: boolean;
}
const App = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [toDos, setToDos] = useState<IToDo[]>([]);

  const handleSubmit = (event: FormElem): void => {
    console.log(toDos);
    event.preventDefault();
    addToDo(value);
    console.log(value);
    setValue('');
  };

  const addToDo = (text: string): void => {
    const newToDo: IToDo[] = [...toDos, { text, complete: false }];
    setToDos(newToDo);
  };

  const completeToDo = (index: number): void => {
    const newToDos: IToDo[] = [...toDos];
    newToDos[index].complete = !newToDos[index].complete;
    setToDos(newToDos);
  };
  return (
    <Fragment>
      <h1>ToDos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={value}
          onChange={event => setValue(event.target.value)}
          id="textfield"
          required
        />
        <button type="submit">Add a ToDo</button>
      </form>
      <section>
        {toDos.map((todo: IToDo, index: number) => (
          <Fragment key={index}>
            <div>
              <h3>{todo.text}</h3>
              <button type='button' onClick={() => completeToDo(index)}>{todo.complete ? 'Complete' : 'Incomplete'}</button>
            </div>
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
};

export default App;

const root = document.getElementById('app-root');

ReactDOM.render(<App />, root);

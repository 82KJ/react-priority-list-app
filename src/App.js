import { useState, useRef, useCallback } from 'react';
import PriorityTemplate from './components/PriorityTemplate';
import PriorityInsert from './components/PriorityInsert';
import PriorityList from './components/PriorityList';
import PrioritySortedTable from './components/PrioritySortedTable';

const App = () => {
  const nextId = useRef(4);
  const is_clicked = useRef(false);
  const [page, setPages] = useState(1);
  const [presentID, setPresentID] = useState(3);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '컴퓨터 그래픽스 Chapter 4 복습',
      checked: true,
      clicked: false,
    },
    {
      id: 2,
      text: '머신러닝 시험 공부',
      checked: false,
      clicked: false,
    },
    {
      id: 3,
      text: '개별연구 보고서 작성',
      checked: false,
      clicked: false,
    },
  ]);

  const onInsert = useCallback(
    (text) => {
      let new_todos = todos.slice();
      let push_idx = new_todos.length;

      for (let i = 0; i < new_todos.length; i++) {
        if (new_todos[i].id === presentID) {
          push_idx = i + 1;
        }
        if (new_todos[i].clicked === true) {
          new_todos[i].clicked = false;
          is_clicked.current = false;
        }
      }

      const todo = {
        id: nextId.current,
        text,
        checked: false,
        clicked: false,
      };

      new_todos.splice(push_idx, 0, todo);
      setTodos(new_todos);
      setPresentID(new_todos[new_todos.length - 1].id);
      nextId.current += 1;
    },
    [todos, presentID],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  const onTextToggle = useCallback(
    (id) => {
      let new_todos = todos.slice();
      console.log(new_todos);

      for (let i in new_todos) {
        if (new_todos[i].id === id) {
          if (new_todos[i].clicked === true) {
            if (is_clicked.current === true) {
              is_clicked.current = !is_clicked.current;
              new_todos[i].clicked = !new_todos[i].clicked;
              setPresentID(new_todos[new_todos.length - 1].id);
            }
          } else {
            if (is_clicked.current === false) {
              is_clicked.current = !is_clicked.current;
              new_todos[i].clicked = !new_todos[i].clicked;
              setPresentID(id);
            }
          }
          break;
        }
      }
      setTodos(new_todos);
    },
    [todos, presentID],
  );

  return (
    <PriorityTemplate setPages={setPages}>
      {page === 1 ? (
        <>
          <PriorityInsert onInsert={onInsert} />
          <PriorityList
            todos={todos}
            onRemove={onRemove}
            onToggle={onToggle}
            onTextToggle={onTextToggle}
          />
        </>
      ) : (
        <>
          <PrioritySortedTable todos={todos} />
        </>
      )}
    </PriorityTemplate>
  );
};

export default App;

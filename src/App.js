import { useState, useRef, useCallback } from 'react';
import PriorityTemplate from './components/PriorityTemplate';
import PriorityInsert from './components/PriorityInsert';
import PriorityList from './components/PriorityList';
import PrioritySortedTable from './components/PrioritySortedTable';

const App = () => {
  const [page, setPages] = useState(1);

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '컴퓨터 그래픽스 Chapter 4 복습',
      checked: true,
    },
    {
      id: 2,
      text: '머신러닝 시험 공부',
      checked: false,
    },
    {
      id: 3,
      text: '개별연구 보고서 작성',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  return (
    <PriorityTemplate setPages={setPages}>
      {page === 1 ? (
        <>
          <PriorityInsert onInsert={onInsert} />
          <PriorityList todos={todos} />
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

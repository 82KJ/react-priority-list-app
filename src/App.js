import { useState } from 'react';
import PriorityTemplate from './components/PriorityTemplate';
import PriorityInsert from './components/PriorityInsert';
import PriorityList from './components/PriorityList';
import PrioritySortedTable from './components/PrioritySortedTable';

const App = () => {
  const [page, setPages] = useState(1)

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

  return (
    <PriorityTemplate setPages={setPages}>
      {
        page === 1 ?
        <>
          <PriorityInsert />
          <PriorityList todos={todos}/>
        </>
        :
        <>
          <PrioritySortedTable todos={todos}/>
        </>
      }
    </PriorityTemplate>
  );
};

export default App;

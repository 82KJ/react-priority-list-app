import { useState } from 'react';
import PriorityTemplate from './components/PriorityTemplate';
import PriorityInsert from './components/PriorityInsert';
import PriorityList from './components/PriorityList';

const App = () => {
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
    <PriorityTemplate>
      <PriorityInsert />
      <PriorityList todos={todos}/>
    </PriorityTemplate>
  );
};

export default App;

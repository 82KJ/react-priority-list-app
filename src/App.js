import PriorityTemplate from './components/PriorityTemplate';
import PriorityInsert from './components/PriorityInsert';
import PriorityList from './components/PriorityList';

const App = () => {
  return (
    <PriorityTemplate>
      <PriorityInsert />
      <PriorityList/>
    </PriorityTemplate>
  );
};

export default App;

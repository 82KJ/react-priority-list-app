import PriorityListItem from './PriorityListItem';
import './PriorityList.scss';

const PriorityList = ({ todos }) => {
  return (
    <div className="PriorityList">
      {todos.map((todo) => (
        <PriorityListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default PriorityList;

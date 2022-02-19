import PriorityListItem from './PriorityListItem';
import './PriorityList.scss';

const PriorityList = ({ todos, onRemove }) => {
  return (
    <div className="PriorityList">
      {todos.map((todo) => (
        <PriorityListItem todo={todo} onRemove={onRemove} key={todo.id} />
      ))}
    </div>
  );
};

export default PriorityList;

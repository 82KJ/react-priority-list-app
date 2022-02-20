import PriorityListItem from './PriorityListItem';
import './PriorityList.scss';

const PriorityList = ({ todos, onRemove, onToggle, onTextToggle }) => {
  return (
    <div className="PriorityList">
      {todos.map((todo) => (
        <PriorityListItem
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
          onTextToggle={onTextToggle}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default PriorityList;

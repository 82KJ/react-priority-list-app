import './PrioritySortedTable.scss';

const PrioritySortedTable = ({ todos }) => {
  const sorted_todos = todos.filter((todo) => !todo.checked);
  console.log(sorted_todos);
  
  return (
    <div className="PrioritySortedTable">
      {sorted_todos.map((todo, index) => (
        <div className="element" key={index}>
          {index + 1}. {todo.text}
        </div>
      ))}
    </div>
  );
};

export default PrioritySortedTable;

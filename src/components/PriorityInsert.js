import { MdAdd } from 'react-icons/md';
import './PriorityInsert.scss';

const PriorityInsert = () => {
  return (
    <form className="PriorityInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default PriorityInsert;

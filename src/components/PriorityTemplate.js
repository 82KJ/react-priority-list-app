import './PriorityTemplate.scss';
import { BiAddToQueue } from 'react-icons/bi';
import { BsSortNumericDown } from 'react-icons/bs';

const PriorityTemplate = ({ children, setPages }) => {
  return (
    <div className="PriorityTemplate">
      <div className="app-title">
        <div className="icon">
          <button className="conversion-icon1" onClick={() => setPages(1)}>
            <BiAddToQueue />
          </button>
          <button className="conversion-icon2" onClick={() => setPages(2)}>
            <BsSortNumericDown />
          </button>
        </div>
        <div className="title">Priority Table</div>
      </div>

      <div className="content">{children}</div>
    </div>
  );
};

export default PriorityTemplate;

import './PriorityTemplate.scss';
import { BiAddToQueue } from 'react-icons/bi';
import { BsSortNumericDown } from 'react-icons/bs';

const PriorityTemplate = ({ children }) => {
  return (
    <div className="PriorityTemplate">
      <div className="app-title">
        <div className="conversion-icon">
          <BiAddToQueue />
          &nbsp;
          <BsSortNumericDown />
        </div>
        <div className="title">Priority Table</div>
      </div>

      <div className="content">{children}</div>
    </div>
  );
};

export default PriorityTemplate;

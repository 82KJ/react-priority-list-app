import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './PriorityListItem.scss';

const PriorityListItem = ({ todo }) => {
  const { text, checked } = todo;

  return (
    <div className="PriorityListItem">
      <div className={cn('checkbox', {checked})}>
        {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default PriorityListItem;

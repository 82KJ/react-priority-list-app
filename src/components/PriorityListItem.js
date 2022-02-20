import { useState } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './PriorityListItem.scss';

const PriorityListItem = ({ todo, onRemove, onToggle, onTextToggle }) => {
  const { id, text, checked, clicked } = todo;

  return (
    <div className="PriorityListItem">
      <div className={cn('checkbox', { checked })}>
        <div onClick={() => onToggle(id)}>{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</div>
        <div
          className={cn('text', { clicked })}
          onClick={() => onTextToggle(id)}
        >
          {text}
        </div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default PriorityListItem;

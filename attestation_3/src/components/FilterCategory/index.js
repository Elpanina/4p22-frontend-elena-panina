import React from 'react';
import s from './filter_category.module.css';
import classnames from 'classnames';

function FilterCategory({ name, id, isSelected, onChange }) {
    return (
        <div className={classnames(s.main, {[s.selected]: isSelected })}>
            <input type='checkbox' id={'check'+id} name={name} onChange={onChange} checked={isSelected}/>
            <label htmlFor={'check'+id}>{name}</label>
        </div>
    );
}

export default FilterCategory;
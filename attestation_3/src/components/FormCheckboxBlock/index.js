import React from 'react';
import s from './form_checkbox_block.module.css'

function FormCheckboxBlock({state, setState, id='subscribtion', name='subscribtion', label='Я ознакомлен с политикой обработки персональных данных'}) {

    return (
        <div className={s.formWrapper__checkboxGroup}>
            <input type="checkbox" id={id} name={name} checked={!!state} onChange={event => setState && setState(event.target.checked)} />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}

export default FormCheckboxBlock;
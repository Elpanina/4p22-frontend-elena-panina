import React from 'react';
import s from './form_input_block.module.css'
import classnames from 'classnames';

function FormInputBlock({ state, setState, type = 'text', label, cmp_name, id, placeholder, errorMessage, required=false}) {

    const error = !!errorMessage;

    // отключаем стандартную валидацию
    if (type === 'email' || type === 'tel') {
        type = 'text';
    }

    return (
        <div className={classnames(s.formWrapper__inputGroup, {[s.required]: !!required})}>
            <div>
                <label htmlFor={id}>{label}</label>
                <div className={classnames({[s.hidden]: !error})}>{errorMessage}</div>
            </div>
            <input id={id}
                   type={type}
                   placeholder={placeholder}
                   name={cmp_name}
                   autoComplete="off"
                   value={state}
                   accept={type === 'file' ? 'image/png, image/jpeg, image/gif' : undefined}
                   onChange={event => setState && setState(event.target.value)}/>
        </div>
    );
}

export default FormInputBlock;
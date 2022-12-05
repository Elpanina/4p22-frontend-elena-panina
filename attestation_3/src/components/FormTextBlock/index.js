import React from 'react';
import s from './form_text_block.module.css';
import classnames from 'classnames';

function FormTextBlock({ state, setState, id = 'story', cmp_name='story', label, required=false, errorMessage, rowsConstraint, placeholder }) {

    const error = !!errorMessage;
    return (
        <div className={classnames(s.formWrapper__textGroup, {[s.required]: !!required})}>
            <div>
                <label htmlFor={id}>{label}</label>
                <div className={classnames({[s.hidden]: !error})}>{errorMessage}</div>
            </div>
            <textarea rows={rowsConstraint}
                      id={id}
                      name={cmp_name}
                      value={state}
                      placeholder={placeholder} spellCheck="false" wrap="soft"
                      onChange={event => setState && setState(event.target.value)}
                      autoComplete="off">
            </textarea>
        </div>
    );
}

export default FormTextBlock;
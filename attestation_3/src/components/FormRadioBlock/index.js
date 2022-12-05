import React from 'react';
import s from './form_radio_block.module.css';

function FormRadioBlock({state, setState, name='answer', label='Отправить ответ на электронную почту', options=[]}) {

    function optionChange(event) {
        if (event.target.checked) {
            setState && setState(event.target.value);
        }
    }

    function needToBeChecked(option, index, revert = false) {
        // в checked и defaultChecked нужно ставить либо true, либо undefined
        const condition = (state ? state === option.value : index === 0) && revert;
        return condition || undefined;
    }

    return (
        <div className={s.formWrapper__radioGroup}>
            <label>{label}</label>
            {
                options && options.map((option, index) =>
                    <div className={s.radioGroup__radioItem} key={'chk'+index}>
                        <input type="radio"
                               value={option.value}
                               id={option.id}
                               name={name}
                               checked={needToBeChecked(option, index)}
                               defaultChecked={needToBeChecked(option, index, true)}
                               onChange={optionChange}/>
                        <label htmlFor={option.id}>{option.label}</label>
                    </div>)
            }
        </div>
    );
}

export default FormRadioBlock;
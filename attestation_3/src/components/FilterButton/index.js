import React from 'react';
import s from './filter_button.module.css';
import classnames from 'classnames';
import {ReactComponent as IconDark} from '../../assets/icons/Lupa_dark.svg';
import {ReactComponent as IconLight} from '../../assets/icons/Lupa_light.svg';

function FilterButton({ stateOn, onClick, filtered }) {
    return (
        <div className={s.main}>
            <button className={classnames(s.switchButton, {[s.active]: stateOn && !filtered, [s.filtered]: filtered})} onClick={onClick}>
                {stateOn ? <IconDark/> : <IconLight/>}
            </button>
        </div>
    );
}

export default FilterButton;
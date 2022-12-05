import React from 'react';
import s from './card_button_block.module.css';

function CardButtonBlock({ setCount }) {
    return (
        <React.Fragment>
            <button className={s.card_cell} onClick={() => setCount(1)} title="Добавить товар в корзину">Добавить в корзину</button>
        </React.Fragment>
    );
}

export default CardButtonBlock;
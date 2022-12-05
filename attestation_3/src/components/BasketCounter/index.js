import React from 'react';
import s from './basket_counter.module.css'

function BasketCounter({ itemsCount }) {
    return (
        <div className={s.main}>
            <div className={s.main__counter_block}>
                {itemsCount}
            </div>

        </div>
    );
}

export default BasketCounter;
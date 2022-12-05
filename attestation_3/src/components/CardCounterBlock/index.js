import React from 'react';
import s from './card_counter_block.module.css'
import classnames from 'classnames';

function CardCounterBlock({ currentCount, setCount, goToBasket, vertical = false, buttonLast = false }) {

    function clickUp() {
        setCount(currentCount + 1);
    }

    function clickDown() {
        setCount(currentCount > 0 ? currentCount - 1 : 0)
    }

    return (
        <React.Fragment>
            <div className={classnames(s.main, {[s.vertical]: vertical})}>
                {
                    !buttonLast &&
                    <div className={s.main_buttons_basket}>
                        <button className={s.button_basket} onClick={goToBasket} title="Перейти в корзину">В корзину</button>
                    </div>
                }
                <div className={classnames(s.main_buttons_counter, {[s.vertical_up]: vertical && !buttonLast})}>
                    <button className={classnames(s.button_up, {[s.vertical]: vertical})} onClick={clickUp} title="">+</button>
                    <input className={classnames(s.count, {[s.vertical]: vertical})}
                           value={currentCount} readOnly={true}
                           type="number"
                           title="Количество"/>
                    <button className={classnames(s.button_down, {[s.vertical]: vertical})} onClick={clickDown} title="">-</button>
                </div>
                {
                    buttonLast &&
                    <div className={classnames(s.main_buttons_basket, {[s.vertical_up]: vertical})}>
                        <button className={s.button_basket} onClick={goToBasket} title="Перейти в корзину">В корзину</button>
                    </div>
                }
            </div>
        </React.Fragment>
    );
}

export default CardCounterBlock;
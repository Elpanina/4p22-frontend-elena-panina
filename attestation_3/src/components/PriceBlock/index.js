import React from 'react';
import {getFormattedPrice} from '../../utils/helpers';
import s from './price_block.module.css';

function PriceBlock({price, count}) {
    return (
        <React.Fragment>
            <div className={s.main}>
                { '' + getFormattedPrice(price, 'ru-RU', 'RUB') + (count ? ' x ' + count : '') }
            </div>
        </React.Fragment>
    );
}

export default PriceBlock;
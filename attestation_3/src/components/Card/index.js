import React from 'react';
import s from './card.module.css';
import CardButtonBlock from '../CardButtonBlock';
import CardCounterBlock from '../CardCounterBlock';
import {Link} from 'react-router-dom';
import PriceBlock from "../PriceBlock";

function Card({data, count, setCount, goToBasket}) {

    function shortenDescription(desc) {
        const newDesc = String(desc).substring(0, 69);
        return newDesc + (desc !== newDesc ? '...' : '');
    }

    return (<React.Fragment>
        <div className={s.card} title={data.description}>
            <Link to={`/catalog/item/${data.id}`}>
                <img className={s.card_img} src={data.img} alt={data.title}/>
                <PriceBlock price={data.price}/>
            </Link>
            <div className={s.card_title_block}>
                <Link to={`/catalog/item/${data.id}`}><h3>{data.title}</h3></Link>
                <div className={s.card_description}>{ shortenDescription(data.description) }</div>
            </div>
            {
                count > 0 ? <CardCounterBlock currentCount={count} setCount={setCount} goToBasket={goToBasket}/> :
                    <CardButtonBlock setCount={setCount}/>
            }
        </div>
    </React.Fragment>);
}

export default Card;
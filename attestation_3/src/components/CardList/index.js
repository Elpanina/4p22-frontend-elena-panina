import React from 'react';
import s from './card_list.module.css'
import Card from '../Card';
import {getCountById, updateCountById} from '../../utils/helpers';

function CardList({ cards, counts, setCounts, goToBasket, categories, filteredIds, setFilter }) {

    function cardIsVisible(card) {
        if (!filteredIds) {
            return false;
        } else if (filteredIds.length === 0) {
            return true;
        } else {
            return filteredIds.includes(card.id)
        }
    }

    return (
        <div className={s.container}>
            {
                cards.map((card, index) => cardIsVisible(card) && <Card data={card}
                                                                        count={getCountById(card.id, counts)}
                                                                        setCount={(cnt) => updateCountById(card.id, cnt, counts, setCounts)}
                                                                        goToBasket={goToBasket}
                                                                        key={`card${index}`}/>)
            }
        </div>
    );
}

export default CardList;
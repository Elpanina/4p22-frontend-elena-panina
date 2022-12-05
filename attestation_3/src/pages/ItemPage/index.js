import PageLayout from '../../components/PageLayout';
import {useLoaderData, useNavigate} from 'react-router-dom';
import s from './item_page.module.css';
import Badge from '../../components/Badge';
import CardCounterBlock from '../../components/CardCounterBlock';
import {getCountById, updateCountById} from '../../utils/helpers';
import CardButtonBlock from "../../components/CardButtonBlock";
import PriceBlock from "../../components/PriceBlock";

function ItemPage({ counts, setCounts, isLoaded }) {
    const navigate = useNavigate();
    const loaderData = useLoaderData();

    let card;
    if (isLoaded) {
        card = loaderData.card;
    }

    function goToBasket() {
        navigate('/basket');
    }

    function updateCount(qty) {
        updateCountById(card?.id, qty, counts, setCounts)
    }

    const currentCount = getCountById(card?.id, counts);

    return (
        <PageLayout counts={counts}>
            {
                isLoaded && card &&
                <div className={s.main}>
                    <div className={s.main__view}>
                        <div className={s.main__view_left}>
                            <div className={s.view__title_block}>
                                <h3>{card.title}</h3>
                                <h4>Арт. #{card.id}</h4>
                            </div>
                            <div className={s.view__img_block}>
                                <img alt={card.title} src={card.img}/>
                            </div>
                            <div className={s.view__price_block}>

                            </div>
                            <div className={s.view__price_block}>

                            </div>
                        </div>
                        <div className={s.main__description}>
                            <div className={s.description_text_block}>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className={s.main__counter_block}>
                        <div className={s.counter_block__categories}>
                            {
                                card.categories?.map((category, index)=> <Badge title={category} number={index} key={'k'+index}/>)
                            }
                        </div>
                        <div className={s.counter_block__counter}>
                            {
                                currentCount <= 0
                                    ? <CardButtonBlock setCount={updateCount}/>
                                    : <CardCounterBlock vertical={true}
                                                        goToBasket={goToBasket}
                                                        setCount={updateCount}
                                                        currentCount={currentCount} />
                            }
                        </div>
                        <div className={s.counter_block__price}>
                            <PriceBlock price={card.price} count={currentCount > 1 && currentCount}/>
                            {
                                currentCount > 1 && <PriceBlock price={card.price * currentCount}/>
                            }
                        </div>
                    </div>
                </div>
            }
        </PageLayout>
    );
}

export default ItemPage;
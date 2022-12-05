import PageLayout from '../../components/PageLayout';
import s from './basket_page.module.css'
import {getFormattedPrice, STORAGE_COUNTS_KEY} from "../../utils/helpers";

function BasketPage({ counts, setCounts, cards }) {

    function clearBasket() {
        setCounts({});
        localStorage.removeItem(STORAGE_COUNTS_KEY);
    }

    function createOrder() {
        if (!counts || Object.keys(counts).length === 0) {
            return;
        }
        if (!Object.entries(counts).find(([key, value]) => value > 0)) {
            return;
        }
        const number = Math.round(Math.random() * 1000000);
        const order = { number, items: [], total: 0 };
        for (let [key, value] of Object.entries(counts)) {
            const item = {};
            const card = cards?.find(card => String(card.id) === key);
            item.id = key;
            item.price = card.price;
            item.name = card.title;
            item.qty = value;
            item.total = card?.price * value || 0.0;
            order.items.push(item);
            order.total += !item.total || isNaN(item.total) ? 0 : item.total;
        }
        setTimeout(() => {
            console.log('##order: ', JSON.stringify(order));
            alert(`Уважаемый клиент! Вы успешно оформили заказ #${order.number} на ${getFormattedPrice(order.total, 'ru-RU', 'RUB')}`)
        }, 500);
        clearBasket();
    }

    return (
        <PageLayout counts={counts}>
            <div className={s.main}>
                <div className={s.main__container}>
                    <button onClick={clearBasket}>Очистить Корзину</button>
                    <button onClick={createOrder}>Оформить заказ</button>
                </div>
            </div>
        </PageLayout>
    );
}

export default BasketPage;
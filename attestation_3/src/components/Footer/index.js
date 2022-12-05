import React from 'react';
import s from './footer.module.css'
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className={s.main}>
            <div className={s.footer_feedback_links}>
                <div><Link to='/feedback'>Напишите нам или задайте вопрос</Link></div>
                <div><a href="tel:+79210549336">tel: 8-921-054-93-36</a></div>
                <div><a href="mailto:anazapta123@mail.ru">@mail: anazapta123@mail.ru</a></div>
            </div>
            <div className={s.footer_description}>
                <div>Политика конфиденциальности</div>
                <div>Design by Elena Panina</div>
                <div>(С) 2022 Anazapta-Shop.com</div>
            </div>
        </div>
    );
}

export default Footer;
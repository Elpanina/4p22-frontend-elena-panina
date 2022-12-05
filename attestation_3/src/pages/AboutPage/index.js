import React from 'react';
import s from './about_page.module.css'
import PageLayout from '../../components/PageLayout';

function AboutPage({ counts }) {
    return (
        <PageLayout counts={counts}>
            <div className={s.main}>
                <div className={s.main__container}>
                    <div className={s.main__text_block}>
                        <h1>Немного о нашем магазине.</h1>
                        <h3>Информация уточняется...</h3>
                        <p>Приносим извинения за доставленные неудобства.</p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default AboutPage;
import React from 'react';
import s from './page_layout.module.css'
import Header from '../Header';
import Footer from '../Footer';

function PageLayout({ counts, showFilterButton, showFilter, filtered, setShowFilter, children }) {

    const basketCount = counts && Object.entries(counts).filter(([key, value]) => value && value> 0).length;
    return (
        <React.Fragment>
            <Header basketCount={basketCount}
                    showFilterButton={showFilterButton}
                    filtered={filtered}
                    showFilter={showFilter}
                    setShowFilter={setShowFilter}
            />
            <main className={s.container}>
                {children}
            </main>
            <Footer/>
        </React.Fragment>
    )
}

export default PageLayout;
import React from 'react';
import s from './header.module.css';
import NavBar from '../NavBar';
import AppNavigation from '../../router/navigation';
import logo from '../../assets/1logo.jpg';
import { Link } from 'react-router-dom';

function Header({ basketCount, showFilterButton, filtered, showFilter, setShowFilter }) {

    const title = 'Самая полная информация о косметических средствах, парфюмерии, брендах и нотах: все, что вы искали, — в нашем каталоге.';

    return (
        <div className={s.main}>
            <div className={s.image_block}>
                <Link to={'/home'}><img src={logo} alt="AS" title={title}/></Link>
            </div>
            <div className={s.main_title_block} title={title}>
                <p className={s.first}>Косметика и парфюмерия</p><p>ANAZAPTA-SHOP.COM</p>
            </div>
            <div className={s.main_internal}>
                <NavBar navigation={AppNavigation}
                        basketCount={basketCount}
                        showFilterButton={showFilterButton}
                        filtered={filtered}
                        showFilter={showFilter}
                        setShowFilter={setShowFilter}/>
            </div>
        </div>
    );
}

export default Header;
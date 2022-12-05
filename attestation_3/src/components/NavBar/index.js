import React from 'react';
import s from './nav_bar.module.css'
import {Link, useLocation} from 'react-router-dom';
import classnames from 'classnames';
import BasketCounter from '../BasketCounter';
import FilterButton from '../FilterButton';

function NavBar({ navigation, basketCount, showFilterButton, filtered, showFilter, setShowFilter }) {
    const location = useLocation();

    function isActiveLink(navElem) {
        return navElem.path === location.pathname ? true : isActiveSubLink(navElem);
    }

    function isActiveSubLink(navElem) {
        return navElem.alt && location.pathname.includes(navElem.alt);
    }

    function isNeedToShowCounter(navElem) {
        const result = navElem.hasCounter
            && basketCount
            && basketCount > 0;
        return result;
    }

    function switchFilterVisibility() {
        setShowFilter(prevState => !prevState);
    }

    return (
        <nav className={s.main}>
            <div className={s.main_links}>
                {
                    navigation.map(navigationElement => (
                        <React.Fragment key={'key' + navigationElement.id}>
                            <div className={s.linkElement}>
                                {
                                    navigationElement.hasFilter && showFilterButton ? <FilterButton stateOn={showFilter}
                                                                                                    filtered={filtered}
                                                                                                    onClick={switchFilterVisibility} /> : null
                                }
                                <Link to={navigationElement.path}
                                      className={classnames({
                                          [s.active]: isActiveLink(navigationElement),
                                          [s.sublink]: isActiveSubLink(navigationElement),
                                          [s.margin]: !navigationElement.hasCounter
                                      })}>
                                    {navigationElement.title}
                                </Link>
                                {
                                    isNeedToShowCounter(navigationElement)
                                        ? <BasketCounter itemsCount={basketCount}/>
                                        : navigationElement.hasCounter && <div className={s.margin}/>
                                }
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </nav>
    );
}

export default NavBar;
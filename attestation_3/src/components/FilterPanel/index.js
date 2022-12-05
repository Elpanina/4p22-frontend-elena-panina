import React, {useEffect, useState} from 'react';
import s from './filter_panel.module.css';
import FilterCategory from '../FilterCategory';
import {updateFilter} from '../../utils/helpers';
import useDebounce from '../../utils/useDebounce';

function FilterPanel({ categories, filter, setFilter }) {

    const [search, setSearch] = useState(filter?.search || '');

    const debounced = useDebounce(search, 700);

    useEffect(() => {
        const newFilter = {
            categories: [],
            search: debounced
        };
        if (filter?.categories) {
            newFilter.categories = [...filter.categories];
        }

        setFilter(newFilter);
    }, [debounced])

    function oneCategoryChange(event) {
        const name = event.target.name;
        const checked = event.target.checked;
        updateFilter(checked, name, filter, setFilter);
    }

    function isSelected(category) {
        return filter && filter.categories && filter.categories.includes(category);
    }

    function resetFilter() {
        const emptyFilter = { categories: [], search: '' };
        setSearch('');
        setFilter(emptyFilter);
    }

    return (
        <div className={s.main}>
            <div className={s.main__search_pane}>
                <input type='text' onChange={event => setSearch(event.target.value)} value={search}/>
            </div>
            <div className={s.main__container}>
                {
                    categories && categories.map((category, index) => <FilterCategory key={'ch'+index}
                                                                                      id={index}
                                                                                      name={category}
                                                                                      isSelected={isSelected(category)}
                                                                                      onChange={oneCategoryChange}/>)
                }
                <button type='button' onClick={resetFilter}>Сбросить</button>
            </div>
        </div>
    );
}

export default FilterPanel;
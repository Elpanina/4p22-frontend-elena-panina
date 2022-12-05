export function reduceCategories(accumulator, card) {
    const result = [...accumulator];
    card.categories && card.categories.forEach(category => result.push(category))
    return result;
}

export function updateCategories(data, setCategories) {
    const reduced = data.cards.reduce(reduceCategories, []);
    const categories = [...new Set(reduced).values()];
    setCategories(categories)
}

export function updateCountById(id, count, counts, setCounts) {
    const newState = {...counts};
    newState[id] = count;
    setCounts(newState);
}

export function getCountById(id, counts) {
    return counts[id] && true ? counts[id] : 0;
}

export function prepareItemPageData(params, cards, isLoaded) {
    const itemId = Number(params.id);
    if (isNaN(itemId)) {
        throw new Response('Invalid request', { status: 404 });
    }
    const foundItem = cards.find(card => card.id === itemId);
    if (foundItem !== undefined) {
        return { id: itemId, ...params, card: foundItem }
    } else {
        if (isLoaded) {
            throw new Response('Not fount this item', { status: 404 });
        } else {
            return {id: itemId, ...params, status: 'waiting'}
        }
    }
}

export function filterCardsIds(cards, filter) {
    if (!cards || cards.length === 0) {
        return [];
    }
    if (!filter) {
        return [];
    }
    let categories = [];
    let serchString = undefined;

    if (filter.search && String(filter.search).trim().length > 0) {
        // фильтрация по поисковой строке
        serchString = filter.search;
    }
    if (filter.categories && filter.categories.length > 0)  {
        categories = filter.categories;
    }
    const filteredValues = new Set([]);
    // фильтрация по категориям и поисковой строке
    for (let card of cards) {
        let matchSearch = false;
        if (!serchString) {
            matchSearch = true;
        } else {
            const lowerCaseSearch = serchString.toLowerCase();
            if (card.title.toLowerCase().includes(lowerCaseSearch) || card.description.toLowerCase().includes(lowerCaseSearch)) {
                matchSearch = true;
            }
        }
        for (let category of card.categories) {
            if ((categories.length === 0 || categories.includes(category)) && matchSearch) {
                filteredValues.add(card.id);
            }
        }
    }

    if (filteredValues.size === 0) {
        return undefined;
    } else if (filteredValues.size < cards.length) {
        return [...filteredValues.values()];
    } else {
        return [];
    }
}

export function getFormattedPrice(value, locale, currency) {
    const numberFormat = Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    });
    return numberFormat.format(value);
}

export function updateFilter(checked, name, filter, setFilter) {
    const filterCategories = new Set();
    if (filter && filter.categories && filter.categories.length > 0) {
        filter.categories.forEach(category => filterCategories.add(category));
    }

    if (checked) {
        filterCategories.add(name);
    } else {
        filterCategories.delete(name);
    }

    const newCategories = [...filterCategories];
    const newFilter = {
        categories: newCategories,
        search: filter.search || ''
    };
    setFilter(newFilter);
}

export const STORAGE_COUNTS_KEY = 'storage.shopcart.counts';
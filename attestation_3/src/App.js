import React, {useEffect, useState} from 'react';
import './App.css';
import {createHashRouter as createRouter, Navigate, RouterProvider} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import CatalogPage from './pages/CatalogPage';
import ItemPage from './pages/ItemPage';
import BasketPage from './pages/BasketPage';
import FeedbackPage from './pages/FeedbackPage';
import {prepareItemPageData, STORAGE_COUNTS_KEY, updateCategories} from './utils/helpers';
import AboutPage from './pages/AboutPage';

function appRouter(counts, setCounts, cards, categories, showFilter, setShowFilter, filter, setFilter, isLoaded) {
    return createRouter([
        {
            path: '/',
            element: <Navigate to='/catalog' replace/>,
            errorElement: <ErrorPage/>
        },
        {
            path: '/home',
            element: <Navigate to='/catalog' replace/>,
            errorElement: <ErrorPage/>
        },
        {
            path: '/catalog',
            element: <CatalogPage counts={counts}
                                  setCounts={setCounts}
                                  cards={cards}
                                  categories={categories}
                                  showFilter={showFilter}
                                  setShowFilter={setShowFilter}
                                  filter={filter}
                                  setFilter={setFilter}/>,
            errorElement: <ErrorPage/>
        },
        {
            path: '/catalog/item/:id',
            element: <ItemPage cards={cards}
                               counts={counts}
                               setCounts={setCounts}
                               isLoaded={isLoaded}/>,
            loader: ({ request, params }) => prepareItemPageData(params, cards, isLoaded),
            errorElement: <ErrorPage/>
        },
        {
            path: '/basket',
            element: <BasketPage counts={counts}
                                 setCounts={setCounts}
                                 cards={cards}/>,
            errorElement: <ErrorPage/>
        },
        {
            path: '/feedback',
            element: <FeedbackPage counts={counts}/>,
            errorElement: <ErrorPage/>
        },
        {
            path: '/about',
            element: <AboutPage counts={counts}/>,
            errorElement: <ErrorPage/>
        },
        {
            element: <ErrorPage/>
        }
    ]);
}

function App() {
    const [cards, setCards] = useState([]);
    const [counts, setCountsState] = useState(countsFromStorage());
    const [categories, setCategories] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [filter, setFilter] = useState({ categories: [], search: ''});

    function countsFromStorage() {
        let storedItem;
        try {
            storedItem = localStorage.getItem(STORAGE_COUNTS_KEY);
        } catch (error) {
            console.log('невалидный json');
        }

        if (storedItem) {
            const storedCounts = JSON.parse(storedItem);
            return storedCounts || {};
        } else {
            return {}
        }

    }

    function setCounts(countsToStore) {
        localStorage.setItem(STORAGE_COUNTS_KEY, JSON.stringify(countsToStore));
        setCountsState(countsToStore);
    }

    useEffect(() => {
        fetch('https://run.mocky.io/v3/cc4a7300-f815-4404-b1a9-bbbd433e2011')
            .then(response => response.json())
            .then(data => {
                setCards(data.cards)
                return data;
            })
            .then(data => {
                updateCategories(data, setCategories);
                setIsLoaded(true);
            });
    }, []);

    return (
        <RouterProvider router={ appRouter(counts, setCounts, cards, categories, showFilter, setShowFilter, filter, setFilter, isLoaded) }/>
    );
}

export default App;
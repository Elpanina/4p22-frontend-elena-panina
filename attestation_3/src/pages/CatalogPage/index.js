import PageLayout from '../../components/PageLayout';
import CardList from '../../components/CardList';
import {useNavigate} from 'react-router-dom';
import FilterPanel from '../../components/FilterPanel';
import {filterCardsIds} from '../../utils/helpers';

function CatalogPage({ counts, setCounts, cards, categories, showFilter, setShowFilter, filter, setFilter }) {

    const navigate = useNavigate();
    function goToBasket() {
        navigate('/basket');
    }

    function isFiltered(categories, filter, filteredIds) {
        if (filter?.search?.length > 0) {
            return true;
        } else if (filteredIds && filteredIds.length > 0) {
            return categories.length !== filter?.categories?.length;
        } else {
            return false;
        }
    }

    const filteredIds = filterCardsIds(cards, filter);

    return (
        <PageLayout showFilter={showFilter}
                    showFilterButton={true}
                    filtered={ isFiltered(categories, filter, filteredIds) }
                    setShowFilter={setShowFilter}
                    counts={counts} >
            {
                showFilter && <FilterPanel categories={categories} filter={filter} setFilter={setFilter}/>
            }
            {
                cards && cards.length > 0 && <CardList cards={cards}
                                                       counts={counts}
                                                       setCounts={setCounts}
                                                       goToBasket={goToBasket}
                                                       categories={categories}
                                                       filteredIds={filteredIds}
                                                       setFilter={setFilter} />
            }
        </PageLayout>
    );
}

export default CatalogPage;
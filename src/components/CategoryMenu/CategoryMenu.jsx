import '../../styles/CategoryMenu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory, resetFilter } from '../../reducers/productReducer.js';
import { useEffect, useState } from 'react';

const CategoryMenu = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.list);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        handleClearFilter()
    }, []);

    const handleCategoryClick = (category) => {
        dispatch(filterByCategory(category));
        setActiveCategory(category);
    }

    const handleClearFilter = () => {
        dispatch(resetFilter());
        setActiveCategory(null);
    }
    return (
        <div className="category">
            <div className='category__container container'>
                <ul className='category__container-list' >
                    <li className={`category__container-list--item ${activeCategory === null ? 'active' : ''}`}>
                        <button onClick={handleClearFilter} className='btn-reset'>ALL</button>
                    </li>
                    {categories.map(category => (
                        <li
                            key={category.id}
                            className={`category__container-list--item ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            <button className='btn-reset'>{category.category_name}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CategoryMenu;
import { useEffect } from 'react';
import '../../scss/Home.scss';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Products from '../Products/Products.jsx';
import Poster from '../Poster/Poster.jsx';
import CategoryMenu from '../CategoryMenu/CategoryMenu.jsx';
import Header from '../Header/Header.jsx';
import Spinner from 'react-bootstrap/Spinner';

const Home = () => {
    const productList = useSelector(state => state.products.filtered);
    const isLoading = useSelector(state => state.products.isLoading);
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <Header />
            <section className='home'>
                <div className='home__container'>
                    <div className='home__container-poster'>
                        <Poster />
                    </div>

                    <div className='home__container-catalog' >
                        <h2 className='home__catalog-title' id="news">Новости</h2>
                        <CategoryMenu />

                        {isLoading ? (
                            <div style={{ display: 'flex', justifyContent: 'center', margin: '100px 0', height: '100vh' }}>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        ) : (
                            productList && productList.length > 0 ? (
                                <Products productList={productList} isLoading={isLoading} />
                            ) : (
                                <div className='home__catalog-title' style={{ margin: '100px 0' }}>
                                    No products available
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
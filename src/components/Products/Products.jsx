import loadingIcon from '../../assets/Spinner-1s-200px.gif';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchDataAsyncAction } from "../../redux/thunk";
import Error from '../Error';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector(state => state.products.productsList);
    const loading = useSelector(state => state.products.loading)
    const error = useSelector(state => state.products.error);
    const loaded = useSelector(state => state.products.loaded);

    useEffect(() => {
        dispatch(fetchDataAsyncAction());
    }, [])

    useEffect(() => {
        if (error) {
            navigate("/error")
        }

    }, [error])


    return (
        <div id='container'>
            <h2>Products</h2>
            {loading && !loaded && <div id='iconDiv'><img id='icon' src={loadingIcon} alt='loading...' /></div >}
            {products.length > 0 &&
                <div id='prod'>
                    {products.map(product => (
                        <Product key={product.id} product={product} id="products" />
                    ))}
                </div>
            }
        </ div>
    )
}

export default Products;
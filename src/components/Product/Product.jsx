import { addToCart } from '../../redux/cartSlice';
import './Product.css'
import { useDispatch, useSelector } from 'react-redux';

const Product = ({ product }) => {

    const productsOrdered = useSelector(state => state.cart.productsInCart)
    const dispatch = useDispatch();

    const add = () => dispatch(addToCart({
        id: product.id,
        img: product.images[0],
        title: product.title,
        price: product.price,
        intermediateSum: product.price,
        amount: 1
    }))

    return (
        <div className='product'>
            <div >
                <img id='img' src={product.images[0]} alt={product.title} />
                <div id='wording'>
                    <h5>{product.title}</h5>
                    <p>{product.description}</p>
                    <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                    <button className={productsOrdered.find(prod => product.id === prod.id) ? "disabled" : ""}
                        onClick={() => add()} >add to cart</button>
                </div>
            </div>
        </div >
    );
};

export default Product;
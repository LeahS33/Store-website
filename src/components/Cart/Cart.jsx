import { useDispatch, useSelector } from "react-redux";
import "./Cart.css"
import { addAmount, calcTotalPrice, finishOrder, removeAmount, removeFromCart, setDelivery } from "../../redux/cartSlice";
import { useEffect, useState } from "react";
import Popup from "../Popup/Popup";





const Cart = () => {


    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const products = useSelector(state => state.cart.productsInCart);
    const _totalPrice = useSelector(state => state.cart.totalPrice);
    const deliver = useSelector(state => state.cart.delivery);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calcTotalPrice());
    }, [products])

    const handleCheckout = () => {
        setIsPopupOpen(true);
    };

    const confirmCheckout = () => {
        dispatch(finishOrder());
        setIsPopupOpen(false);
        if (deliver)
            dispatch(setDelivery())
    };

    const cancelCheckout = () => {
        setIsPopupOpen(false);
    };

    return (
        <div id="table" style={{ marginTop: "65px" }}>
            <table>
                <thead>
                    <tr>
                        <th>product</th>
                        <th>price</th>

                        <th>amount</th>
                        <th>intermediate price</th>

                        <th>delete product</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="row">
                            <td className="title-img-cell">
                                <h5>{product.title}</h5>
                                <img id="img1" src={product.img} alt={`Product: ${product.title}`} />
                            </td>
                            <td>
                                <p>${product.price.toFixed(2)}</p>
                            </td>
                            <td>
                                <span>
                                    <button className={product.amount <= 1 ? "button-disabled" : "button"}
                                        onClick={() => { dispatch(removeAmount(product.id)) }}>-</button>
                                    <b>{product.amount}</b>
                                    <button className="button"
                                        onClick={() => dispatch(addAmount(product.id))}>+</button>
                                </span>
                            </td>
                            <td>
                                <span>${(product.intermediateSum).toFixed(2)}</span>
                            </td>
                            <td>
                                <button className="button" onClick={() => { dispatch(removeFromCart(product.id)) }}>delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <strong id="price">Total Price: ${(_totalPrice).toFixed(2)}</strong>
            <br />
            <br />
            <label>
                <input id="checkbox" type="checkbox" checked={deliver} onChange={() => dispatch(setDelivery())} />
                delivery to home
            </label>

            <button id="finish" onClick={handleCheckout} disabled={products.length === 0}
                className={products === 0 ? "button-disabled" : ""}>For payment and booking</button>
            <br />
            <br />
            {isPopupOpen && (
                <Popup
                    message="Are you sure you want to finish your order?"
                    onConfirm={confirmCheckout}
                    onCancel={cancelCheckout}
                />
            )}

        </div>
    );

};

export default Cart;
import { useEffect, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
const CartThumb = ({ onViewItem, cart }) => {
    const [cnt, setCnt] = useState(cart.length);
    useEffect(() => {
        setCnt(cart.length);
    }, [cart]);
    return (
        <div className="cart-icon" onClick={onViewItem}>
            <FaCartShopping />
            <div className="cart-num">{cnt}</div>
        </div>
    );
};

export default CartThumb;

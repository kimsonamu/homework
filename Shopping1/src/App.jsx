import './components/Product.scss';
import Product from './components/Product';
import CartItem from './components/CartItem';
import CartList from './components/CartList';
import data from './assets/api/js/product.list';
import { useRef, useState, useEffect } from 'react';
function App() {
    const [curData, setCurData] = useState(data[0]);
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
    const [bViewDet, setBViewDet] = useState(false);
    const [bViewCart, setBViewCart] = useState(false);
    const [bPopup, setBPopup] = useState(false);
    const [text, setText] = useState('');
    const no = useRef(cart.length > 0 ? cart[cart.length-1].id:1);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    function fAlert(msg) {
        setText(msg);
        setBPopup(true);
        setTimeout(() => {
            setBPopup(false);
        }, 2000);
        return;
    }
    const onViewItem = () => {
        if (cart.length < 1) {
            fAlert('장바구니가 비었습니다.');
            return;
        }
        setBViewCart(true);
    };
    const onAddItem = (idx) => {
        setCurData(data.find((item) => item.id === idx));
        setBViewDet(true);
    };
    const fCngCart = (item) => {
        item = fCheckCart(item);
        if (!item) return;
        setCart(cart.map((c) => (c.num === item.num ? { ...c, amount: item.amount } : c)));
        fAlert('장바구니를 업데이트 하였습니다.');
    };
    const fCheckCart = (item) => {
        item.amount = Number(item.amount);
        if (Number.isNaN(item.amount)) return false;
        return item;
    };
    const onAddCart = (item) => {
        item = fCheckCart(item);
        if (!item) return;
        if (cart.find((c) => c.num === item.num)) fCngCart(item);
        else {
            setCart([...cart, { ...item, id: no.current }]);
            no.current++;
            fAlert('장바구니에 추가하였습니다.');
        }
    };
    const onUpdate = (item) => {
        item = fCheckCart(item);
        if (!item) return;
        if (item.amount < 1 && confirm('해당 상품의 금액이 0원입니다. 삭제하시겠습니까?')) {
            onDelete(item);
            return;
        }
        fCngCart(item);
    };
    const onDelete = (item) => {
        setCart(cart.filter((c) => c.id !== item.id));
        fAlert('삭제하였습니다.');
    };
    const onOrder = () => {
        fAlert('주문하였습니다.');
        setBViewCart(false);
        setBViewDet(false);
        setCart([]);
    };
    return (
        <div className="shopping">
            <ShopPopup bPopup={bPopup} text={text} />
            <div className="product">
                <Product onViewItem={onViewItem} data={data} onAddItem={onAddItem} cart={cart} />
            </div>
            <div className={`cart-item${bViewDet ? ' on' : ''}`}>{bViewDet && <CartItem curData={curData} onAddCart={onAddCart} cart={cart} />}</div>
            <div className={`cart-list${bViewCart ? ' on' : ''}`}>{bViewCart && <CartList cart={cart} data={data} onUpdate={onUpdate} onDelete={onDelete} onOrder={onOrder} />}</div>
        </div>
    );
}
const ShopPopup = ({ bPopup, text }) => {
    return <div className={`popup-layer${bPopup ? ' on' : ''}`}>{text}</div>;
};
export default App;

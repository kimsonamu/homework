import { useEffect, useState } from 'react';

const CartItem = ({ curData, onAddCart, cart }) => {
    const { id, price, title } = curData;
    let i = cart.find((item) => item.num === id);
    i = i === undefined ? -1 : i.amount;
    const [count, setCount] = useState(i > 0 ? i : 1);
    // if(count !== i) setCount(i > 0 ? i : 1);
    useEffect(()=>{
        setCount(i > 0 ? i : 1);
    },[curData])
    let objCurData = { num: id, amount: count };
    const onChngInput = (e) => {
        const { name, value } = e.target;
        objCurData = { ...objCurData, [name]: value };
        setCount(value);
    };
    const onAdd = () => {
        onAddCart(objCurData);
        objCurData = { num: id, amount: count };
    };
    // const arr =[...Array(8).keys()].map(i => i + 1);
    return (
        <>
            <h2>{title}</h2>
            <dl>
                <dt>판매가</dt>
                <dd>{new Intl.NumberFormat().format(price)}원</dd>
                <dt>수량</dt>
                <dd>
                    <select name="amount" id="amount" value={count} onChange={onChngInput}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </dd>
            </dl>
            <button onClick={onAdd}>장바구니</button>
        </>
    );
};

export default CartItem;

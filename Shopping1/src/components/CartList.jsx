import { useEffect, useState } from 'react';
import CartListItem from './CartListItem';
import './CartList.scss';

const CartList = ({ cart, data, onUpdate, onDelete, onOrder }) => {
    let total = [];
    const tCart = cart.map((item) => {
        const { id, ...r } = data.filter((it) => it.id === item.num)[0];
        total = [...total, item.amount * r.price];
        return { ...item, ...r };
    });
    const [nCach, setNCash] = useState(total.reduce((a, c) => a + c, 0));
    useEffect(() => {
        setNCash(total.reduce((a, c) => a + c, 0));
    }, [total]);
    return (
        <>
            <table>
                <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w3" />
                    <col className="w4" />
                </colgroup>
                <thead>
                    <tr>
                        <th>상품</th>
                        <th>수량</th>
                        <th>금액</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tCart.map((item) => (
                        <CartListItem key={item.id} item={item} onUpdate={onUpdate} onDelete={onDelete} />
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">총금액 : {new Intl.NumberFormat().format(nCach)}원</td>
                    </tr>
                </tfoot>
            </table>
            <button onClick={onOrder}>주문하기</button>
        </>
    );
};

export default CartList;

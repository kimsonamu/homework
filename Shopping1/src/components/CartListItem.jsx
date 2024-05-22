import { useEffect, useState } from 'react';

const CartListItem = ({ item, onDelete, onUpdate }) => {
    // console.log(item);
    const [amount, setAmount] = useState(item.amount);
    let cData = { id: item.id, amount, num: item.num };
    const onChngInput = (e) => {
        const { value } = e.target;
        if (Number.isNaN(value.trim())) return false;
        setAmount(value);
        cData = { ...cData, amount: value };
    };
    useEffect(() => {
        setAmount(item.amount);
    }, [item.amount]);
    return (
        <tr>
            <td>
                <img src={item.imgurl} alt={item.title} />
                {item.title}
            </td>
            <td>
                <input type="number" name="amount" id="amount" min={1} max={8} onInput={onChngInput} value={amount} />
            </td>
            <td>{new Intl.NumberFormat().format(item.price * amount)}원</td>
            <td>
                <button onClick={() => onUpdate(cData)}>수정</button>
                <button onClick={() => onDelete(cData)}>삭제</button>
            </td>
        </tr>
    );
};

export default CartListItem;

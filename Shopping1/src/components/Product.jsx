import CartThumb from './CartThumb';
import ProductList from './ProductList';

const Product = ({ onViewItem, data, onAddItem, cart }) => {
    return (
        <>
            <h2>상품리스트</h2>
            <CartThumb onViewItem={onViewItem} cart={cart} />
            <ul className="list">
                {data.map((item) => (
                    <ProductList key={item.id} item={item} onAddItem={onAddItem} />
                ))}
            </ul>
        </>
    );
};

export default Product;

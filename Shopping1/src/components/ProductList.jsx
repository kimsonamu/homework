const ProductList = ({item,onAddItem}) => {
    return <li>
        <img src={item.imgurl} alt={item.title} onClick={()=>onAddItem(item.id)} />
    </li>;
};

export default ProductList;

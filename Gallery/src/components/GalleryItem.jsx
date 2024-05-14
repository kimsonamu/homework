import PropTypes from 'prop-types';
const GalleryItem = ({ item, fSetImg }) => {
    return (
        <li onClick={() => fSetImg(item.id)}>
            <img src={item.imgurl} alt={item.title} />
        </li>
    );
};
GalleryItem.propTypes = {
    item: PropTypes.any,
    fSetImg: PropTypes.func,
};
export default GalleryItem;

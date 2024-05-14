import PropTypes from 'prop-types';
import './GalleryBig.scss';
const GalleryBig = ({ item }) => {
    return (
        <>
            <h2>{item.title}</h2>
            <img src={item.bimg} alt={item.title} />
        </>
    );
};
GalleryBig.propTypes = {
    item: PropTypes.any,
};
export default GalleryBig;

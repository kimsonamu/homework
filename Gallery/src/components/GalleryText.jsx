import PropTypes from 'prop-types';
import './GalleryText.scss'
const GalleryText = ({ item }) => {
    return (
        <>
            <strong>{item.title}</strong>
            <p>{item.desc}</p>
        </>
    );
};
GalleryText.propTypes = {
    item: PropTypes.object,
};
export default GalleryText;

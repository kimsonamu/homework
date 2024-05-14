import GalleryItem from './GalleryItem';
import PropTypes from 'prop-types';
import './GalleryList.scss';

const GalleryList = ({ data, fSetImg }) => {
    return (
        <ul className="list">
            {data.map((item) => (
                <GalleryItem key={item.id} item={item} fSetImg={fSetImg} />
            ))}
        </ul>
    );
};
GalleryList.propTypes = {
    data: PropTypes.any,
    fSetImg: PropTypes.func,
};
export default GalleryList;

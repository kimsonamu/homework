import GalleryBig from './GalleryBig';
import GalleryList from './GalleryList';
import PropTypes from 'prop-types';
import './GalleryView.scss';

const GalleryView = ({ data, imgNum,fSetImg }) => {
    const item = data[imgNum];
    return (
        <>
            <div className="bigimg">
                <GalleryBig item={item} />
            </div>
            <GalleryList data={data} imgNum={imgNum} fSetImg={fSetImg} />
        </>
    );
};
GalleryView.propTypes = {
    data: PropTypes.any,
    imgNum: PropTypes.number,
    fSetImg: PropTypes.func
};
export default GalleryView;

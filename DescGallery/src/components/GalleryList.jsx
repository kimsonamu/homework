import './GalleryList.scss';
import GalleryListItem from './GalleryListItem';
import PropTypes from 'prop-types';
const GalleryList = ({ data,fSetImg,curData }) => {
    return (
        <dl>
            {data.map((item) => (
                <GalleryListItem key={item.id} item={item} curData={curData} fSetImg={fSetImg} />
            ))}
        </dl>
    );
};
GalleryList.propTypes = {
    data: PropTypes.any,
    fSetImg: PropTypes.func,
    curData: PropTypes.object,
    nMxCnt: PropTypes.number,
};
export default GalleryList;

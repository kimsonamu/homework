import PropTypes from 'prop-types';
const GalleryItem = ({ item, fSetImg,curData }) => {
    const { id, imgurl, title } = item;
    const fUpdImg = (num=0) => {
        num--;
        fSetImg(num);
    };
    return (
        <li onClick={() => fUpdImg(id)} className={curData.id===id?'on':''}>
            <img src={imgurl} alt={title} />
        </li>
    );
};
GalleryItem.propTypes = {
    item: PropTypes.any,
    fSetImg: PropTypes.func,
    curData: PropTypes.object,
};
export default GalleryItem;

import PropTypes from 'prop-types';
const GalleryListItem = ({ item,fSetImg,curData }) => {
    function fUdtImg(num=0) {
        fSetImg(num);
    }
    return (
        <>
            <dt onClick={()=>fUdtImg(item.id-1)} className={item===curData?'on':''}>{item.title}</dt>
            <dd className={item===curData?'on':''}>{item.desc}</dd>
        </>
    );
};
GalleryListItem.propTypes = {
    item: PropTypes.any,
    fSetImg: PropTypes.func,
    curData: PropTypes.object,
};
export default GalleryListItem;

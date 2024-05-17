import PropTypes from 'prop-types';
import {SlArrowLeft} from "react-icons/sl";
const GalleryListItem = ({ item,fSetImg,curData }) => {
    function fUdtImg(num=0) {
        fSetImg(num);
    }
    return (
        <>
            <dt onClick={()=>fUdtImg(item.id-1)} className={item===curData?'on':''}>{item.title}<SlArrowLeft /></dt>
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

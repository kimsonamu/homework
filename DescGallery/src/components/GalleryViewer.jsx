import './GalleryViewer.scss';
import GalleryItem from './GalleryItem';
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";
import PropTypes from 'prop-types';

const GalleryViewer = ({ data, fSetImg, curData }) => {
    const { bimg, title,id } = curData;
    function fUptImg(flag) {
        let num = id -1 <=0 && flag < 0 ? data.length : id -1;
        fSetImg(num + flag);
    }
    return (
        <>
            <div className="bimg-view">
                <h2>{title}</h2>
                <span>
                    {id} / {data.length}
                </span>
                <img src={bimg} alt={title} />
            </div>
            <div className="thumblist">
                <ul>
                    {data.map((item) => (
                        <GalleryItem key={item.id} item={item} fSetImg={fSetImg} curData={curData} />
                    ))}
                </ul>
                <div className="btns">
                    <button onClick={()=>fUptImg(-1)}><SlArrowLeft /></button>
                    <button onClick={()=>fUptImg(1)}><SlArrowRight /></button>
                </div>
            </div>
        </>
    );
};
GalleryViewer.propTypes = {
    data: PropTypes.any,
    fSetImg: PropTypes.func,
    curData: PropTypes.object,
};
export default GalleryViewer;

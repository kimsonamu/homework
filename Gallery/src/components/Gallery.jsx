import data from '../assets/api/imgInfoList';
import { useState } from 'react';
import GalleryView from './GalleryView';
import GalleryText from './GalleryText';
import './Gallery.scss';

const Gallery = () => {
    const [imgNum, setImgNum] = useState(0);
    const fSetImg = (num = 0) => {
        num = Number.isNaN(num) || num > data.length ? 0 : num;
        setImgNum(num-1);
        setItem(data[num-1]);
    };
    const [item, setItem] = useState(data[imgNum]);
    return (
        <div className="wrap">
            <article className="bigView">
                <GalleryView data={data} imgNum={imgNum} fSetImg={fSetImg} />
            </article>
            <article className="info">
                <GalleryText item={item} />
            </article>
        </div>
    );
};

export default Gallery;

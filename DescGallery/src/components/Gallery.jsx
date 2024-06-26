import './Gallery.scss';
import GalleryList from './GalleryList';
import GalleryViewer from './GalleryViewer';
import data from '../assets/api/imgInfoList';
import { useState } from 'react';
const Gallery = () => {
    const [curData,setCurData] = useState(data[0]);
    const fSetImg = (num = 0) => {
        num %= data.length;
        setCurData(data[num])
    };
    return (
        <div className="wrap">
            <div className="viewer">
                <GalleryViewer data={data} curData={curData} fSetImg={fSetImg} />
            </div>
            <div className="list">
                <GalleryList data={data} fSetImg={fSetImg} curData={curData} />
            </div>
        </div>
    );
};

export default Gallery;

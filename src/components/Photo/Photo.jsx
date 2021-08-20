import { useState } from 'react';
import './Photo.scss';
import photo1 from './assets/1.jpg';
import photo2 from './assets/2.jpg';
import photo3 from './assets/3.jpg';
import photo4 from './assets/4.jpg';
import photo5 from './assets/5.jpg';
import photo6 from './assets/6.jpg';
import photo7 from './assets/7.jpg';

const Photo = () => {
  const dataImg = [
    {
      id: 1,
      src: photo1,
    },
    {
      id: 2,
      src: photo2,
    },
    {
      id: 3,
      src: photo3,
    },
    {
      id: 4,
      src: photo4,
    },
    {
      id: 5,
      src: photo5,
    },
    {
      id: 6,
      src: photo6,
    },
    {
      id: 7,
      src: photo7,
    },
  ];
  const [modal, setModal] = useState(false);
  const [tmpSrcImg, setTmpSrcImg] = useState('');
  const getImg = src => {
    setTmpSrcImg(src);
    setModal(true);
  };
  return (
    <>
      <div className={modal ? 'modal open' : 'modal'}>
        <img src={tmpSrcImg} alt="photo" />
        <i className="fa fa-times" onClick={() => setModal(false)}></i>
      </div>
      <div className="gallery-wrap">
        <div className="gallery">
          {dataImg.map((item, index) => {
            return (
              <div
                className="imgs"
                key={index}
                onClick={() => getImg(item.src)}
              >
                <img src={item.src} alt="photo" style={{ width: '100%' }} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Photo;

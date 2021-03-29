import { AiOutlineLeftSquare, AiOutlineRightSquare } from 'react-icons/ai';
import { useState, useEffect } from 'react';

const Carousel = ({
  mainImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage
}) => {

  const [images, setImages] = useState([
    { source: '', title: 'Car 1' },
    { source: '', title: 'Car 2' },
    { source: '', title: 'Car 3' },
    { source: '', title: 'Car 4' },
    { source: '', title: 'Car 5' },
  ]);

  useEffect(() => {
    setImages(prevState => ({
       ...prevState,
       [0]: {source: `${mainImage}`},
       [1]: {source: `${secondImage}`},
       [2]: {source: `${thirdImage}`},
       [3]: {source: `${fourthImage}`},
       [4]: {source: `${fifthImage}`}
    }));
  }, [mainImage, secondImage, thirdImage, fourthImage, fifthImage])

  let [currentPosition, setCurrentPosition] = useState(0);
  let currentSlide = images[currentPosition];

  const arrowRightClick = () => {
      currentPosition !== 4 && setCurrentPosition(currentPosition + 1);
      currentSlide = images[currentPosition];
  }

  const arrowLeftClick = () => {
      currentPosition !== 0 && setCurrentPosition(currentPosition - 1);
      currentSlide = images[currentPosition];
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPosition((prev) => {
        return prev + 1 === 5 ? 0 : prev + 1;
      });
    }, 3500);
    return () => {
      clearInterval(intervalId);
    };
  }, [])

  return (
    <>
      <div className='carousel-container'>
        <div className='slider'>
          <div
            className={`arrow left ${currentPosition === 0 ? 'grey-color' : 'arrowHover'}`}
            onClick={arrowLeftClick}>
            <AiOutlineLeftSquare className='arrow-style' />
          </div>
          <img
            src={currentSlide.source}
            alt={currentSlide.title}
            title={currentSlide.title}
            className='slider-img'
          />
          <div
            className={`arrow right ${currentPosition === 4 ? 'grey-color' : 'arrowHover'}`}
            onClick={arrowRightClick}>
            <AiOutlineRightSquare className='arrow-style' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel;

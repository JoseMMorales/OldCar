import { useContext, useState, useEffect } from 'react';
import { Context } from '../../../Context';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const Carousel = () => {
  const { data } = useContext(Context);

  const [slides] = useState([
      {
          source: "/img/IMG1.jpg",
          title: "Car 1"
      },
      {
          source: "/img/IMG2.jpg",
          title: "Car 2"
      },
      {
          source: "/img/IMG3.jpg",
          title: "Car 3"
      },
      {
        source: "/img/IMG4.jpg",
        title: "Car 4"
      },
      {
        source: "/img/IMG5.jpg",
        title: "Car 5"
    },
  ]);

  let [currentPosition, setCurrentPosition] = useState(0);
  let currentSlide = slides[currentPosition];

  const arrowRightClick = () => {
      currentPosition !== slides.length -1 ?
      setCurrentPosition(currentPosition + 1) : setCurrentPosition(currentPosition = 0);
      currentSlide = slides[currentPosition];
  }

  const arrowLeftClick = () => {
      currentPosition !== 0 ?
      setCurrentPosition(currentPosition - 1) : setCurrentPosition(currentPosition = slides.length - 1);
      currentSlide = slides[currentPosition];
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPosition((prev) => {
        return prev + 1 === slides.length ? 0 : prev + 1;
      });
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [])

  return (
    <>
      <div className="carousel-container">
        <div className="slider">
          <div className="arrow left" onClick={arrowLeftClick}>
            <FaArrowAltCircleLeft />
          </div>
          <img
            src={currentSlide.source}
            alt={currentSlide.title}
            title={currentSlide.title}
            className="slider-img"
          />
          <div className="arrow right" onClick={arrowRightClick}>
            <FaArrowAltCircleRight />
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel;

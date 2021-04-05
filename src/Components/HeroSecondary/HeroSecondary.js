import { Context } from '../../Context';
import { motion } from 'framer-motion';
import { useContext } from 'react';

const HeroSecondary = ({ src, text, imgClass }) => {
  const { screenInnerWith } = useContext(Context);

  return (
      <div
        className='heroSecondary'
        style={{backgroundImage: src }}>
        <motion.h1
          className='caption-hero'
          initial={{x: screenInnerWith}}
          animate={{x: 0}}
          transition={{
            type: 'spring',
            stiffness: 160
          }}>
          {text}
        </motion.h1>
        <motion.img className={`car-hero ${imgClass}`}
          src='/img/car.png'
          alt='car-img'
          initial={{x: -(screenInnerWith)}}
          animate={{x: 15}}
          transition={{default: { duration: 4 }}}
        />
      </div>
  )
}

export default HeroSecondary;

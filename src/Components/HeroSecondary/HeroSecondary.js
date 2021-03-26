import { motion } from 'framer-motion';

const HeroSecondary = ({ src, text, imgClass }) => {

  return (
      <div
        className='heroSecondary'
        style={{backgroundImage: src }}>
        <motion.h1
          className='caption-hero'
          initial={{x: 1000}}
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
            initial={{x: -1000}}
            animate={{x: 15}}
            transition={{delay: 0.5, default: { duration: 4 }}}
          />
      </div>
  )
}

export default HeroSecondary;

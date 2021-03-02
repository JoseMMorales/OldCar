import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AiFillUpSquare } from 'react-icons/ai';

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const visibleVariants = {visible: {display: 'block'}, noVisible: {display: 'none'}};
  const movingVariants = {initial: { y: 0 }, ending: { y: '-40vh' }};

  const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 100){
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 100){
        setShowScroll(false);
      };
    }
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  },[showScroll]);

  return (
    <motion.div
      className='scrollTopContainer'
      animate={showScroll ? 'visible' : 'noVisible'}
      variants={visibleVariants}>
      <motion.div
        animate={showScroll ? 'initial' : 'ending'}
        transition={{ type: 'spring', stiffness: 120 }}
        variants={movingVariants}>
        <AiFillUpSquare
          className='scrollTop'
          onClick={scrollTop}
        />
      </motion.div>
    </motion.div>
  )
}

export default BackToTop;

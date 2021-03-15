import { motion } from 'framer-motion';
import { useState } from 'react';
import  ContactForm  from '../ContactForm/ContactForm';

const Contact = () => {
  const [scale, setScale] = useState(false);

  const scaleVariants = {
    notScaled:{ x: 0 },
    scaledLeft:{ x: 20 },
    scaledRight:{ x : -20 }
  };

  return (
    <>
      <motion.div
        id='contact'
        className='contact-container'
        onMouseEnter={() => setScale(true)}
        onMouseLeave={() => setScale(false)}>
        <h1
          className='contact-heading grey-color'>
          Contacta con <span className='main-color'>nosotros</span>
        </h1>
        <div className='contact-image-left'>
          <motion.img
            src='/img/contact4.png'
            alt='contact-image'
            animate={scale ? 'scaledLeft' : 'notScaled'}
            variants={scaleVariants}
          />
        </div>
        <ContactForm
          sectionLocation='contacts'
          id='0'
        />
        <div className='contact-image-right'>
          <motion.img
            src='/img/contact3.png'
            alt='contact-image'
            animate={scale ? 'scaledRight' : 'notScaled'}
            variants={scaleVariants}
          />
        </div>
      </motion.div>
    </>
  )
}

export default Contact;

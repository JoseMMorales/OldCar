import emailjs  from 'emailjs-com';
import { Button, Input } from '../Generic';

const ContactForm = ({className}) => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Gmail', 'contact-form', e.target, 'user_QjlSD5S1CVgV6vYT8bxx1')
      .then((result) => {
        console.log(`Email sent ${result.text} to Oldcar Team`);
        alert('Tu email ha sido enviado correctamente ');
      }, (error) => {
        console.log(error.text);
        alert('No se ha posido enviar tu email, por favor contacta con nuestro equipo de atención al cliente');
      });
      e.target.reset();
  }

  return (
    <div className={`contact-form ${className}`}>
      <form id='contact-form' onSubmit={sendEmail}>
        <Input
          htmlFor='contactName'
          Inputid='contactName'
          labelName={false}
          labelClassName={false}
          type='text'
          placeholder='Nombre*'
          required={true}
        />
        <Input
          htmlFor='contactEmail'
          Inputid='contactEmail'
          labelName={false}
          labelClassName={false}
          inputClassName='total-width'
          type='text'
          placeholder='Usuario@email.com*'
          required={true}
        />
        <div className='form-row'>
          <textarea
            className='form-control textarea'
            rows='5'
            placeholder='Mensaje...'
            name='textArea'
            required
          />
        </div>
        <Button
          type='submit'
          className='total-width'
          name='Enviar Mensaje'
        />
      </form>
    </div>
  )
}

export default ContactForm;

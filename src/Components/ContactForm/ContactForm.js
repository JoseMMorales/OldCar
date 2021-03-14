import { Button, Input } from '../Generic';
import { useState } from 'react';

const ContactForm = ({ className, sectionLocation }) => {

  const initalValue = {contactName: '', contactEmail: '', contactText: ''};
  const [contact, setContact] = useState(initalValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({...contact, [name]: value});
  };

  const contactSend = e => {
    e.preventDefault();

    fetch(`http://localhost:8000/contact/${sectionLocation}`, {
      method: 'POST',
      mode: 'cors'
    })
    .then(response => response.json())
    .then(
      resp => {
        alert("Email enviado!!");
        console.log(resp);
      }
    ).catch(error => console.log(error));
    setContact(initalValue);
  };

  return (
    <div className={`contact-form ${className}`}>
      <form id='contact-form' onSubmit={contactSend}>
        <Input
          htmlFor='contactName'
          Inputid='contactName'
          labelName={false}
          labelClassName={false}
          onChange={handleChange}
          inputName='contactName'
          value={contact.contactName}
          type='text'
          placeholder='Nombre*'
          required={true}
        />
        <Input
          htmlFor='contactEmail'
          Inputid='contactEmail'
          labelName={false}
          labelClassName={false}
          onChange={handleChange}
          inputName='contactEmail'
          value={contact.contactEmail}
          inputClassName='total-width'
          type='email'
          placeholder='Usuario@email.com*'
          required={true}
        />
        <div className='form-row'>
          <textarea
            className='form-control textarea'
            rows='5'
            placeholder='Mensaje...'
            onChange={handleChange}
            name='contactText'
            value={contact.contactText}
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

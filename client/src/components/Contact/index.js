import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("meqnngvj");
  if (state.succeeded) {
      return <p>Thanks for getting touch!</p>;
  }
  return (
    <div id='contact-div' className='body-div'>

    <h2 id='heading-contact' className='heading'>
        Contact
        <h3>
        Ph: 02 7229 5880
        </h3>
        
    </h2>
      <form id='contact-form' onSubmit={handleSubmit}>

      <div className='labels'><label >Name</label></div>
      <div className='inputs'><input
        id="name"
        type="name" 
        name="name"
      /></div>
      
      <div className='labels'><label htmlFor="email">
        Email Address
      </label></div>
      <div className='inputs'><input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /></div>
    
        <div className='labels'>
            <label>
                Your message
            </label>
        </div>
      <div className='inputs'>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      
      <div><button type="submit" disabled={state.submitting}>
        Submit
      </button></div>  
      
      
    </form>
    </div>
  );
}

export default Contact;

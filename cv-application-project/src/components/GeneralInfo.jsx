import { useState } from 'react';

function GeneralInfo({ handleSubmit, info }) {
  const [isSubmit, setSubmit] = useState(false);

  return isSubmit ? (
    <section className='general-info'>
      <h2 className='section-title'>Personal details</h2>
      <p>Name: {info.name}</p>
      <p>Email: {info.email}</p>
      <p>Contact Number: {info.contact}</p>
      <button type='button' onClick={() => setSubmit(false)}>
        Edit
      </button>
    </section>
  ) : (
    <form
      className='general-info-form'
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formValue = Object.fromEntries(formData.entries());
        handleSubmit(formValue);
        setSubmit(true);
      }}
    >
      <h2 className='section-title'>Personal details</h2>
      <section className='form-section'>
        <label htmlFor='name'>Name:</label> {''}
        <input type='text' id='name' name='name' defaultValue={info.name} />
      </section>

      <section className='form-section'>
        {' '}
        <label htmlFor='email'>Email:</label> {''}
        <input type='email' id='email' name='email' defaultValue={info.email} />
      </section>

      <section className='form-section'>
        <label htmlFor='contact'>Phone number:</label> {''}
        <input
          type='tel'
          id='contact'
          name='contact'
          pattern='[0-9]{7,15}'
          title='Please enter numbers only.'
          defaultValue={info.contact}
        />
      </section>

      <button type='submit' className='add-entry-btn'>
        Confirm
      </button>
    </form>
  );
}

export default GeneralInfo;

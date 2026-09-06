function GeneralInfo({ handleChange }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formValue = Object.fromEntries(formData.entries());
        handleChange(formValue);
      }}
    >
      <label htmlFor='name'>Name</label> {''}
      <input type='text' id='name' name='name' />
      <label htmlFor='email'>Email</label> {''}
      <input type='email' id='email' name='email' />
      <label htmlFor='contact'>Phone number</label> {''}
      <input
        type='tel'
        id='contact'
        name='contact'
        pattern='[0-9]{7,15}'
        title='Please enter numbers only.'
        required
      />
      <button type='submit'>Confirm</button>
    </form>
  );
}

export default GeneralInfo;

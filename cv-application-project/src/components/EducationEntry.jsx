import { useState } from 'react';

function EducationEntry({ handleSubmit, handleDelete, id }) {
  const [isSubmit, setSubmit] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formValue = Object.fromEntries(formData.entries());
        handleSubmit({ id, ...formValue });
        setSubmit(!isSubmit);
      }}
    >
      <label htmlFor='university'>University: </label> {''}
      <input type='text' id='university' name='university' />
      <label htmlFor='study'>Title of study:</label> {''}
      <input type='text' id='study' name='study' />
      <label htmlFor='dateFrom'>Date from: </label> {''}
      <input type='date' id='dateFrom' name='dateFrom' />
      <label htmlFor='dateUntil'>Date until: </label> {''}
      <input type='date' id='dateUntil' name='dateUntil' />
      <button type='submit'>{isSubmit ? 'Edit' : 'Confirm'}</button>
      <button type='button' onClick={handleDelete}>
        Delete
      </button>
    </form>
  );
}

export default EducationEntry;

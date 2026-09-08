import { useState } from 'react';

function EducationEntry({
  handleSubmit,
  handleDelete,
  id,
  university,
  study,
  date,
}) {
  const [isSubmit, setSubmit] = useState(false);

  return isSubmit ? (
    <section className='entry-card'>
      <h2 className='section-title'>
        {university ? university : 'New education entry'}
      </h2>
      <p>{study}</p>
      <p className='entry-meta'>{date}</p>
      <div className='button-row'>
        <button type='button' onClick={() => setSubmit(false)}>
          Edit
        </button>
        <button type='button' className='delete-btn' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </section>
  ) : (
    <div className='entry-card'>
      <h2 className='section-title'>
        {university ? university : 'New education entry'}
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const formValue = Object.fromEntries(formData.entries());
          handleSubmit({ id, ...formValue });
          setSubmit(true);
        }}
      >
        <div className='form-section'>
          <label htmlFor='university'>University</label>
          <input
            type='text'
            id='university'
            name='university'
            defaultValue={university}
          />
        </div>

        <div className='form-section'>
          <label htmlFor='study'>Title of study</label>
          <input type='text' id='study' name='study' defaultValue={study} />
        </div>

        <div className='form-section'>
          <label htmlFor='date'>Date graduated</label>
          <input type='date' id='date' name='date' defaultValue={date} />
        </div>

        <div className='button-row'>
          <button type='submit'>Confirm</button>
          <button type='button' className='delete-btn' onClick={handleDelete}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default EducationEntry;

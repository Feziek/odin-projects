import { useState } from 'react';

function ExperinceEntry({
  handleSubmit,
  handleDelete,
  id,
  company,
  position,
  responsibilities,
  dateFrom,
  dateUntil,
}) {
  const [isSubmit, setSubmit] = useState(false);

  return isSubmit ? (
    <section className='entry-card'>
      <h2 className='section-title'>
        {company ? company : 'New experience entry'}
      </h2>
      <p>{position}</p>
      <ul>
        {responsibilities.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <p className='entry-meta'>
        {dateFrom} – {dateUntil}
      </p>
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
        {company ? company : 'New experience entry'}
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const formValue = Object.fromEntries(formData.entries());
          const responsibilitiesList = formValue.responsibilities
            .split('.')
            .map((item) => item.trim())
            .filter((item) => item !== '');
          handleSubmit({
            ...formValue,
            id,
            responsibilities: responsibilitiesList,
          });
          setSubmit(!isSubmit);
        }}
      >
        <div className='form-section'>
          <label htmlFor='company'>Company name</label>
          <input
            type='text'
            id='company'
            name='company'
            defaultValue={company}
          />
        </div>

        <div className='form-section'>
          <label htmlFor='position'>Position</label>
          <input
            type='text'
            id='position'
            name='position'
            defaultValue={position}
          />
        </div>

        <div className='form-section'>
          <label htmlFor='responsibilities'>Responsibilities</label>
          <input
            type='text'
            name='responsibilities'
            id='responsibilities'
            defaultValue={responsibilities.join('.')}
          />
        </div>

        <div className='form-section form-section--split'>
          <div>
            <label htmlFor='dateFrom'>Date from</label>
            <input
              type='date'
              id='dateFrom'
              name='dateFrom'
              defaultValue={dateFrom}
            />
          </div>
          <div>
            <label htmlFor='dateUntil'>Date until</label>
            <input
              type='date'
              id='dateUntil'
              name='dateUntil'
              defaultValue={dateUntil}
            />
          </div>
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

export default ExperinceEntry;

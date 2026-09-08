import '../styles/Preview.css';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function PreviewCV({ name, email, contact, educationInfos, experienceInfos }) {
  return (
    <div className='cv-document'>
      {name && (
        <header className='cv-header'>
          <h1>{name}</h1>
          <div className='cv-header-contact'>
            {email && <p>{email}</p>}
            {contact && <p>{contact}</p>}
          </div>
        </header>
      )}

      {educationInfos.length > 0 && (
        <section className='cv-block'>
          <h2 className='block-title'>Education</h2>
          {educationInfos.map((info) => {
            const { university, study, date, id } = info;
            return (
              <div className='entry' key={id}>
                <div className='entry-header'>
                  <h3>{university}</h3>
                  {date && (
                    <span className='entry-dates'>{formatDate(date)}</span>
                  )}
                </div>
                {study && <p className='entry-sub'>{study}</p>}
              </div>
            );
          })}
        </section>
      )}

      {experienceInfos.length > 0 && (
        <section className='cv-block'>
          <h2 className='block-title'>Experience</h2>
          {experienceInfos.map((info) => {
            const {
              company,
              position,
              responsibilities,
              dateFrom,
              dateUntil,
              id,
            } = info;
            return (
              <div className='entry' key={id}>
                <div className='entry-header'>
                  <h3>{position}</h3>
                  {(dateFrom || dateUntil) && (
                    <span className='entry-dates'>
                      {formatDate(dateFrom)} – {formatDate(dateUntil)}
                    </span>
                  )}
                </div>
                {company && <p className='entry-sub'>{company}</p>}
                {responsibilities && (
                  <ul className='responsibility-list'>
                    {responsibilities.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}

export default PreviewCV;

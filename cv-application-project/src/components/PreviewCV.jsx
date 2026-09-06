function PreviewCV({ name, email, contact }) {
  return (
    <div className='preview'>
      <section className='general-info'>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Contact: {contact}</p>
      </section>
      <section className="education">
        
      </section>
    </div>
  );
}

export default PreviewCV;

import EducationEntry from './EducationEntry';

function EducationSection({
  educationList,
  handleSubmit,
  handleAddEntry,
  handleDeleteEntry,
}) {
  return (
    <>
      {educationList.map((item) => (
        <EducationEntry
          key={item.id}
          handleSubmit={handleSubmit}
          handleDelete={()=> handleDeleteEntry(item.id)}
          {...item}
        />
      ))}
      <button onClick={handleAddEntry}>Add Education</button>
    </>
  );
}

export default EducationSection;

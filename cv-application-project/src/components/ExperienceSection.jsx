import ExperinceEntry from './ExperienceEntry';

function ExperienceSection({
  experienceList,
  handleSubmit,
  handleAddEntry,
  handleDeleteEntry,
}) {
  return (
    <>
      {experienceList.map((item) => (
        <ExperinceEntry
          key={item.id}
          handleSubmit={handleSubmit}
          handleDelete={() => handleDeleteEntry(item.id)}
          {...item}
        />
      ))}
      <button onClick={handleAddEntry}>Add Experience</button>
    </>
  );
}

export default ExperienceSection;

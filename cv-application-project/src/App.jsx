import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import PreviewCV from './components/PreviewCV';
import './styles/App.css';

function App() {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    contact: '',
  });

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const setGeneralInfo = (infoObj) => {
    setInfo({ ...info, ...infoObj });
  };

  const setEducationEntry = (educationObj) => {
    const newEducation = education.map((entry) =>
      entry.id === educationObj.id ? educationObj : entry,
    );
    setEducation(newEducation);
  };

  const addEducationEntry = () => {
    const newEducation = [
      ...education,
      {
        id: crypto.randomUUID(),
        university: '',
        study: '',
        date: '',
      },
    ];
    setEducation(newEducation);
  };

  const deleteEducationEntry = (id) => {
    const newEducation = education.filter((entry) => entry.id !== id);
    setEducation(newEducation);
  };

  const setExperienceEntry = (experienceObj) => {
    const newExperience = experience.map((entry) =>
      entry.id === experienceObj.id ? experienceObj : entry,
    );
    setExperience(newExperience);
  };

  const addExperienceEntry = () => {
    const newExperience = [
      ...experience,
      {
        id: crypto.randomUUID(),
        company: '',
        position: '',
        responsibilities: [],
        dateFrom: '',
        dateUntil: '',
      },
    ];
    setExperience(newExperience);
  };

  const deleteExperienceEntry = (id) => {
    const newExperience = experience.filter((entry) => entry.id !== id);
    setExperience(newExperience);
  };

  return (
    <>
      <header className='app-title'>Create Your CV</header>
      <main className='app-body'>
        <section className='form-panel'>
          <GeneralInfo handleSubmit={setGeneralInfo} info={info} />

          <h2 className='section-title'>Education</h2>
          <EducationSection
            educationList={education}
            handleSubmit={setEducationEntry}
            handleAddEntry={addEducationEntry}
            handleDeleteEntry={deleteEducationEntry}
          />
          <h2 className='section-title'>Work experience</h2>
          <ExperienceSection
            experienceList={experience}
            handleSubmit={setExperienceEntry}
            handleAddEntry={addExperienceEntry}
            handleDeleteEntry={deleteExperienceEntry}
          />
        </section>
        <section className='preview-panel'>
          <PreviewCV
            {...info}
            educationInfos={education}
            experienceInfos={experience}
          />
        </section>
      </main>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styles from "./AddVideoFormation.module.css";
import NavbarDashboard from '../Dashboard/NavbarDashboard';
import Container from '../../Container/Container';

export default function AddVideoFormation() {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const titleFormation = query.get('title');

  const [mainSection, setMainSection] = useState({
    title: '',
    mainVideo: null,
    subSections: [{ title: '', video: null }],
  });

  const handleMainTitleChange = (e) => {
    setMainSection({ ...mainSection, title: e.target.value });
  };

  const handleMainVideoUpload = (file) => {
    setMainSection({ ...mainSection, mainVideo: file });
  };

  const addSubSection = () => {
    setMainSection({
      ...mainSection,
      subSections: [...mainSection.subSections, { title: '', video: null }],
    });
  };

  const handleSubSectionTitleChange = (index, title) => {
    const newSubSections = [...mainSection.subSections];
    newSubSections[index].title = title;
    setMainSection({ ...mainSection, subSections: newSubSections });
  };

  const handleSubSectionVideoUpload = (index, file) => {
    const newSubSections = [...mainSection.subSections];
    newSubSections[index].video = file;
    setMainSection({ ...mainSection, subSections: newSubSections });
  };

  const handleSaveVideos = () => {
    
  };

  return (
    <>
      <NavbarDashboard />
      <Container>
        <div className={styles.add_video_container}>
          <h3>Add Videos to Formation: {id || 'N/A'}, {titleFormation || 'N/A'}</h3>
          <div className={styles.mainSection}>
            <div className={styles.input_container}>
              <label>Main Section Title</label>
              <input
                type="text"
                value={mainSection.title}
                onChange={(e) => handleMainTitleChange(e)}
              />
            </div>
            <div className={styles.input_container}>
              <label>Main Video</label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => handleMainVideoUpload(e.target.files[0])}
              />
            </div>
            <h5>Subsections</h5>
            {mainSection.subSections.map((subSection, index) => (
              <div key={index} className={styles.subsections}>
                <div className={styles.input_container}>
                  <label>Subsection Title {index +1}</label>
                  <input
                    type="text"
                    value={subSection.title}
                    onChange={(e) => handleSubSectionTitleChange(index, e.target.value)}
                  />
                </div>
                <div className={styles.input_container}>
                  <label>Subsection Video {index + 1}</label>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => handleSubSectionVideoUpload(index, e.target.files[0])}
                  />
                </div>
              </div>
            ))}
            <button 
              type="button" onClick={addSubSection}
              className={styles.add_subsection}
              >
                Add Subsection
              </button>
          </div>
          <button 
            onClick={handleSaveVideos}
              className={styles.send_videos}
            >
              Save All Videos
          </button>
        </div>
      </Container>
    </>
  );
}

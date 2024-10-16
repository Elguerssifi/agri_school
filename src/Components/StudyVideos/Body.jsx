import { useState, useEffect } from "react";
import styles from "./StudyVideos.module.css";

export default function Body({ cours_sections }) {
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    if (cours_sections.length > 0) {
      setCurrentVideo(cours_sections[0].videos.main); 
    }
  }, [cours_sections]);

  return (
    <div className={styles.body}>
      {/* Course sections */}
      <div className={styles.cours_section}>
        {cours_sections.map((section, index) => (
          <div key={index}>
            {/* Main Section */}
            <div
              className={styles.section}
              onClick={() => setCurrentVideo(section.videos.main)}
            >
              {section.title}
            </div>

            {/* Subsections */}
            <div className={styles.subSections}>
              {section.subSections.map((subSection, subIndex) => (
                <div
                  key={subIndex}
                  className={styles.subSection}
                  onClick={() => {
                    console.log("Clicked video URL:", section.videos.subSections[subIndex]); 
                    setCurrentVideo(section.videos.subSections[subIndex]);
                  }}
                >
                  {subSection}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Video player for the selected video */}
      <div className={styles.cours_section_video}>
        {currentVideo ? (
          <video key={currentVideo} controls width="600">
            <source src={currentVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Please select a section or subsection to view the video.</p>
        )}
      </div>
    </div>
  );
}

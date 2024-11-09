import { useState } from "react";
import NewsLetter from "../../Components/Home/NewsLetter/NewsLetter";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/StudyVideos/Header";
import Footer from "../../Components/Footer/Footer";
import Container from "../../Components/Container/Container";
import Body from "../../Components/StudyVideos/Body";
import FooterStudy from "../../Components/StudyVideos/FooterStudy";

const sectionsData = [
  [
    {
      title: "مقدمة حول أنظمة الري",
      subSections: [
        "تعريف بأنظمة الري وأهميتها في الزراعة",
        "أنواع أنظمة الري المستخدمة في الفلاحة",
        "العوامل المؤثرة في اختيار نظام الري المناسب"
      ],
      videos: {
        main: "/Assets/videos/video_1.mp4",
        subSections: [
          "/Assets/videos/sub_video_1.mp4",
          "/Assets/videos/sub_video_2.mp4",
          "/Assets/videos/video_1.mp4"
        ]
      }
    }
  ],
  [
    {
      title: "أنظمة الري بالتنقيط",
      subSections: [
        "مقدمة في أنظمة الري بالتنقيط",
        "مزايا وعيوب استخدام نظام الري بالتنقيط",
        "كيف يتم تركيب وصيانة أنظمة الري بالتنقيط"
      ],
      videos: {
        main: "/Assets/videos/sub_video_1.mp4",
        subSections: [
          "/Assets/videos/sub_video_2.mp4",
          "/Assets/videos/sub_video_1.mp4",
          "/Assets/videos/video_1.mp4"
        ]
      }
    }
  ],
  [
    {
      title: "أنظمة الري بالرش",
      subSections: [
        "مقدمة في أنظمة الري بالرش",
        "فوائد ومزايا استخدام الري بالرش",
        "كيفية صيانة أنظمة الري بالرش"
      ],
      videos: {
        main: "/Assets/videos/sprinkler_irrigation.mp4",
        subSections: [
          "/Assets/videos/sprinkler_sub_1.mp4",
          "/Assets/videos/sprinkler_sub_2.mp4",
          "/Assets/videos/sprinkler_sub_3.mp4"
        ]
      }
    }
  ]
];

export default function StudyVideosPages() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const handleNext = () => {
    if (currentSectionIndex < sectionsData.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  // Calculate progress as a percentage
  const progress = ((currentSectionIndex + 1) / sectionsData.length) * 100;

  return (
    <>
      <Navbar />
      <Container>
        <Header title={"test"} progress={progress} />
        <Body cours_sections={sectionsData[currentSectionIndex]} />
        <FooterStudy onNext={handleNext} onBack={handleBack} />
      </Container>
      <NewsLetter />
      <Footer />
    </>
  );
}

import NewsLetter from "../../Components/Home/NewsLetter/NewsLetter";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/StudyVideos/Header";
import Footer from "../../Components/Footer/Footer";
import Container from "../../Components/Container/Container";
import Body from "../../Components/StudyVideos/Body";

const cours_sections = [
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
];

export default function StudyVideosPages() {
  return (
    <>
      <Navbar />
      <Container>
        <Header title={"test"} />
        <Body cours_sections={cours_sections} />
      </Container>
      <NewsLetter />
      <Footer />
    </>
  );
}

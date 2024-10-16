import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../../Components/Navbar/Navbar";
import NewsLetter from "../../Components/Home/NewsLetter/NewsLetter";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Course/Header";
import styles from "./Course.module.css";
import Container from '../../Components/Container/Container';
import AboutCourse from '../../Components/Course/AboutCourse';
import GetCertified from '../../Components/Course/GetCertified';
import CreateAccount from '../../Components/Course/CreateAccount';
import StudentsReviews from '../../Components/Course/StudentsReviews/StudentsReviews';
import Axes from '../../Components/Course/Axes/Axes';

// Dummy data for courses
const courses = [
  {
    title_course: "أنظمة الطاقة الشمسية",
    price: 5000,
    old_price: 6000,
    videoSrc: "./Assets/videos/video_1.mp4" // Default video source
  },
  {
    title_course: "تصميم واجهات المستخدم",
    hours_watch: 15,
    views: 5500,
    price: 4000,
    old_price: 5000,
    link: "/course/ui-design",
    videoSrc: "./Assets/videos/video_1.mp4" // Default video source
  },
  {
    title_course: "تطوير التطبيقات",
    hours_watch: 20,
    views: 6200,
    price: 7000,
    old_price: 8000,
    link: "/course/app-development",
    videoSrc: "./Assets/videos/video_1.mp4" // Default video source
  },
  {
    title_course: "التسويق الرقمي",
    hours_watch: 12,
    views: 3400,
    price: 4500,
    old_price: 5000,
    link: "/course/digital-marketing",
    videoSrc: "./Assets/videos/video_1.mp4" // Default video source
  },
  {
    title_course: "إدارة المشاريع",
    hours_watch: 8,
    views: 2900,
    price: 3800,
    old_price: 4500,
    link: "/course/project-management",
    videoSrc: "./Assets/videos/video_1.mp4" // Default video source
  },
  {
    title_course: "تحليل البيانات",
    hours_watch: 18,
    views: 5000,
    price: 6000,
    old_price: 7000,
    link: "/course/data-analysis",
    videoSrc: "./Assets/videos/video_1.mp4" // Default video source
  },
  {
    title_course: "التصميم الجرافيكي",
    hours_watch: 14,
    views: 4600,
    price: 5200,
    old_price: 6000,
    link: "/course/graphic-design",
    videoSrc: "./Assets/videos/video_1.mp4" // Default video source
  },
  {
    title_course: "برمجة مواقع الإنترنت",
    hours_watch: 22,
    views: 7000,
    price: 7500,
    old_price: 8500,
    link: "/course/web-development",
    videoSrc: "./Assets/videos/video_1.mp4" // Default video source
  }
];

export default function Course() {
  const { title } = useParams(); 
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    const course = courses.find(course => course.title_course === title);
    setCourseData(course);
  }, [title]);

  if (!courseData) {
    return <div>Loading...</div>; 
  }

  return (
    <div className={styles.course_page}>
      <Navbar />
      <Container>
        <Header 
          title_course={courseData.title_course}
          price={courseData.price}
          old_price={courseData.old_price}
          videoSrc={courseData.videoSrc}
        />
        <AboutCourse />
        <Axes />
        <GetCertified />
        <StudentsReviews />
        <CreateAccount />
      </Container>
      <NewsLetter />
      <Footer />
    </div>
  );
}

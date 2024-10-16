import Container from "../../Container/Container";
import Title from "../Title/Title";
import styles from "./Coures.module.css";
import ItemCourse from "./ItemCourse";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export default function Courses() {
  const courses = [
    {
      title_course: "أنظمة الطاقة الشمسية",
      hours_watch: 10,
      views: 4120,
      price: 5000,
      old_price: 6000,
      link: "/course/أنظمة الطاقة الشمسية"
    },
    {
      title_course: "تصميم واجهات المستخدم",
      hours_watch: 15,
      views: 5500,
      price: 4000,
      old_price: 5000,
      link: "/course/تصميم واجهات المستخدم"
    },
    {
      title_course: "تطوير التطبيقات",
      hours_watch: 20,
      views: 6200,
      price: 7000,
      old_price: 8000,
      link: "/course/تطوير التطبيقات"
    },
    {
      title_course: "التسويق الرقمي",
      hours_watch: 12,
      views: 3400,
      price: 4500,
      old_price: 5000,
      link: "/course/التسويق الرقمي"
    },
    {
      title_course: "إدارة المشاريع",
      hours_watch: 8,
      views: 2900,
      price: 3800,
      old_price: 4500,
      link: "/course/إدارة المشاريع"
    },
    {
      title_course: "تحليل البيانات",
      hours_watch: 18,
      views: 5000,
      price: 6000,
      old_price: 7000,
      link: "/course/تحليل البيانات"
    },
    {
      title_course: "التصميم الجرافيكي",
      hours_watch: 14,
      views: 4600,
      price: 5200,
      old_price: 6000,
      link: "/course/التصميم الجرافيكي"
    },
    {
      title_course: "برمجة مواقع الإنترنت",
      hours_watch: 22,
      views: 7000,
      price: 7500,
      old_price: 8500,
      link: "/course/برمجة مواقع الإنترنت"
    }
  ];

  return (
    <section className={styles.courses_section}>
      <Container>
        <div className={styles.title}>
          <Title title={"الدورات"} />
        </div>
        <div className={styles.row}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={2}
            slidesPerView={3}
            navigation
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index}>
                <ItemCourse 
                  title_course={course.title_course}
                  hours_watch={course.hours_watch}
                  views={course.views}
                  price={course.price}
                  old_price={course.old_price}
                  link={course.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}

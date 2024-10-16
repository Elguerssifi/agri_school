import styles from "./StudentsReviews.module.css"
import Title from "../../Home/Title/Title";
import Item from "./item";
export default function StudentsReviews() {
  const studentReviews = [
    {
      src: "/Assets/images/student_1.jpg",
      description: (
        <>
          "الدورات في <span>Agrischool</span> ساعدتني على اكتساب مهارات جديدة
          في الزراعة المستدامة. الشهادة المعترف بها التي حصلت عليها جعلتني أكثر
          ثقة في التقدم للوظائف."
        </>
      ),
      name: "عبدالرحيم الكرماوي",
    },
    {
      src: "/Assets/images/student_2.jpg",
      description: (
        <>
          "كنت أبحث عن أكاديمية توفر تعليمًا متميزًا في مجال الزراعة، و
          <span>Agrischool</span> كانت الخيار المثالي. الشهادة التي حصلت عليها
          فتحت لي أبوابًا جديدة في مجالي."
        </>
      ),
      name: "محمد الشافعي",
    },
    {
      src: "/Assets/images/student_3.jpg",
      description: (
        <>
          "الدورات في <span>Agrischool</span> ساعدتني على اكتساب مهارات جديدة
          في الزراعة المستدامة. الشهادة المعترف بها التي حصلت عليها جعلتني أكثر
          ثقة في التقدم للوظائف."
        </>
      ),
      name: "فاطمة الزهراء",
    },
  ];

  return (
    <div className={styles.review_section}>
        <div className={styles.title_description}>
          <Title title={"آراء الطلاب على الدورة"} />
        </div>
        <div className={styles.items}>
          {studentReviews.map((review, index) => (
            <Item
              key={index}
              src={review.src}
              description={review.description}
              name={review.name}
            />
          ))}
        </div>
    </div>
  )
}

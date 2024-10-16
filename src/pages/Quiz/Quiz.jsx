import Container from "../../Components/Container/Container";
import GetCertified from "../../Components/Course/GetCertified";
import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/Home/NewsLetter/NewsLetter";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Quiz/Header";
import Padding from "../../Components/Quiz/Padding";
import QuizBody from "../../Components/Quiz/QuizBody";
import { useState } from "react";

export default function Quiz() {
  const [progress, setProgress] = useState(0);

  const axes = [
    {
      title: "المحور الأول: مقدمة حول أنظمة الري",
      questions: [
        {
          title: "ما هو تعريف نظام الري وما هي أهميته في الزراعة؟",
          options: [
            { text: "هو نظام يعتمد على الأمطار الطبيعية", isCorrect: false },
            { text: "هو وسيلة لتوفير المياه بطرق متنوعة لتحقيق إنتاجية أفضل", isCorrect: true },
            { text: "هو نظام لتحليل التربة قبل الزراعة", isCorrect: false },
          ],
        },
        {
          title: "ما هي أنواع أنظمة الري المستخدمة في الفلاحة؟",
          options: [
            { text: "الري السطحي، الري بالتنقيط، الري بالرش", isCorrect: true },
            { text: "الري بالرش فقط", isCorrect: false },
            { text: "لا يوجد أنظمة ري معروفة", isCorrect: false },
          ],
        },
      ],
    },
    {
      title: "المحور الثاني: تصميم أنظمة الري اليدوي والآلي",
      questions: [
        {
          title: "ما هي مكونات نظام الري اليدوي؟",
          options: [
            { text: "مضخة، خزان، أنابيب", isCorrect: true },
            { text: "مضخة فقط", isCorrect: false },
            { text: "لا يوجد مكونات معروفة", isCorrect: false },
          ],
        },
        {
          title: "ما هي مزايا استخدام أنظمة الري الآلي؟",
          options: [
            { text: "توفير الوقت والجهد", isCorrect: true },
            { text: "زيادة تكاليف التشغيل", isCorrect: false },
            { text: "عدم الحاجة لصيانة", isCorrect: false },
          ],
        },
      ],
    },
    {
      title: "المحور الثالث: صيانة أنظمة الري",
      questions: [
        {
          title: "ما هي أهمية صيانة أنظمة الري؟",
          options: [
            { text: "تحسين كفاءة استخدام المياه", isCorrect: true },
            { text: "زيادة تكاليف التشغيل", isCorrect: false },
            { text: "عدم الحاجة للصيانة", isCorrect: false },
          ],
        },
        {
          title: "ما هي الإجراءات الأساسية لصيانة نظام الري؟",
          options: [
            { text: "تنظيف الأنابيب والفلاتر", isCorrect: true },
            { text: "تغيير المحركات كل شهر", isCorrect: false },
            { text: "تجاهل التسريبات", isCorrect: false },
          ],
        },
      ],
    },
    {
      title: "المحور الرابع: تأثير التقنيات الحديثة على أنظمة الري",
      questions: [
        {
          title: "كيف تؤثر التقنيات الحديثة على كفاءة أنظمة الري؟",
          options: [
            { text: "تزيد من استهلاك المياه", isCorrect: false },
            { text: "تحسن من التحكم في توزيع المياه", isCorrect: true },
            { text: "تقلل من إنتاجية المحاصيل", isCorrect: false },
          ],
        },
        {
          title: "ما هي التكنولوجيا المستخدمة في أنظمة الري الحديثة؟",
          options: [
            { text: "أجهزة الاستشعار والتقنيات الذكية", isCorrect: true },
            { text: "الأدوات اليدوية التقليدية", isCorrect: false },
            { text: "التقنيات القديمة فقط", isCorrect: false },
          ],
        },
      ],
    },
  ];

  const handleProgressUpdate = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Header />
        <QuizBody axes={axes} onProgressUpdate={handleProgressUpdate} />
        <GetCertified />
      </Container>
      <Padding />
      <NewsLetter />
      <Footer />
    </>
  );
}


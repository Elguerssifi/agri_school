import Footer from "../../Components/Footer/Footer";
import NewsLetter from "../../Components/Home/NewsLetter/NewsLetter";
import Navbar from "../../Components/Navbar/Navbar";
import Register from "../../Components/Register/Register";
import styles from "./RegisterPage.module.css"
export default function RegisterPage() {
  return (
    <div className={styles.register_page_container}>
      <Navbar />
      <Register />
      <NewsLetter />
      <Footer />
    </div>
  )
}

import Footer from "../../Components/Footer/Footer"
import NewsLetter from "../../Components/Home/NewsLetter/NewsLetter"
import Login from "../../Components/Login/Login"
import Navbar from "../../Components/Navbar/Navbar"
import styles from "./LoginPage.module.css"

export default function LoginPage() {
  return (
    <div className={styles.login_page}>
      <Navbar />
      <Login />
      <NewsLetter />
      <Footer />
    </div>
  )
}

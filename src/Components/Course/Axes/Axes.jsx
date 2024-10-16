import Title from "../../Home/Title/Title";
import Accordion from "./Accordion";
import styles from "./Axes.module.css";

export default function Axes() {
  return (
    <section className={styles.axes_section}>
      <div className={styles.title}>
        <Title title={"المحاور"}/>
      </div>
      <div className={styles.axes_area}>
        <Accordion />
      </div>
    </section>
  )
}

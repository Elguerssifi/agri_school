import styles from "./Dashboard.module.css";
import Container from "../../Container/Container";

export default function NavbarDashboard({ setActivePage }) {
  return (
    <div className={styles.navbar_dashboard}>
      <Container>
        <div className={styles.row}>
          <div className={styles.logo}>
            <img src="/Assets/images/logo.png" alt="Logo" />
          </div>
          <ul className={styles.links}>
            <li><a href="#" onClick={() => setActivePage("Home")}>Home</a></li>
            <li><a href="#" onClick={() => setActivePage("CreateFormation")}>Create Formation</a></li>
            <li><a href="#" onClick={() => setActivePage("CreateUser")}>Create User</a></li>
          </ul>
          <div className={styles.logout}>
            <button>Logout</button>
          </div>
        </div>
      </Container> 
    </div>
  );
}

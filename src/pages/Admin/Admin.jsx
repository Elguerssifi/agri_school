import React, { useState } from 'react';
import NavbarDashboard from '../../Components/Admin/Dashboard/NavbarDashboard';
import styles from "./Admin.module.css";
import Container from '../../Components/Container/Container';
import Home from '../../Components/Admin/Dashboard/Home';
import CreateFormation from '../../Components/Admin/Dashboard/CreateFormation';
import CreateUser from '../../Components/Admin/Dashboard/CreateUser';

export default function Admin() {
  const [activePage, setActivePage] = useState("Home");

  // Function to render the selected page
  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <Home />;
      case "CreateFormation":
        return <CreateFormation />;
      case "CreateUser":
        return <CreateUser />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={styles.admin}>
      <Container>
        <NavbarDashboard setActivePage={setActivePage} />
        {renderPage()} 
      </Container>
    </div>
  );
}

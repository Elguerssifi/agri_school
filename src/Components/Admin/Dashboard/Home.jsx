import styles from "./Dashboard.module.css";
import Formation from "./Formation";
import { useState } from "react";

export default function Home() {

  const [formations, setFormations] = useState([
    {
      id: 1,
      title: "Advanced AI Course",
      price: "$99",
      thumbnail: "/Assets/images/image_course_1.png", 
      createdAt: "2024-10-01",
    },
    {
      id: 2,
      title: "Data Science Bootcamp",
      price: "$150",
      thumbnail: "/Assets/images/image_course_1.png",
      createdAt: "2024-09-15",
    },
    {
      id: 3,
      title: "Web Development with React",
      price: "$75",
      thumbnail: "/Assets/images/image_course_1.png",
      createdAt: "2024-08-30",
    },
  ]);

  const handleDelete = (id) => {
    setFormations((prevFormations) => prevFormations.filter(f => f.id !== id));
  };

  const onEdit = (id) => {
    console.log(`Editing formation with id: ${id}`);
  };

  return (
    <div className={styles.home}>
      <div className={styles.row}>
        <table className={styles.formationTable}>
          <thead>
            <tr>
              <th>Fromation Image</th>
              <th>Fromation Name</th>
              <th>Price</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {formations.map((formation) => (
              <Formation 
                key={formation.id} 
                id={formation.id} 
                title={formation.title}
                price={formation.price} 
                thumbnail={formation.thumbnail} 
                createdAt={formation.createdAt}
                onDelete={handleDelete} 
                onEdit={onEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

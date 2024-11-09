import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Dashboard.module.css";

export default function Formation({ id, title, thumbnail, price, createdAt, onDelete, onEdit }) {
  return (
    <tr className={styles.formationRow}>
      <td className={styles.formationImageCell}>
        <img src={thumbnail} alt={title} className={styles.formationImage} />
      </td>
      <td className={styles.formationNameCell}>
        <span className={styles.formationName}>{title}</span>
      </td>
      <td className={styles.formationNameCell}>
        <span className={styles.formationPrice}>{price}</span>
      </td>
      <td className={styles.createdAtCell}>{createdAt}</td>
      <td className={styles.actionsCell}>
        <button className={styles.updateButton} onClick={() => onEdit(id)}>Update</button>
        <button className={styles.deleteButton} onClick={() => onDelete(id)}>Delete</button>
        <Link 
          to={`/admin/add-video/${id}?title=${title}`}
          className={styles.AddVideoButton}
        >
          Add Video
        </Link>
      </td>
    </tr>
  );
}

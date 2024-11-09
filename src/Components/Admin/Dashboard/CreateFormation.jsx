import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./Dashboard.module.css";

export default function CreateFormation() {
  const [titleAr, setTitleAr] = useState('');
  const [titleFr, setTitleFr] = useState('');
  const [descriptionAr, setDescriptionAr] = useState('');
  const [descriptionFr, setDescriptionFr] = useState('');
  const [price, setPrice] = useState('');
  const [validityDays , setValidityDays] = useState("")
  const [thumbnail, setThumbnail] = useState(null);
  const [hookVideo, setHookVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem('AdminToken');
    const role = localStorage.getItem('AdminRole');
    
    if (role === 'ADMIN') {
      setIsAdmin(true);
    } else {
      alert('You do not have the required permissions to create a formation.');
    }
  }, []);

  const handleThumbnailUpload = (file) => {
    setThumbnail(file);
  };

  const handleHookVideoUpload = (file) => {
    setHookVideo(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem('AdminToken'); 

    if (!isAdmin) {
      alert('You are not authorized to perform this action.');
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('title[ar]', titleAr);
      formData.append('title[fr]', titleFr);
      formData.append('title[en]', "title en");
      formData.append('description[ar]', descriptionAr);
      formData.append('description[fr]', descriptionFr);
      formData.append('description[en]', "test en");
      formData.append('price', price);
      formData.append('validity_days', validityDays); 
      if (thumbnail) formData.append('thumbnail', thumbnail);

      const response = await axios.post('http://213.130.144.203:8089/api/admin/formations', formData, {
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('API Response:', response.data);
      alert('Formation created successfully!');
    } catch (error) {
      console.error('Error creating formation:', error);
      alert('Error creating formation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.create_formation}>
      <div className={styles.fromation_container}>
        <h2>Create Formation</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formation_main_info}>
            <div className={styles.input_container}>
              <label>Title Ar</label>
              <input type="text" value={titleAr} onChange={(e) => setTitleAr(e.target.value)} />
            </div>
            <div className={styles.input_container}>
              <label>Title Fr</label>
              <input type="text" value={titleFr} onChange={(e) => setTitleFr(e.target.value)} />
            </div>
            <div className={styles.input_container}>
              <label>Price</label>
              <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className={styles.input_container}>
              <label>Thumbnail (Image)</label>
              <input type="file" accept="image/*" onChange={(e) => handleThumbnailUpload(e.target.files[0])} />
            </div>
            <div className={styles.input_container}>
              <label>Hook Video</label>
              <input type="file" accept="video/*" onChange={(e) => handleHookVideoUpload(e.target.files[0])} />
            </div>
            <div className={styles.input_container}>
              <label>Validity days</label>
              <input type="text" value={validityDays} onChange={(e) => setValidityDays(e.target.value)} />
            </div>
            <div className={styles.input_container_w100}>
              <label>Description Ar</label>
              <textarea value={descriptionAr} onChange={(e) => setDescriptionAr(e.target.value)} />
            </div>
            <div className={styles.input_container_w100}>
              <label>Description Fr</label>
              <textarea value={descriptionFr} onChange={(e) => setDescriptionFr(e.target.value)} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

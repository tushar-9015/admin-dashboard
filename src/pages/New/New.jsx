import React, { useState } from 'react'
import './new.scss'
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { collection, addDoc, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { auth, db } from "../../firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';

const New = ({ inputs, title }) => {
  
  const [file, setFile] = useState("");
  const [data, setData] = useState({});

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({...data, [id]: value});
  }

  console.log(data);

  const handleAdd = async (e) => {
    e.prevent.Default();
    try {
      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await setDoc(doc(db, "users", res.user.uid), {
       ...data,
       timeStamp: serverTimestamp(),
      })
    } catch (error) {
      console.log(error); 
    }
  
  }

  return (
    <div className='new'>
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
            src= {
              file 
              ? URL.createObjectURL(file)
              : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt=''  />
          </div>
          <div className="right">
            <form onSubmit={handleAdd}>
            <div className='form-input'>
                <label htmlFor='file'>Image: <DriveFolderUploadOutlinedIcon className='icon' /></label>
                <input id='file' type='file' onChange={(e) => setFile(e.target.files[0])} style={{display:"none"}} />
              </div>
              {inputs.map((input) => (
                <div className='form-input' key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} />
                </div>
              ))}
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New

import { useEffect } from 'react'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createRoom } from './roomSlice';


const CreateRoom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);


  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: null,
    desc: "",
    roomNumbers: null,

  });

  const { name, price, desc, roomNumbers } = formData;
  

  useEffect(() => {
    if (user)
      navigate("/Dashboard")
  }, [user])


  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

    // handle File change
    const handleFileChange = (e) => {
      console.log(e.target.files)
      setFiles(Array.from(e.target.files));
     
    };
  


  const handleSubmit = async (e) => {
    
    e.preventDefault();
   console.log(files[0])
    if (!name || !price || !roomNumbers) {
      return;
    }

   

    const formData = new FormData();
    files.forEach((file) => {
  
      formData.append("files" , file)
    })
    console.log(formData)
    formData.append("name", name)
    formData.append("price", price)
    formData.append("desc" , desc)
    formData.append("roomNumbers", roomNumbers)

const datatoSubmit = {name, price, desc,roomNumbers}
console.log(datatoSubmit)
for (let [key, value] of formData.entries()) {
  console.log(`${key}: ${value}`);
}
    // dispatch createRoom function
    dispatch(createRoom(formData));
    
    // let dataTosubmit = {name, price, desc, roomNumbers, img};
  };

  return (
    <div>
      <div className="container">
        <h1 className="heading center">Create Room</h1>

        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Enter room name"
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                value={price}
                placeholder="Enter room name"
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="desc">Description</label>
              <textarea
                name="desc"
                onChange={handleChange}
                value={desc}
              ></textarea>
            </div>

            <div className="input-group">
              <label htmlFor="desc">Room Numbers</label>
              <input
                name="roomNumbers"
                onChange={handleChange}
                value={roomNumbers}
                placeholder="enter room numbers separated by commas eg: 202, 203, 204, 400"
              ></input>
            </div>

            <div className="input-group">
              <label htmlFor="name">Images</label>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                accept='images/'
              />
            </div>

            <button type="submit">Submit</button>

          
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateRoom
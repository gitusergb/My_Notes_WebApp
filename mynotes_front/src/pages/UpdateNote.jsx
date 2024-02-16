import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UpdateNotes= () => {
  const {noteID} = useParams();
  const [note, setNote] = useState({});
  const navigate = useNavigate();
const [title,setTitle]=useState("");
const [body,setBody]=useState("");

console.log("Selected Note ID:",useParams());
useEffect(() => {
  // Fetching the specific note by ID and set the state
  fetch(`https://notes-server-o8j5.onrender.com/notes/`, {
      headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
  })
  .then((res) => res.json())
  .then((data) => {
      if (data.msg) {
          toast.error(data.msg);
          navigate("/notes"); // Redirecting to the notes page if the note is not found
      }
          setNote(data);
          setTitle(data.title);
          setBody(data.body);
  })
  .catch((err) => {
      console.error(err);
      toast.error("Error fetching note details");
      navigate("/notes");
  });
}, [noteID, navigate]);

      const handleSubmit = async() => {
          const payload={
            title,body
          }
       // e.preventDefault();
        console.log(payload)

       //console.log()
       fetch(`https://notes-server-o8j5.onrender.com/notes/update/${noteID}`,{
        method:'PATCH',
        headers:{
            "Content-type":"application/json",
            "Authorization":`Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(payload)

       }).then(res=>res.json()).then(data=>{
        console.log(data)
        if (data) {
          setTitle("")
          setBody("")
          toast.success(data.msg);
      } else {
        toast.error("Error updating note");
        navigate("/notes");
      }
       }).catch((err)=>{console.log(err)
        toast.error(err);})
      };
  return (

    <DIV>
        <h3>Update Note</h3>
        <ToastContainer />
    <input  data-testid="user-title" 
      type="text"
      name="title"
       placeholder="Edit Title" 
       value={title}
       onChange={(e)=>setTitle(e.target.value)}
       required/>
    <input  data-testid="body"
        type="text"
        placeholder="Edit Note.."
        name="body"
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        required/>
    <button  onClick={handleSubmit}>Update</button>
    <ToastContainer />
    </DIV>
  );
};
const DIV = styled.div`
background-color: #d5e8e6;
color:#4d3b4a;
  width: 450px;
  padding: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  gap: 15px;
  align-items: center;
  box-shadow: rgba(92, 72, 89, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  input {
    width: 80%;
    height: 30px;
    font-size: larger;
    border-color: #bacac9;
  }
  button {
    background-color:#5c4859;
    color:#e2e9e8;
    width: 150px;
    height: 50px;
    padding: 5px;
    font-size: large;
    border-color: #bacac9;
    border-radius: 10px;
  }
`;
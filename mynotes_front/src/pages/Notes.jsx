import { useEffect, useState } from "react"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Notes=()=>{
    const [data ,setData]=useState([])
    // const [title,setTitle]=useState("");
    // const [body,setBody]=useState("");
    const navigate = useNavigate();
    useEffect(()=>{
       
        fetch("https://notes-server-o8j5.onrender.com/notes/",
        {
            headers:{
                "Content-type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            },
        }).then(res=>res.json()).then(data=>{
            console.log(data)
                if ([...data]) {
                    setData([...data]);

                } else {
                    toast.success(data.msg);
                }
           }).catch((err)=>{console.log(err)
            toast.error(" Please Login !");
           navigate("/login")}
           )
    },[navigate])
    return(

        <div>
                <ToastContainer />

                <h3>Your Notes</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMmGuVjdd9voNP1EUbGHujF-w4_2ebkXrjA&usqp=CAU" alt="notes" />
          <MA_NO>
            {data.map((ele)=>{
                return (
                    <DIV >
                        <h3>{ele.title}</h3>
                        <p>{ele.body}</p>
                        <LDIV >
                        <button
                        onClick={(()=>{
                            console.log(ele._id)
                        
                            navigate(`/update/${ele._id}`);

                        })}>Edit</button>
                        <button
                        onClick={(()=>{
                            fetch(`https://notes-server-o8j5.onrender.com/notes/delete/${ele._id}`,{
                                method:'DELETE',
                                headers:{
                                    "Content-type":"application/json",
                                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                                },
                               }).then(res=>res.json()).then(data=>{
                                // console.log(data)
                                // setData([...data])
                                    setData(prevData => prevData.filter(item => item._id !== ele._id));
                               }).catch(err=>console.log(err))   


                        })}>Delete</button>
                        </LDIV>
                    </DIV>
                )
            })}
           </MA_NO>
        </div> 

    )
}
;


const MA_NO=styled.div`
 display: grid;
 justify-content: space-evenly;
 grid-template-columns: repeat(2,1fr);
 
`
const DIV = styled.div`
background-color: #d5e8e6;
color:#4d3b4a;
  width: 400px;
  padding: 10px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 0.2rem solid #5c4859;
  border-radius: 10px;
  align-items: center;`;

const LDIV = styled.div`
    gap: 10px;
    font-size: larger;
    display: flex;
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
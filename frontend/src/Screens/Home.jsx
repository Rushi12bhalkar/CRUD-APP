import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


function Home() {


  const navigate = useNavigate()

  var apiUrl="http://localhost:8080/api"

    const[post,setPost] = useState([])

    const fetchPosts = async () => {
      const res = await axios.get(`${apiUrl}/list`);
      setPost(res.data);
    };

    useEffect(() => {
        fetchPosts();
      }, []);


      const handleUpdate = async (stud) => {
      navigate(`/edit/${stud._id}`)     
      }
   
      const handleDelete = async (stud) => {
        setPost(post.filter((p) => p._id !== stud._id));
        await axios.delete(`${apiUrl}/delete/${stud._id}`);
      };

     
   
  return (
   
   <>
   <h1 style={{textAlign:'center', color:'white', backgroundColor:'#0E0E0F'}}>PRMCEAM Student Dashboard</h1>
   <table className='table table-bordered  p-5'   style={{textAlign:'center', border:'3px ridge orange', backgroundColor:'#9DECE3', color:'black'}}>
    <tr>
      <th style={{"fontSize":"30px","fontFamily":"sans-serif", "backgroundColor":'#ECB110', "color":'whitesmoke'}}>Name</th> 
      <br></br>
      <th style={{"fontSize":"30px","fontFamily":"sans-serif", "backgroundColor":'#ECB110', "color":'whitesmoke'}}>Age</th>
      <br></br>
      <th style={{"fontSize":"30px","fontFamily":"sans-serif", "backgroundColor":'#ECB110', "color":'whitesmoke'}}>City</th>
      <br></br>
      <th style={{"fontSize":"30px","fontFamily":"sans-serif" ,"backgroundColor":'#ECB110', "color":'whitesmoke'}}>Department</th>
      <br></br>
      <th style={{"fontSize":"30px","fontFamily":"sans-serif", "backgroundColor":'#ECB110', "color":'whitesmoke'}} colSpan={2}>Action</th> 
    </tr>
   {
      post.map((e)=>{
        return(
          <>
          <tr>
            <td style={{"fontSize":'20px', "fontFamily":'monospace'}}>{e.name}</td>
            <br></br>
            <td  style={{"fontSize":'20px', "fontFamily":'monospace'}}>{e.age}</td>
            <br></br>
            <td  style={{"fontSize":'20px', "fontFamily":'monospace'}}>{e.city}</td>
            <br></br>
            <td  style={{"fontSize":'20px', "fontFamily":'monospace'}}>{e.department}</td>
            <br></br>

            <td  style={{"fontSize":'20px', "fontFamily":'monospace'}}><button  onClick={() => handleUpdate(e)} class="btn btn-warning">Edit</button></td>

            <td  style={{"fontSize":'20px', "fontFamily":'monospace'}}><button  onClick={() => handleDelete(e)} class="btn btn-danger">Delete</button></td>
          </tr>
          </>
        )
      })
   }
   </table>

  <center><a><Link to="/add"><button className='btn btn-warning'>Add New Student</button></Link></a></center>
    
    </>
  )
}

export default Home
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate,useParams} from 'react-router-dom';
    
function EditComp() {

    const apiUrl="http://localhost:8080/api/student"
    const apiUrl1 ="http://localhost:8080/api/update"

    const {id} = useParams()
    const [txt,setTxt] = useState({
        name:'',
        age:'',
        city:'',
        department:''
     
    })

    useEffect(()=>{
      fetchPosts()
    },[])

    const fetchPosts = async () => {
        const res = await axios.get(`${apiUrl}/${id}`);
        setTxt(res.data);
      };

    const navigate = useNavigate()

    function txtHandler(e)
    {
        var name = e.target.name;
        var value = e.target.value;
        setTxt({...txt,[name]:value})
    }

    const updateHandler = async (e)=>{
       e.preventDefault()
      await axios.put(`${apiUrl1}/${id}`,txt)
      return navigate('/home')
    }
    
  return (
    <>
     <section className="vh-100 bg-image"
  style={{"background-image": "url('https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=600')"}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{"border-radius": "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Update Student Record</h2>

              <form onSubmit={updateHandler}>

                <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" placeholder="Enter Your Name" name='name' value={txt.name} onChange={txtHandler} className="form-control form-control-lg" ></input >
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                <input type="number" placeholder="Enter Your Age"  name='age' value={txt.age} onChange={txtHandler} className="form-control form-control-lg"></input> 
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" name='city' placeholder="Enter Your City"  value={txt.city} onChange={txtHandler} className="form-control form-control-lg"></input>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" placeholder="Enter Your Department" name='department'  value={txt.department} onChange={txtHandler} className="form-control form-control-lg"></input><br></br><br></br>
                </div>

                <div className="d-flex justify-content-center">
                <input type="submit"  className="btn btn-success btn-block btn-lg gradient-custom-4 text-light" value="Update"></input>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
    
    </>
  
    
  )
}

export default EditComp;
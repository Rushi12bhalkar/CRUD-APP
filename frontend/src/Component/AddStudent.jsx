import React, {  useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



function AddStudent() {

    const navigate = useNavigate()

    const [txt,setTxt] = useState({
       name:"",
       age:"",
       city:"",
       department:""
    })

    function txtHandler(e)
    {
        var name = e.target.name;
        var value = e.target.value;
        setTxt({...txt,[name]:value})
    }


    function submitHandler(e)
    {
        e.preventDefault()
        console.log(txt)
        axios.post("http://localhost:8080/api/create",txt)
        navigate("/home")
    }
    

  return (
    <>
  <section className="vh-100 bg-image"
  style={{"background-image": "url('https://images.pexels.com/photos/960137/pexels-photo-960137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{"border-radius": "15px"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Add New Student</h2>

              <form onSubmit={submitHandler}>

                <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" placeholder="Enter Your Name" name='name' onChange={txtHandler} className="form-control form-control-lg" ></input >
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                <input type="number" placeholder="Enter Your Age"  name='age' onChange={txtHandler} className="form-control form-control-lg"></input> 
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" name='city' placeholder="Enter Your City"  onChange={txtHandler} className="form-control form-control-lg"></input>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" placeholder="Enter Your Department" name='department' onChange={txtHandler} className="form-control form-control-lg"></input><br></br><br></br>
                </div>

                <div className="d-flex justify-content-center">
                <input type="submit"  className="btn btn-success btn-block btn-lg gradient-custom-4 text-light" value="Add new Student"></input>
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

export default AddStudent;
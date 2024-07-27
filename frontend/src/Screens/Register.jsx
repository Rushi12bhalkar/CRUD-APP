import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Register() {

    const[credentials, setCredentials] = useState({
    
        name:'',
        email:'',
        password:'',
        geolocation:''
    })

    const handleSubmit = async(e) =>
    {
      e.preventDefault();
      const responce = await fetch('http://localhost:8080/api/createuser', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.geolocation})
      })
      const json = await responce.json()
      console.log(json);

      if(json.success)
      {
          alert("Register Successfully")
      }
      else
      {
        alert("Invalid Credentials")
      }
    }
    
    const handleChange = (e) =>
    {
        setCredentials({...credentials,[e.target.name]:e.target.value})

    }

    return (
        <>
       <section className="vh-120" style={{'background-color': "#e8f48c"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{'border-radius': '1rem'}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://images.pexels.com/photos/7713194/pexels-photo-7713194.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="login form" className="img-fluid" style={{'border-radius': '1rem 0 0 1rem'}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form onSubmit={handleSubmit}>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{'color': '#ff6219'}}></i>
                          <span className="h1 fw-bold mb-0 fst-italic">PRMCEAM</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{'letter-spacing': '1px'}}>Registration Form</h5>

                        <div data-mdb-input-init className="form-outline mb-4">
                          
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control"  name='name' value={credentials.name} onChange={handleChange} />      
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          
                          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={handleChange} />

                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                         
                          <label htmlFor="password" className="form-label">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={handleChange} />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                         
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"  name='geolocation' value={credentials.geolocation} onChange={handleChange}/>
                        </div>

                        <div className="pt-1 mb-4">
                        <button type="submit" className=" m-3 btn btn-success">REGISTER</button>
                        </div>

                       
                        <p className="mb-5 pb-lg-2" style={{'color': '#393f81'}}>Already a user? <Link to="/login"
                          style={{'color': '#393f81'}}>Login here</Link></p>
                      </form>

                    </div>
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

export default Register
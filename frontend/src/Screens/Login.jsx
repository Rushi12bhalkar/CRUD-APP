import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Login() {
  const [credentials, setCredentials] = useState({

    email: '',
    password: '',
   
  })

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({email: credentials.email, password: credentials.password}))
    const responce = await fetch('http://localhost:8080/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({  email: credentials.email, password: credentials.password })
    })
    const json = await responce.json()
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials")
    }

    if (json.success) {
      localStorage.setItem("userEmail",credentials.email)
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate('/home');
    }
  }

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })

  }

  return (
    <>
      <section className="vh-100" style={{'background-color': "#ffa700"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{'border-radius': '1rem'}}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://images.pexels.com/photos/8199770/pexels-photo-8199770.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="login form" className="img-fluid" style={{'border-radius': '1rem 0 0 1rem'}} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">

                      <form onSubmit={handleSubmit}>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{'color': '#ff6219'}}></i>
                          <span className="h1 fw-bold mb-0 fst-italic">PRMCEAM</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{'letter-spacing': '1px'}}>Sign into your account</h5>

                        <div data-mdb-input-init className="form-outline mb-4">
                          
                          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={handleChange} />

                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                         
                          <label htmlFor="password" className="form-label">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={handleChange} />
                        </div>

                        <div className="pt-1 mb-4">
                        <button type="submit" className=" btn btn-dark btn-lg btn-block">Login</button>
                        </div>

                       
                        <p className="mb-5 pb-lg-2" style={{'color': '#393f81'}}>Don't have an account? <Link to="/"
                          style={{'color': '#393f81'}}>Register here</Link></p>
                      
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

export default Login
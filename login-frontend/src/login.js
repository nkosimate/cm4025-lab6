import React, {useState} from 'react'
import axios from 'axios'

export default function Signup() {
  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    open: false,
    error: ''
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const login = (e) =>  {
    e.preventDefault();
    console.log("Signing up")
    let data = {"email": values.email, "password" : values.password}
    var requestURI = "http://127.0.0.1:8000/auth/signin"
    console.log(requestURI)
    axios.post(requestURI, data)
    .then(response => {
      console.log("Setting JWT in storage")
      sessionStorage.setItem('auth', JSON.stringify(response.data));
    })
    .catch(err => {
      console.log(err)
    });
  }
  


  return (
    <div id="signup">
      <form>
        <label>
          e-mail:
          <input type="text" name="email" onChange={handleChange('email')}/>
        </label>
        <br></br>
        <label>
          Password:
          <input type="text" name="password" onChange={handleChange('password')} />
        </label>
        <br></br>
        <input type="submit" value="Submit" onClick={login} />
      </form>
    </div>
  );
}

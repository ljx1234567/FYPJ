import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function Login() {   
    const [values, setValues] = useState({
        id: '',
        password: '',
    });
    const [formSubmit, setFormSubmit] = useState(false);

    const handleIdChange = (e) => {
        setValues({...values, id: e.target.value})
    };

    const handleNameChange = (e) => {
        setValues({...values, name: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmit(true);

        document.getElementById("id").textContent=values.id;
        document.getElementById("password").textContent=values.name;
        
        fetch('https://0eucf0yzk0.execute-api.ap-southeast-1.amazonaws.com/production/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }).then(response => {
            response.status === 200 ? console.log("form posted") : console.log("form failed")
        })

    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                {formSubmit ? <div className="success-message">You have logged in successfully!</div> : null}
                
                <input type="text" name="id" placeholder="Id" onChange={handleIdChange} value={values.id} />
                <br></br>
                <input type="text" name="password" placeholder="Password" onChange={handleNameChange} value={values.name} />
                <br></br>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>

            <p id="id">id</p>
            <p id="password">password</p>
        </div>
    )

}

export default Login;
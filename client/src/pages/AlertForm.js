import React, { useState, useEffect } from 'react';

function AlertForm() {
  const [data, getData] = useState([])
  const URL = 'https://0eucf0yzk0.execute-api.ap-southeast-1.amazonaws.com/production/roles';

  useEffect(() => {
      fetchData()
  }, [])

  const validate = (values) => {
        const errors = {}
        if(!values.option){
            errors.option = "Option is required";
        }
        return errors;
    }
   
    
    var jsonData = {
        "users": [
            {
                "name": "alan", 
                "age": 23,
                "username": "aturing"
            },
            {
                "name": "john", 
                "age": 29,
                "username": "__john__"
            }
        ]
      }

  const handleClick = () => {
      fetch(URL, {

        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify(jsonData) // body data type must match "Content-Type" header

        })
  } 

  const initialVlaues = {option: ""};
    const [formValues, setFormValues]= useState(initialVlaues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target
        setFormValues({...formValues, [name]:value});
        console.log(formValues)
    }
    
    // event listner
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        if(Object.keys(formErrors).length === 0 && isSubmit){

            const userOption = e.target[0].value;
            const userOptionList = Object.keys(data);

            if (userOptionList.includes(userOption)){
                alert(userOption);
                return(document.getElementById(userOption).textContent=data[userOption])
                
            }
            else {
                alert("Invalid user selected");
            }

        }
    }

    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
  
            .then((response) => {
                console.log(response);
                getData(response);
            })
  
    }

  return (
      <div className='App'>
        <form onSubmit={handleSubmit}>
            <div class="form-group" style={{textAlign: "center"}}>
                <label for="option">Option:</label>
                <select 
                style={{margin: "auto", display: "block", width: "40%"}}
                type="text"
                name="option"
                value={ formValues.option }
                class="form-control" id="age"
                onChange={handleChange}>
                    <option value="">Please select a role</option>
                    <option value="users">User</option>
                    <option value="admins">Admin</option>
                </select>
                <p style={{color: "red"}}>{formErrors.option}</p>

                <div class="form-group" style={{textAlign: "center"}}>
                    <label for="name">Name:</label>
                    <input style={{margin: "auto", display: "block", width: "40%"}} type="text" name="name" class="form-control" id="name" placeholder="name" value={ formValues.name } onChange={handleChange}/>
                    <p style={{color: "red"}}>{formErrors.name}</p>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>

          <h1>Display JSON data in React JS</h1>
          
          <p id="users"></p>
          <p id="admins"></p>

        
        <form onSubmit={handleClick}>
            <p>aloha amori akiyo</p>
            <div onClick={handleClick} style={{
                textAlign: 'center',
                width: '100px',
                border: '1px solid gray',
                borderRadius: '5px'
                }}>
                Send data to backend
            </div>
        </form>

      </div>
  );
  }
  
  export default AlertForm;
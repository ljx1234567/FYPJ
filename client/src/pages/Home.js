import React, { useEffect, useState } from 'react'

function Home() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

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

  const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      if(Object.keys(formErrors).length === 0 && isSubmit){
          
      }
  }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length == 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors] );

    const validate = (values) => {
        const errors = {}
        if(!values.option){
            errors.option = "Option is required";
        }
        return errors;
    }

  return (
    <div>

      <pre>{ JSON.stringify(formValues, undefined, 2) }</pre>
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
                    <option value="">----------------------------------------------------------------</option>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>
                <p style={{color: "red"}}>{formErrors.gender}</p>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>

      {(typeof backendData.admins === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.admins.map((admin, i) => (
          <p key={i}>{admin}</p>
        ))
      )}

    </div>
  )
}
  
  export default Home;
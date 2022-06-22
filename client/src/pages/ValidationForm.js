import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';

function ValidationForm() {
    const initialVlaues = {name: "", age: "", gender: "", email: "", remark: "", nric: ""};
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
            alert(`Submitted info: \n\nName: ${formValues.name}\nAge: ${formValues.age}\nGender: ${formValues.gender}\nEmail: ${formValues.email}\nRemark: ${formValues.remark}`);
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
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regMatch = /^[a-zA-Z]*$/;
        const re = /^[0-9\b]+$/;
        if(!values.name){
            errors.name = "Name is required";
        }
        if(!values.age){
            errors.age = "Age is required";
        }
        if(!values.gender){
            errors.gender = "Gender is required";
        }
        if(!values.email){
            errors.email = "Email is required";
        } else if(!regex.test(values.email)){
            errors.email = "This is not a valid email format";
        }
        if(!values.nric){
            errors.nric = "NRIC is required";
        }else if(!((values.nric).length===9)){
            errors.nric = "This is not a valid NRIC format1";
        } else if(!((values.nric)[0]==='T' || (values.nric)[0]==='S' || (values.nric)[0]==='G')){
            errors.nric = "This is not a valid NRIC format2";
        } else if (!regMatch.test(values.nric[8])){
            errors.nric = "This is not a valid NRIC format3";
        } else if (!(re.test(values.nric[1]) && re.test(values.nric[2]) && re.test(values.nric[3]) && re.test(values.nric[4]) && re.test(values.nric[5]) && re.test(values.nric[6]) && re.test(values.nric[7]) )){
            errors.nric = "This is not a valid NRIC format4";
        }
        return errors;
    }
        
    return(
        
        <div className='App'>
            <pre>{ JSON.stringify(formValues, undefined, 2) }</pre>
            <form onSubmit={handleSubmit}>
                <h1>Information form</h1>
                <div class="form-group" style={{textAlign: "center"}}>
                    <label for="name">Name:</label>
                    <input style={{margin: "auto", display: "block", width: "40%"}} type="text" name="name" class="form-control" id="name" placeholder="name" value={ formValues.name } onChange={handleChange}/>
                    <p style={{color: "red"}}>{formErrors.name}</p>
                </div>
                <div class="form-group" style={{textAlign: "center"}}>
                    <label for="name">Age:</label>
                    <input style={{margin: "auto", display: "block", width: "40%"}} type="number" min="0" name="age" class="form-control" id="age" placeholder="age" value={ formValues.age } onChange={handleChange}/>
                    <p style={{color: "red"}}>{formErrors.age}</p>
                </div>
                <div class="form-group" style={{textAlign: "center"}}>
                    <label for="gender">Gender:</label>
                    <select 
                    style={{margin: "auto", display: "block", width: "40%"}}
                    type="text"
                    name="gender"
                    value={ formValues.gender }
                    class="form-control" id="age"
                    onChange={handleChange}>
                        <option value="">----------------------------------------------------------------</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <p style={{color: "red"}}>{formErrors.gender}</p>
                </div>
                <div className='field'>
                    <label for="nric">NRIC:</label>
                    <input style={{margin: "auto", display: "block", width: "40%"}} class="form-control" id="nric" type='text' name='nric' placeholder='NRIC' value={ formValues.nric }
                    onChange={handleChange}/>
                    <p style={{color: "red"}}>{formErrors.nric}</p>
                </div>
                <div className='field'>
                    <label for="email">Email:</label>
                    <input style={{margin: "auto", display: "block", width: "40%"}} class="form-control" type='text' name='email' placeholder='email' value={ formValues.email }
                    onChange={handleChange}/>
                    <p style={{color: "red"}}>{formErrors.email}</p>
                </div>
                <div className='field'>
                    <label for="remark">Remark:</label><br></br>
                    <textarea style={{margin: "auto", display: "block", width: "40%"}} class="form-control" type='text' name='remark' placeholder='remark' value={ formValues.remark }
                    onChange={handleChange}/>
                </div>    
                <br></br>
            
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>    
    )
}

export default ValidationForm;

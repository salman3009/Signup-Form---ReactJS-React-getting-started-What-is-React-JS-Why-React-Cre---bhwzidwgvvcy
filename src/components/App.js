import React, {useState} from 'react';
import '../styles/App.css'

function App() {

    const [getForm,setForm] = useState({
        name:'',
        email:'',
        gender:'male',
        phoneNumber:'',
        password:''
    });

    const [getError,setError] = useState("");

    const[username,setusername] =useState("");

    const onChangeHandler=(event)=>{
        setForm({
          ...getForm,
          [event.target.name]:event.target.value
        })
    }

    const getErrorHandler=()=>{
         
      if(!getForm.name && !getForm.email && !getForm.phoneNumber && !getForm.password){
        setError('All fields are mandatory');
        return true;
      }

      if(!getForm.name){
        setError('Name Error');
        return true;
      }

      if(!getForm.email){
        setError('Email Error');
        return true;
      }

      if(!getForm.phoneNumber){
        setError('Phone Number Error');
        return true;
      }

      if(!getForm.password){
        setError('Password Error');
        return true;
      }

      if(!/^[a-zA-z0-9\s]*$/.test(getForm.name)){
        setError('Name is not alphanumeric');
        return true;
      }

      if(!(getForm.email).includes("@")){
        setError('Email must contain @');
        return true;
      }
  
      if(!/^(male|female|other)$/.test(getForm.gender)){
        setError(' Please identify as male, female or others');
        return true;
      }

      if(!/^[0-9]*$/.test(getForm.phoneNumber)){
        setError('Phone Number must contain only numbers');
        return true;
      }

      if(getForm.password.length<=6){
        setError('Password must contain atleast 6 letters');
        return true;
      }


          return false;
    }

    const onSubmitHandler=(event)=>{
      setError('');
      setusername('');
       event.preventDefault();
       if(getErrorHandler()){
            return true;
       }
       let username = getForm.email.split("@")[0];
       setusername(`Hello ${username}`);
       clearInputs();

    }

    function clearInputs(){
      setForm({
        name:'',
        email:'',
        gender:'male',
        phoneNumber:'',
        password:''
      })
    }


   return (<div>
        <form>
          <div>
            Name:<input type="text" value={getForm.name} onChange={onChangeHandler} data-testid='name' name="name"/>
          </div>
          <div>
          Email address :<input type="email"  value={getForm.email} onChange={onChangeHandler} data-testid='email' name="email"/>
          </div>
          <div>
            Gender:<select data-testid='gender' value={getForm.gender} onChange={onChangeHandler} name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
            </select>
          </div>
          <div>
            Phone:<input type="number"  value={getForm.phoneNumber} onChange={onChangeHandler} data-testid = 'phoneNumber' name="phoneNumber"/>
          </div>
          <div>
            Password:<input type="password" value={getForm.password} onChange={onChangeHandler} data-testid='password' name="password"/>
          </div>
          <div>
            <button data-testid='submit' onClick={onSubmitHandler}>Submit</button>
          </div>
          {getError}
          {username && <h1>{username}</h1>}
        </form>
   </div>)
}

export default App;

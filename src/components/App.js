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
          return false;
    }

    const onSubmitHandler=(event)=>{
      setError('');
       event.preventDefault();
       if(getErrorHandler()){
            return true;
       }
       alert("success");

    }


   return (<div>
        <form>
          <div>
            Name:<input type="text" onChange={onChangeHandler} data-testid='name' name="name"/>
          </div>
          <div>
          Email address :<input type="email" onChange={onChangeHandler} data-testid='email' name="email"/>
          </div>
          <div>
            Gender:<select data-testid='gender' onChange={onChangeHandler} name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
            </select>
          </div>
          <div>
            Phone:<input type="number" onChange={onChangeHandler} data-testid = 'phoneNumber' name="phoneNumber"/>
          </div>
          <div>
            Password:<input type="password" onChange={onChangeHandler} data-testid='password' name="password"/>
          </div>
          <div>
            <button data-testid='submit' onClick={onSubmitHandler}>Submit</button>
          </div>
          {getError}
        </form>
   </div>)
}

export default App;

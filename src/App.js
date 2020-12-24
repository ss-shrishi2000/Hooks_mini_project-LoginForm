import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';



const App = () =>{

    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [showpassword , setShowPassword] =useState(true);

     return(
        <div className="container" >

        <input type="text" 
            placeholder="Enter the Username"
            value={username}
            onChange={(e) =>  setUsername(e.target.value) }
        />

        <input type={showpassword ? 'text' : 'password' } 
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>  setPassword(e.target.value) }
        />

        <h2>{username} </h2>
        <h2> { showpassword ? password : '*'.repeat(password.length) } </h2>

        <button onClick={ (e) => setShowPassword(!showpassword) }> Show/Hide Password </button>

        </div>
     )
}

export default App;

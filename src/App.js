import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/PassChar';
import { ToastContainer, toast } from 'react-toastify';




function App() {
  let [uppercase, setUppercase] = useState(false)
  let [lowercase, setLowercase] = useState(false)
  let [number, setNumber] = useState(false)
  let [symbols, setSymbols] = useState(false)
  let [passwordlen, setPasswordLen] = useState(8)
  let [fPass, setPass] = useState('')

  let createPassword = () => {
    let finalPass = ''
    let charSet = ''
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) charSet += UC
      if (lowercase) charSet += LC
      if (number) charSet += NC
      if (symbols) charSet += SC
      for (let i = 0; i < passwordlen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length)) //Math.floor= roundoff, Math.random= random values from 0 to 1 like 0.5 etc.
      }                   // charAt= give the value of the index no. Eg. 4=D
      setPass(finalPass)
    }
    else {
      toast.error("Please Select Atleast One Checkbox!..")
    }
  }

  let copyPass = () => {
    navigator.clipboard.writeText(fPass) //write the specified text to the system clipboard
     toast.success("Password Copied to Clipboard!..");
  }


  return (
  
    <>
    <ToastContainer />
      <div className="passwordBox">
        <h2>Password Generator</h2>

        

        <div className='passwordBoxin'>
          <input type='text' value={fPass} readOnly /> <button onClick={copyPass}> Copy </button>
        </div>

        <div className='passLength'>
          <label>Password Length</label>
          <input type='number' value={passwordlen} max={20} min={8} onChange={(event) => setPasswordLen(event.target.value)} 
           onKeyDown={(e) => {
            e.preventDefault();
            toast.info("Use the up/down arrows to set the password length.");
          }}/>
        </div>

        <div className='passLength'>
          <label>Include Uppercase letter</label>
          <input type='checkbox' checked={uppercase} onChange={() => setUppercase(!uppercase)} />
        </div>

        <div className='passLength'>
          <label>Include Lowercase letter</label>
          <input type='checkbox' checked={lowercase} onChange={() => setLowercase(!lowercase)} />
        </div>

        <div className='passLength'>
          <label>Include Numbers</label>
          <input type='checkbox' checked={number} onChange={() => setNumber(!number)} />
        </div>

        <div className='passLength'>
          <label>Include Symbols</label>
          <input type='checkbox' checked={symbols} onChange={() => setSymbols(!symbols)} />
        </div>

        <button className='btn' onClick={createPassword}>
          Generate Password
        </button>


      </div>
    </>
  );

}
export default App;


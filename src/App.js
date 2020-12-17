import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [password, setPassword] = useState('')
  const [disabled, setDisabled] = useState(false)

  const onSubmit = (evt) => {
    evt.preventDefault()
    console.log('Submitted', password)
  }

  useEffect(() => {
    setDisabled(password.length < 6)
  }, [password])

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor='password-input'>
          Enter password
          <input onChange={evt => setPassword(evt.target.value)} type='password' id='password-input' placeholder='Password'></input>
        </label>
        <button type='submit' disabled={disabled}>Login</button>
      </form>
    </>
  );
}

export default App;

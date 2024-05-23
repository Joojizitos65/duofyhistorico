import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/Loginestilo.css"

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()

    if (email === 'Usuario@gmail.com' && password === 'usuario') {
      navigate('/home')
    } else {
      setError('Email ou senha inválidos.')
    }
  }
  useEffect(() => {
    document.body.style.backgroundImage = "url(./public/fundo.PNG)";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError('')
      }, 3000)
    }
  }, [error])

  return (
    
    <div className='Lognin'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='Emailtxt'>
          <label>Email:</label>
          <input className='Emailinput' type="email" value={email} onChange={handleEmailChange} />
        </div>
        <br></br>
        <div className='Senhatxt'>
          <label>Senha:</label>
          <input className='Senhainput' type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className='Botaoentrar' type="submit">Entrar</button>
        <br></br>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>

  );
}

export default Login
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';

const LoginForm = () => {
  return(
    <div className='login-form'>
      <div className='login-hero'>
        <div className='login-container'>
          <PersonIcon className='login-logo'/>
          
        </div>
        <h3 className='login-title'>Login into your account</h3>
      </div>
      <form >
        <div className='email'>
          <label>Email Address</label>
          <input className="form-control form-control-lg" type="text" placeholder="Email" aria-label=".form-control example"/>
        </div>
        <div className='password'>
          <label>Password</label>
          <input className="form-control form-control-lg" type="text" placeholder="Password" aria-label=".form-control example"/>
        </div>
        <Link href='/'>
          <a className='forgot-password float-end'>Forgot Password?</a>
        </Link>
        <button className='btn btn-warning login-btn btn-lg'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;
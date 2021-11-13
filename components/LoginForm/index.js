import Link from 'next/link';
import Image from 'next/image';
import PersonIcon from '@mui/icons-material/Person';
// import FacebookLogin from 'react-facebook-login';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const LoginForm = () => {

  const handleFacebookLogin = () => {

  }

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
          <input className="form-control form-control-lg" type="text" placeholder="Enter your email, mobile or username" aria-label=".form-control example"/>
        </div>
        <div className='password'>
          <label>Password</label>
          <input className="form-control form-control-lg" type="text" placeholder="Enter your password" aria-label=".form-control example"/>
        </div>
        <Link href='/'>
          <a className='forgot-password float-end'>Forgot Password?</a>
        </Link>
        <button className='btn btn-warning login-btn btn-lg'>Login</button>
      </form>

      <div className='or'>OR</div>
      <button className='facebook-login'>
        <FacebookIcon/> Sign In With Facebook
      </button>
      <button className='google-login'>
        <div className='google-icon'>
          <Image
            width='25px'
            height='25px'
            src="/google-logo.png"
          />
        </div> Sign In With Google
      </button>
      {/* <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        className='facebook-btn'
        onClick={() => handleFacebookLogin()}
        callback={responseFacebook} 
      /> */}
    </div>
  )
}

export default LoginForm;
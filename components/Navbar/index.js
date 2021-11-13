import Link from 'next/link';

const Navbar = props => {
  return(
    <div className='nav'>
      <Link href='/'><a>Home</a></Link>
      <Link href='/login'><a>Login</a></Link>
      <Link href='/signup'><a>Signup</a></Link>
    </div>
  )
}

export default Navbar;
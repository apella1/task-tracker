import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'> 
      <p>&copy; Copyright 2022</p>
      <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer

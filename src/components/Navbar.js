// navbar component
import { Link } from 'react-router-dom'

export default function Navbar(){
    return <div className='nav'>
        <Link to='/'>Homepage</Link>
        <Link to='/Aboutus'>About Us</Link>
        <Link to='/Cameras'>Cameras</Link>
        <Link to='/Photos'>Photos</Link>

    </div>
}

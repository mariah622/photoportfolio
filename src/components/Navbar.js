// navbar component
import { Link } from 'react-router-dom'

export default function Navbar({setPage}){
    return <div className='nav'>
        {/* <button>Home</button>
        <button>About Us</button> */}
        {/* <button onClick={e => setPage('Cameras')}>Cameras</button>
        <button onClick={e => setPage('Photos')}>Photos</button> */}
        {/* <button> Reviews</button> */}
        {/* <button>Commetns</button> */}

        <Link to='/Cameras'>Cameras</Link>
        <Link to='/Photos'>Photos</Link>
    </div>
}

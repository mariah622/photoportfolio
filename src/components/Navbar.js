// navbar component

export default function Navbar({setPage}){
    return <div class='nav'>
        {/* <button>Home</button>
        <button>About Us</button> */}
        <button onClick={e => setPage('Cameras')}>Cameras</button>
        <button onClick={e => setPage('Photos')}>Photos</button>
        {/* <button> Reviews</button> */}
        {/* <button>Commetns</button> */}
    </div>
}

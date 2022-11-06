import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='nav-container'>
            <ul className='nav-bar'>
                <li><Link className='link' to="/">Home</Link> </li>
                <li><Link className='link' to="/counter">Counter</Link></li>
            </ul>
        </div >
    );
}

export default Navigation;
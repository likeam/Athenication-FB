import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const user = JSON.parse(localStorage.getItem('user'));
    
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear('user');
        alert("Logout Sucessfully");
        navigate('/');
    }


    return (
        <div className='main lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#2a056f] py-4 shadow-md'>
            <div className="left">
                <div className="text-2xl font-bold text-center text-white logo">E-NoteBook</div>
            </div>
            <div className="right">
                <ul className='flex items-center justify-center space-x-4 text-white'>
                    <Link to={'/'}>
                        <li className='cursor-pointer'>Home</li>
                    </Link>
                    {!user && <Link to={'/signin'}>
                        <li className='cursor-pointer'>Signin</li>
                    </Link>}
                    
                    {!user && <Link to={'/login'}>
                        <li className='cursor-pointer'>Login</li>
                    </Link>}
                    {user && <li onClick={logout} className='cursor-pointer'>Logout</li> }
                    {user && <li  className='cursor-pointer'>Welcome : {user.user.email}</li> }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
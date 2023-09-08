import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
function Navbar() {
    const data = useCart();
    const [cartView,setCartView] = useState(false)
    const navigate = useNavigate();
    const handleOnClick = ()=>{
        localStorage.removeItem('authToken');
        navigate("/login");

    }

  return (
    
    <div>
        <nav className="navbar navbar-expand-lg bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand fs-1 fst-italic" to="/">Go Food</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active fs-5" aria-current="page" to="/home">Home</Link>
                        </li>
                        {
                            localStorage.getItem("authToken")?
                            <li className="nav-item">
                        <Link className="nav-link active fs-5" aria-current="page" to="/myorder">My Order</Link>
                        </li>:""
                        }     
                    </ul>
                    
                    
                    {
                        (!localStorage.getItem("authToken"))?
                        <div className='d-flex'>
                        <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                        <Link className="btn bg-white text-success mx-1" to="/signup">SignUp</Link>
                     
                    </div>:
                    <div className='d-flex'>
                        <div className="btn bg-white text-success mx-1" onClick={()=>{setCartView(true)}}>Cart
                        <span className="badge text-bg-secondary">{data.length}</span>

                        </div>
                        {cartView?<Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
                        <div className="btn bg-white text-success mx-1" to="/" onClick = {handleOnClick}>LogOut</div>
                     
                    </div>
                    }
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
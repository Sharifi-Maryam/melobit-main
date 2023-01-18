import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import logo from "../images/logo.svg";
import search from "../images/search.svg";
import {Link} from 'react-router-dom';


const Header= () => {
    return (
        <header >
            <div className='container-fluid mt-4'>
            <div className='row align-items-center justify-content-between'>
                <div className='col-md-12 col-sm-6 col-6 text-md-center text-sm-end text-end'>
                    <nav>
                        <ul className='m-0 p-0'>
                            <li className='d-inline-block mx-2'>
                                <Link to="/" className='text-decoration-none'>صفحه اصلی</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='col-md-7 text-end' dir='rtl'>
                  <Link to="/search"className='text-decoration-none '><div id='searchDiv' className='d-flex align-items-center justify-content-between' ><img src={search} alt="search icon" /> <span dir='ltr'>search ...</span> </div> </Link>  
                  </div>


            </div>
            </div>

        </header>
    );
}

export default Header;
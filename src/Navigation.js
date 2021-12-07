import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navigation = () =>{
    return (
      <div className="containers">
      <header className="d-flex justify-content-center py-3 rounded shadow">
        <ul className="nav nav-pills mynavleft">
             <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                 All Types
             </button>
        <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Link 1</Link></li>
            <li><Link className="dropdown-item" to="/">Link 2</Link></li>
            <li><Link className="dropdown-item" to="/">Link 3</Link></li>
        </ul>

          <li className="nav-item"><a to="/" className="nav-link">Popular Products</a></li>
          <li className="nav-item"><a to="/" className="nav-link">High Price</a></li>
          <li className="nav-item"><a to="/" className="nav-link">Low Price</a></li>
          
             <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                Price   
             </button>
        <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Link 1</Link></li>
            <li><Link className="dropdown-item" to="/">Link 2</Link></li>
            <li><Link className="dropdown-item" to="/">Link 3</Link></li>
        </ul>

        </ul>
        
      </header>
    </div>
    );
}

export default Navigation;
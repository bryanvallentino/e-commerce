import React from 'react';
import sofa from './image/sofa.jpg';
import sofa2 from './image/sofa2.jpg';
import sofa3 from './image/sofa3.jpg';
import './style.css';
import Footer from './Footer';


const Product = () =>{
    return(
        <section className="py-5 selection-products">
            <div className="container">
                <div className="row">
            <div class="col-md-6 col-lg-1 col-xl-3">
                
                
            <div class="col">

                <div class="card">
                

                <img src={sofa} class="card-img" alt="sofa"/>
                <div class="card-body">
                    <h5 class="card-title">Wooden Chair</h5>
                    
                    
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
                </div>
            </div>
            </div>
           
            <div class="col-md-6 col-lg-4 col-xl-3">
                
                
                <div class="col">
    
                    <div class="card">
                    
    
                    <img src={sofa2} class="card-img" alt="sofa"/>
                    <div class="card-body">
                        <h5 class="card-title">Wooden Chair</h5>
                        
                        
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    </div>
                </div>
                </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="col">
                <div class="card">
                <img src={sofa3} class="card-img" alt="sofa"/>
                <div class="card-body">
                    <h5 class="card-title">Wooden Chair</h5>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
                </div>
                </div>
            </div>
            </div>
            </div>
            
        </section>
    );
}

export default Product;

const Navigation = () =>{
    return (
        <div className="containers">
          <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
                 <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                     All Types
                 </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Link 1</a></li>
                <li><a className="dropdown-item" href="#">Link 2</a></li>
                <li><a className="dropdown-item" href="#">Link 3</a></li>
            </ul>

              <li className="nav-item"><a href="#" className="nav-link">Popular Products</a></li>
              <li className="nav-item"><a href="#" className="nav-link">High Price</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Low Price</a></li>
              
                 <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">
                    Price   
                 </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Link 1</a></li>
                <li><a className="dropdown-item" href="#">Link 2</a></li>
                <li><a className="dropdown-item" href="#">Link 3</a></li>
            </ul>

            </ul>
            
          </header>
        </div>
    );
}

export default Navigation;
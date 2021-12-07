import React from 'react';
import { Link } from 'react-router-dom';
import sofa from './image/sofa.jpg';
import sofa2 from './image/sofa2.jpg';
import sofa3 from './image/sofa3.jpg';
import './style.css';



const Product = () =>{
    return(
        <section className="py-5">
            <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                
            <div className="col">
        
                <div className="card">
                <div className="row">

                <div className=" col-lg-6 opacity-50 ">
                    <h5><span class="badge bg-secondary text-dark-50">NEW</span></h5>
                </div>

                <div className="dropdown  col-lg-6 text-secondary text-end ">
                    <Link className="navbar-brand text-secondary " to="/"> <i className="fas fa-heart"></i></Link>
                    <Link className="navbar-brand text-secondary m-2" to="/"><i class="fa fa-list"></i></Link>
                </div>

                </div>
                
                <img src={sofa} className="card-img" alt=""/>
                                
                <div className="card-body">
                    <h5 className="card-title">Wooden Chair</h5>
                    
                    <div className="row">
                            <div className="col-lg-6">
                                <div className="m-3 text-center">
                                    <div className="bintang">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            </div>
                            </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="text-center m-1 mt-2">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Rp 12.000" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span class="input-group-text" id="basic-addon2"><i className=" fa fa-shopping-cart"></i></span>
                                    </div>
                                </div>
                            </div>

                        </div>                      
                </div>
                </div>
            </div>
                       
            <div className="col">

                <div className="card">
                <div className="row">

                <div className=" col-lg-6 opacity-50 ">
                    <h5><span class="badge bg-secondary text-dark-50">NEW</span></h5>
                </div>

                <div className="dropdown  col-lg-6 text-secondary text-end ">
                <Link className="navbar-brand text-secondary " to="/"> <i className="fas fa-heart"></i></Link>
                    <Link className="navbar-brand text-secondary m-2" to="/"><i class="fa fa-list"></i></Link>
                </div>

                </div>
        
                <img src={sofa2} className="card-img" alt=""/>
                                
                <div className="card-body">
                    <h5 className="card-title">Wooden Chair</h5>
                    
                    <div className="row">
                            <div className="col-lg-6">
                                <div className="m-3 text-center">
                                    <div className="bintang">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            </div>
                            </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="text-center m-1 mt-2">
                                <div class="input-group">
                            <input type="text" class="form-control" placeholder="Rp 12.000" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span class="input-group-text" id="basic-addon2"><i className=" fa fa-shopping-cart"></i></span>
                                    </div>
                                </div>
                            </div>

                        </div>                      
                        </div>
                        </div>
                        </div>

                    <div className="col">

                    <div className="card">
                    <div className="row">

                    <div className=" col-lg-6 opacity-50 ">
                        <h5><span class="badge bg-secondary text-dark-50">NEW</span></h5>
                    </div>

                    <div className="dropdown  col-lg-6 text-secondary text-end ">
                    <Link className="navbar-brand text-secondary " to="/"> <i className="fas fa-heart"></i></Link>
                    <Link className="navbar-brand text-secondary m-2" to="/"><i class="fa fa-list"></i></Link>
                    </div>

                    </div>
                    <img src={sofa3} className="card-img" alt=""/>
                                    
                    <div className="card-body">
                        <h5 className="card-title">Wooden Chair</h5>
                        
                        <div className="row">
                                <div className="col-lg-6">
                                    <div className="m-3 text-center">
                                        <div className="bintang">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                </div>
                                </div>
                                </div>

                                <div className="col-lg-6">
                                <div className="text-center m-1 mt-2">
                                <div class="input-group">
                                <input type="text" class="form-control" placeholder="Rp 12.000" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span class="input-group-text" id="basic-addon2"><i className=" fa fa-shopping-cart"></i></span>
                                        </div>
                                    </div>
                                </div>

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


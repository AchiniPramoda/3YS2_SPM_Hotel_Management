import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"
import ReactToPrint from 'react-to-print';

import RestaurantActions from './RestaurantActions';

import "../../../../../../src/index.css";
import Navbar from "../../../../Navbar/NavbarResAdmin";
import { FaRegListAlt, FaPlusCircle } from 'react-icons/fa';
import {MdArrowBackIosNew} from 'react-icons/md';


class AllRestaurantsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            filterdRestaurants: [],
            searchTag: "",
            isGen: false
        }
    }

    updateContent = () => {
        axios.get("http://localhost:8345/api/restaurants/").then(res => {
            this.setState({
                restaurants: res.data,
                filterdRestaurants: res.data
            });
        }).catch(err => {
            console.log(err);
        });
    }

    // Get all restaurants from datasbase
    componentDidMount() {
        this.updateContent();
    }

    getRedirectButton = () => {
        // return <button type="button" onClick={() => { this.props.history.push("/admin/restaurants/CreateRestaurant") }} className="view1">Create Restaurant</button>
    }

    // Function for search Restaurants
    search = (e) => {
        let searchTag = e.target.value.toLowerCase();
        let filterdRestaurants = [];

        this.state.restaurants.forEach(pack => {
            if (pack.restaurantName.toLowerCase().includes(searchTag) || pack.restaurantId.toLowerCase().includes(searchTag)) {
                filterdRestaurants.push(pack)
            }
        })

        this.setState({
            filterdRestaurants,
            searchTag
        });

    }

    render() {
        return (
<div> <Navbar />
            <div className="container2">
            
                <div className="row">

                
                    {/* <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                            <div class="d-flex">
                                <input onChange={(e) => this.search(e)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </div>
                        </div>
                    </nav> */}

                    

                    <div ref={el => (this.componentRef = el)}>
                    <tr className='gap'></tr>
                    <h3 className={"text-dark text-center"}>All Restaurants</h3>
                    <div className='gapTitle'></div>
                    <button type="button"  className="createRes"><Link className='link-o' to="/admin/restaurants/CreateRestaurant">Create Restaurant <FaPlusCircle style={{color: '#E8861E', fontSize: '20px'}}/></Link></button>
                    <button type="button" onClick={() => { this.setState({ isGen: true }); }} className="generateRes">Genrate Report <FaRegListAlt style={{color: '#E8861E', fontSize: '20px'}}/></button>
                    {
                        this.state.isGen ? <div className="row">
                            <div className="col">
                            
                                {this.getRedirectButton()}
                                <ReactToPrint
                                    
                                    documentTitle={"All Restaurants"}
                                    onAfterPrint={() => { this.setState({ isGen: false }); }}
                                    trigger={() => {
                                        return <button type="button" className="generatePdf">Generate PDF Now</button>
                                    }}
                                    content={() => this.componentRef}
                                />
                                {/* <button onClick={() => { this.setState({ isGen: false }); }} type="button" class="btn btn-danger m-2">Cancel</button> */}
                            </div>
                        </div> : <div className="row text-end">
                            <div className="col">
                                {this.getRedirectButton()}
                                {/* <button type="button" onClick={() => { this.setState({ isGen: true }); }} class="btn btn-outline-secondary">Genrate Report</button> */}
                            </div>
                        </div>
                    }
                        <div class="table">
                            <table class="table table-hover text-center ">
                                <thead className="head">
                                    
                                        <th scope="col">Restaurant Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Other</th>
                                        <th scope="col">Image</th>
                                        {
                                            !this.state.isGen ? <th scope="col">Actions</th> : <React.Fragment />
                                        }
                                    
                                </thead>
                                <tr className='gap'></tr>
                                <tbody>
                                    <React.Fragment>
                                        {
                                            this.state.filterdRestaurants.map(res => {
                                                return <RestaurantActions key={res._id} restaurant={res} isGen={this.state.isGen} updateContent={this.updateContent}  />
                                                
                                            })
                                        }
                                    </React.Fragment>
                                </tbody>
                                
                            </table>
                        </div>
                    </div>

                </div>
            </div>
            <div className='row'>
                <button type="button"  className="back-center"><Link className='link-o'to="/admin"><MdArrowBackIosNew style={{color: '#E8861E', fontSize: '20px'}}/>  Back</Link></button>
                
                </div>
                <tr className='gap'></tr>
            </div>

        );
    }
}

export default AllRestaurantsContainer;
import React, { Component } from 'react';
import Navbar from '../../../../Navbar/NavbarResAdmin';
import {Link} from "react-router-dom";
import { GiHotMeal } from "react-icons/gi"
import { FaHotel } from "react-icons/fa"
class Adminfirst extends Component {
    render() {
        return (
    <div>
        <Navbar/>
        <div className="containerAdmin">
        <button  className="adminMain" type="button"  ><Link className='link-main'to='admin/restaurants/EditRestaurant'> Add Foods  <GiHotMeal style={{color: '#000', fontSize: '30px'}}/></Link></button>
        <tr className='gap'></tr>
        <button  className="adminMain" type="button"  ><Link className='link-main' to='/admin/restaurants/CreateRestaurant'>  Add resturants  <FaHotel style={{color: '#000', fontSize: '25px'}}/></Link></button>
            </div>
        </div>
            
    
        );
}}

export default Adminfirst;
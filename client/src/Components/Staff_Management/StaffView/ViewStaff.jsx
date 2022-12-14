import React, { Component } from 'react';
import axios from "axios"
import ReactToPrint from 'react-to-print';
import './StaffView.css';
import Navbar from '../../Navbar/AdminNavbar/AdminNavbar';
import StaffAction from "./StaffAction";
import Footer from '../../Footer/Footer';


class AllContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs: [],
            FilterdStaff: [],
            isGen: false
        }
    }

    updateContent = () => {
        axios.get("http://localhost:8345/staff/viewstaff").then(res => {
            this.setState({
                staffs: res.data,
                FilterdStaff: res.data,
                
            });
        }).catch(err => {
            console.log(err);
        });
    }

    // Get all packages from datasbase
    componentDidMount() {
        this.updateContent();
    }


    //function for search button
    
    search = (e) => {
        let searchTag = e.target.value.toLowerCase();
        let   FilterdStaff= [];

       
        this.state.staffs.forEach(staff => {
           
            if (staff.staffId?.toLowerCase().includes(searchTag) || staff.firstname?.toLowerCase().includes(searchTag)) {
                  FilterdStaff.push(staff)
                
                 
            }
        })
      

        this.setState({
            FilterdStaff,
            searchTag
        });
       
        

    }

    getRedirectButton = () => {
        return <button type="button" onClick={() => { window.location='/addstaff' }} class="btn btn-outline-primary m-2">Create Staff</button>
    }


    render() {
        return (
            <div>

                <Navbar/>

<div className="myyy">

 

            <div className="container-fluid mt-5">
                  <div className='row '>
                    <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                            <div class="d-flex">
                                <input onChange={(e) => this.search(e)} class="form-control me-2 form-group" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-warning form-group" type="submit">Search</button>
                            </div>
                        </div>
                    </nav>
                    </div>
                    {
                        this.state.isGen ? <div className="row text-end">
                            <div className="col">
                                {this.getRedirectButton()}
                                <ReactToPrint

                                    documentTitle={"All Staff Members"}
                                    onAfterPrint={() => { this.setState({ isGen: false }); }}
                                    trigger={() => {
                                        return <button type="button" class="btn btn-outline-danger">Generate PDF Now</button>
                                    }}
                                    content={() => this.componentRef}
                                />
                                <button onClick={() => { this.setState({ isGen: false }); }} type="button" class="btn btn-outline-dark m-2">Cancel</button>
                            </div>
                        </div> : <div className="row text-end">
                            <div className="col">
                                {this.getRedirectButton()}
                                <button type="button" onClick={() => { this.setState({ isGen: true }); }} class="btn btn-outline-danger m-3">Genrate Report</button>
                            </div>
                        </div>
                    }

                    <div ref={el => (this.componentRef = el)}>
                        <h3 className={"text-secondary text-center mb-5"}>All Staff details</h3>
                        <div class="tablestaff">
                            <table class="table ">
                                <thead className={"table-dark3 mt-3"}>
                                    <tr>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Staff ID</th>
                                        <th scope="col">Phone No</th>
                                        <th scope="col">E-Mail</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Date OF Birth</th>
                                        <th scope="col">Work Type</th>
                                        <th scope="col">Comment</th>
                                        <th scope="col">Salary</th>
                                        {
                                            !this.state.isGen ? <th scope="col">Actions</th> : <React.Fragment />
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    <React.Fragment>
                                        {
                                            this.state.FilterdStaff.map(staff => {
                                                return <StaffAction key={staff._id} staff={staff} isGen={this.state.isGen} updateContent={this.updateContent} />
                                            })
                                        }
                                    </React.Fragment>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
           
            </div>
            <br/>
            <Footer/>
            </div>
        );
    }
}

export default  (AllContainer);
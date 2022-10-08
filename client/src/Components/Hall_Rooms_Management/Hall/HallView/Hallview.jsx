import React, { Component } from 'react';
import axios from "axios"
import ReactToPrint from 'react-to-print';
import './HallView.css'
import Navbar from '../../../Navbar/AdminNavbar/AdminNavbar';
import HallAction from './HallAction';

class AllHallContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hall: [],
            filterdHalls: [],
            isGen: false
        }
    }

    updateContent = () => {
        axios.get("http://localhost:8345/hall/get").then(res => {
            this.setState({
                hall: res.data,
                filterdHalls: res.data,
            });
        }).catch(err => {
            console.log(err);
        });
    }

    // Get all packages from datasbase
    componentDidMount() {
        this.updateContent();
    }

    // Function for search vehicles
    search = (e) => {
        let searchTag = e.target.value.toLowerCase();
        let filterdHalls= [];

        this.state.hall.forEach(hall => {
            if (hall.name?.toLowerCase().includes(searchTag) || hall.hallType?.toLowerCase().includes(searchTag)) {
                filterdHalls.push(hall)
            }
        })

        this.setState({
            filterdHalls,
            searchTag
        });

    }

    getRedirectButton = () => {
        return <button type="button" onClick={() => { window.location='/addhall' }} class="btn btn-outline-primary m-2">Create Hall</button>
    }


    render() {
        return (
<div>

    <Navbar />


<div className="myyy">
            <div className="container-fluid mt-5">
            <div className='row'>
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

                                    documentTitle={"All Hall"}
                                    onAfterPrint={() => { this.setState({ isGen: false }); }}
                                    trigger={() => {
                                        return <button type="button" class="btn btn-primary">Generate PDF Now</button>
                                    }}
                                    content={() => this.componentRef}
                                />
                                <button onClick={() => { this.setState({ isGen: false }); }} type="button" class="btn btn-danger m-2">Cancel</button>
                            </div>
                        </div> : <div className="row text-end">
                            <div className="col">
                                {this.getRedirectButton()}
                                <button type="button" onClick={() => { this.setState({ isGen: true }); }} class="btn btn-outline-secondary">Genrate Report</button>
                            </div>
                        </div>
                    }

                    <div ref={el => (this.componentRef = el)}>
                   
                        <h3 className={"text-secondary text-center mb-5"}>All Hall details</h3>
                        <div class="table1">
                            <table class="table">
                                <thead className="table-dark1">
                                    <tr>

                                    <th scope="col">Hall Name</th>
                                        <th scope="col">Hall Type</th>
                                        <th scope="col">Space</th>
                                        <th scope="col">Guests</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Features</th>
                                        <th scope="col">Events</th>
                                        {
                                            !this.state.isGen ? <th scope="col">Actions</th> : <React.Fragment />
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    <React.Fragment>
                                        {
                                            this.state.filterdHalls.map(hall => {
                                                return <HallAction key={hall._id} hall={hall} isGen={this.state.isGen} updateContent={this.updateContent} />
                                            })
                                        }
                                    </React.Fragment>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
           
            </div>
            </div>
        );
    }
}

export default  (AllHallContainer);
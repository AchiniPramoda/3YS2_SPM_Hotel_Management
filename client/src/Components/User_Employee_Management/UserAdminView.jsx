import React, { Component } from 'react';
import axios from "axios"
import ReactToPrint from 'react-to-print';
import "./UserView.css"
import Navbar from '../Navbar/AdminNavbar/AdminNavbar';
import UserActions from './UserActionView';

class AllUserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            filterdUser: [],
            isGen: false
        }
    }

    updateContent = () => {
        axios.get("http://localhost:8345/register/viewuser").then(res => {
            this.setState({
                user: res.data,
                filterdUser: res.data,
            });
        }).catch(err => {
            console.log(err);
        });
    }


    componentDidMount() {
        this.updateContent();
    }


    search = (e) => {
        let searchTag = e.target.value.toLowerCase();
        let filterdUser = [];

        this.state.user.forEach(user => {
            if (user.email.toLowerCase().includes(searchTag) ) {
                filterdUser.push(user)
            }
        })

        this.setState({
            filterdUser,
            searchTag
        });

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
                            
                                <ReactToPrint

                                    documentTitle={"All User Members"}
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
                              
                                <button type="button" onClick={() => { this.setState({ isGen: true }); }} class="btn btn-outline-danger m-3">Genrate Report</button>
                            </div>
                        </div>
                    }

                    <div ref={el => (this.componentRef = el)}>
                        <h3 className={"text-secondary text-center mb-5"}>All Staff details</h3>
                        <div class="tableUser">
                            <table class="table ">
                                <thead className={"table-dark mt-3"}>
                                    <tr>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">E-mail</th>
                                        <th scope="col">City</th>
                                 
                                        {
                                            !this.state.isGen ? <th scope="col">Actions</th> : <React.Fragment />
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    <React.Fragment>
                                        {
                                            this.state.filterdUser.map(user => {
                                                return <UserActions key={user._id} user={user} isGen={this.state.isGen} updateContent={this.updateContent} />
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

export default  (AllUserContainer);
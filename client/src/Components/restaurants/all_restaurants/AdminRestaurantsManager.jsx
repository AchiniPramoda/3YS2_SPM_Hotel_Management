import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import CreateRestaurant from "../create_restaurant/CreateRestaurant";
import UpdateRestaurant from '../update_restaurant/UpdateRestaurant';
//import AllRestaurantsContainer from './restaurant_views/admin/AllRestaurantsContainer';

const AdminRestaurantsManager = () => {
    return (<React.Fragment>
        <Router>
            <Switch>
                <Route
                    path="/admin/restaurants/EditRestaurant/:id"
                    component={(props) => (
                        <UpdateRestaurant {...props} key={window.location.pathname} />
                    )}
                />
                <Route path="/admin/restaurants/CreateRestaurant">
                    <CreateRestaurant />
                </Route>
                <Route path="/">
                    <AllRestaurantsContainer />
                </Route> 
            </Switch>
        </Router>
    </React.Fragment>);
}

export default AdminRestaurantsManager;
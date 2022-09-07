import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Addstaff from './Components/Staff_Management/AddStaff';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddRoom from './Components/Hall_Rooms_Management/Room/RoomAdd';
import UpdateRoom from './Components/Hall_Rooms_Management/Room/UpdateRoom';
import ViewRoom from './Components/Hall_Rooms_Management/Room/RoomView';
import ViewStaff from './Components/Staff_Management/ViewStaff';
import EditStaff from './Components/Staff_Management/EditStaff';
import Login from './Components/User_Employee_Management/login';
import Registration from './Components/User_Employee_Management/Registration';
import AdminDashBoard from './Components/Dashboard/AdminDashboard';
import Navbar from './Components/Navbar/Navbar';
import AllRestaurantsForUser from './Components/restaurants/all_restaurants/restaurant_views/user/AllRestaurantsForUser';
import ViewMoreRestaurant from './Components/restaurants/all_restaurants/ViewMoreRestaurant';
import CreateRestaurant from './Components/restaurants/create_restaurant/CreateRestaurant';
import AllRestaurantsContainer from './Components/restaurants/all_restaurants/restaurant_views/admin/AllRestaurantsContainer';
import UpdateRestaurant from './Components/restaurants/update_restaurant/UpdateRestaurant';
import Adminfirst from './Components/restaurants/all_restaurants/restaurant_views/admin/Adminfirst';
function App() {

    return(
        <BrowserRouter>
   

          <Routes>

                 
                 <Route path="/addstaff" element={<Addstaff />} />
                 <Route path="/addroom" element={<AddRoom />} />
                 <Route  path="/updateroom" element={<UpdateRoom />} />
                  <Route path="/viewRoom" element={<ViewRoom />} />
                 <Route path='/viewstaff' element={ <ViewStaff /> } />
                 <Route path='/editstaff/:id' element={ <EditStaff /> } />
                 <Route path='/login' element={ <Login /> } />
                 <Route path="/registration" element={<Registration />} />
                 <Route path="/admindashboard" element={<AdminDashBoard />} />
                 <Route path="/navbar" element={<Navbar />} />
                 <Route path="/admin/restaurants/CreateRestaurant" element={<CreateRestaurant />} />
                 <Route path="/admin/ALL" element={<AllRestaurantsContainer />} />
                 <Route path="/user/ALL" element={<AllRestaurantsForUser />} />
                 <Route path="/restaurants/:id" element={<ViewMoreRestaurant />} />
                 <Route path="/admin/restaurants/EditRestaurant/:id" element={<UpdateRestaurant />} />
                  <Route path="/admin" element={<Adminfirst />} /> 
                 
                
         </Routes>
                     


        </BrowserRouter>
      );
   }

export default App;

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Addstaff from './Components/Staff_Management/AddStaff';

import AddRoom from './Components/Hall_Rooms_Management/Room/RoomAdd';
import UpdateRoom from './Components/Hall_Rooms_Management/Room/UpdateRoom';
import ViewRoom from './Components/Hall_Rooms_Management/Room/RoomView';
import ViewStaff from './Components/Staff_Management/StaffView/ViewStaff';
import EditStaff from './Components/Staff_Management/EditStaff';
import Login from './Components/User_Employee_Management/login';
import Registration from './Components/User_Employee_Management/Registration';
import AdminDashBoard from './Components/Dashboard/AdminDashboard';
import Navbar from './Components/Navbar/Navbar';

import AddHall from './Components/Hall_Rooms_Management/Hall/AddHalls';

import AllRoomForUser from './Components/Hall_Rooms_Management/Room/AllRoomView';



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

                  <Route path="/addhall" element={<AddHall />} />

                 <Route exact path="/rooms" element={ <AllRoomForUser />}>
                          
           
                </Route>


         </Routes>
                     


        </BrowserRouter>
      );
   }

export default App;

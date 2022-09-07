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
import ClientDashboard from './Components/Dashboard/ClientDashboard';
import AddHall from './Components/Hall_Rooms_Management/Hall/AddHalls';
import ViewHall from './Components/Hall_Rooms_Management/Hall/HallView/Hallview';
import AllRoomForUser from './Components/Hall_Rooms_Management/Room/AllRoomView';
import EmailVerify from './Components/Emailverify/EmailVerify';
import ProfileView from './Components/User_Employee_Management/ProfileView';
import RoomViewMore from './Components/Hall_Rooms_Management/Room/MoreDetailsView';
import UpdateRooms from './Components/Hall_Rooms_Management/Room/EditRoom';
import UserAdminView from './Components/User_Employee_Management/UserAdminView';

function App() {

    return(
        <BrowserRouter>
   

          <Routes>

                 <Route path="/addstaff" element={<Addstaff />} />

                 <Route path="/addroom" element={<AddRoom />} />
                 <Route  path="/updateroom/:id" element={<UpdateRoom />} />
               
               
                  <Route path="/viewRoom" element={<ViewRoom />} />
                 <Route path='/viewstaff' element={ <ViewStaff /> } />
                 <Route path='/editstaff/:id' element={ <EditStaff /> } />
                 <Route path='/login' element={ <Login /> } />
                 <Route path="/registration" element={<Registration />} />
                 <Route path="/admindashboard" element={<AdminDashBoard />} />
                 <Route path="/navbar" element={<Navbar />} />

                   <Route path="/viewhall" element={<ViewHall />} />


                 <Route path="/rooms" element={ <AllRoomForUser />}/>
                  <Route path="/viewmore/:id" element={ <RoomViewMore />}/>
                 <Route exact path="/register/:id/verify/:token/" element={ <EmailVerify />}/>



                  <Route path="/addhall" element={<AddHall />} />
                  <Route path="/updaterooms/:id" element={<UpdateRooms />} />
                 <Route path="/dashboard" element={<ClientDashboard />} />
                          
                  <Route path="/profileview/:id" element={<ProfileView />} />        
                  <Route path="/useradminview" element={<UserAdminView />} />
           
              


         </Routes>
                     


        </BrowserRouter>
      );
   }

export default App;

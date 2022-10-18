import React ,{useContext} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Addstaff from './Components/Staff_Management/AddStaff';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddRoom from './Components/Hall_Rooms_Management/Room/RoomAdd';
import UpdateRoom from './Components/Hall_Rooms_Management/Room/UpdateRoom';
import ViewRoom from './Components/Hall_Rooms_Management/Room/RoomView';
import ViewStaff from './Components/Staff_Management/StaffView/ViewStaff';
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
import ClientDashboard from './Components/Dashboard/ClientDashboard';
import AddHall from './Components/Hall_Rooms_Management/Hall/AddHalls';
import ViewHall from './Components/Hall_Rooms_Management/Hall/HallView/Hallview';
import AllRoomForUser from './Components/Hall_Rooms_Management/Room/AllRoomView';
import EmailVerify from './Components/Emailverify/EmailVerify';
import ProfileView from './Components/User_Employee_Management/ProfileView';
import RoomViewMore from './Components/Hall_Rooms_Management/Room/MoreDetailsView';
import UpdateRooms from './Components/Hall_Rooms_Management/Room/EditRoom';
import UserAdminView from './Components/User_Employee_Management/UserAdminView';
// import Payment  from './Components/Hall_Rooms_Management/Room/payment';
import HallViewMore from './Components/Hall_Rooms_Management/Hall/HallView/MoreDetailsView';
import AllHallForUser from './Components/Hall_Rooms_Management/Hall/HallView/Allhall';

import UpdateHall from './Components/Hall_Rooms_Management/Hall/HallView/UpdateHall';

import Categories from './Components/Hotel_Food_Management/mainpagesk/categories/Categories'
import CreateFood from './Components/Hotel_Food_Management/mainpagesk/createFood/CreateFood'
import Cart from './Components/Hotel_Food_Management/mainpagesk/cart/Cart'
import Foods from './Components/Hotel_Food_Management/mainpagesk/foods/Foods'
import { DataProvider } from '../src/GlobalState'
import Foods2 from './Components/Hotel_Food_Management/mainpagesk/foods/Foods2'
import NotFound from './Components/Hotel_Food_Management/mainpagesk/utils/not_found/NotFound'
import DetailFood from './Components/Hotel_Food_Management/mainpagesk/detailFood/DetailFood';
import {GlobalState} from '../src/GlobalState'

function App() {
  const state = useContext(GlobalState)
    return(
        <BrowserRouter>
   
   <DataProvider>
          <Routes>

                 
                 <Route path="/addstaff" element={<Addstaff />} />
                 <Route path="/addroom" element={<AddRoom />} />

              
                 <Route  path="/updateroom/:id" element={<UpdateRoom />} />
                 {/* <Route  path="/updatehall/:id" element={<UpdateHall />} /> */}
               
               

                  <Route path="/viewRoom" element={<ViewRoom />} />
                 <Route path='/viewstaff' element={ <ViewStaff /> } />
                 <Route path='/editstaff/:id' element={ <EditStaff /> } />
                 <Route path='/login' element={ <Login /> } />
                 <Route path="/registration" element={<Registration />} />
                 <Route path="/admindashboard" element={<AdminDashBoard />} />
                  <Route path="/clientdashboard" element={<ClientDashboard />} />
                 <Route path="/navbar" element={<Navbar />} />
                 <Route path="/admin/restaurants/CreateRestaurant" element={<CreateRestaurant />} />
                 <Route path="/admin/ALL" element={<AllRestaurantsContainer />} />
                 <Route path="/user/ALL" element={<AllRestaurantsForUser />} />
                 <Route path="/restaurants/:id" element={<ViewMoreRestaurant />} />
                 <Route path="/admin/restaurants/EditRestaurant/:id" element={<UpdateRestaurant />} />
                  <Route path="/adminfirst" element={<Adminfirst />} /> 
                 
                  <Route path="/food"  element={<Foods/>} />
                 <Route path="/detail/:id"  element={<DetailFood/>} />
                 <Route path="/categoryF"  element={ <Categories/> } />
                <Route path="/create_food"  element={<CreateFood/> } />
                <Route path="/edit_food/:id"  element={ <CreateFood/> } />
                <Route path="/cart"  element={<Cart/>} />
               <Route path="*"  element={<NotFound/>} /> 
               <Route path="/allfood" exact element={<Foods2/>} />
               <Route path="/customer" exact element={<Foods/>} />

                   <Route path="/viewhall" element={<ViewHall />} />
                   <Route path="/viewmorehall/:id" element={ <HallViewMore />}/>


                 <Route path="/rooms" element={ <AllRoomForUser />}/>
                 <Route path="/halls" element={ <AllHallForUser />}/>
                  <Route path="/viewmore/:id" element={ <RoomViewMore />}/>
                 <Route exact path="/register/:id/verify/:token/" element={ <EmailVerify />}/>



                  <Route path="/addhall" element={<AddHall />} />
                  <Route path="/updaterooms/:id" element={<UpdateRooms />} />
                 <Route path="/dashboard" element={<ClientDashboard />} />
                          
                  <Route path="/profileview/:id" element={<ProfileView />} />        
                  <Route path="/useradminview" element={<UserAdminView />} />
                  <Route path="/updatehall/:id" element={<UpdateHall />} />
                  {/* <Route path="/" element={<Payment />} /> */}
           
              


         </Routes>
                     
</DataProvider>
        </BrowserRouter>
      );
   }

export default App;

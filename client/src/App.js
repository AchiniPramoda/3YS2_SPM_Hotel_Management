// import React from 'react';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Addstaff from './Components/Staff_Management/AddStaff';
// import ViewStaff from './Components/Staff_Management/ViewStaff';
// import EditStaff from './Components/Staff_Management/EditStaff';
// import Header from './Components/Hotel_Pakage_Management/headersk/Header'
// import Categories from './Components/Hotel_Pakage_Management/mainpagesk/categories/Categories'
// import CreatePakage from './Components/Hotel_Pakage_Management/mainpagesk/createPakage/CreatePakage'
// import Cart from './Components/Hotel_Pakage_Management/mainpagesk/cart/Cart'
// import Pakages from './Components/Hotel_Pakage_Management/mainpagesk/pakages/Pakages'
// import { DataProvider } from '../src/GlobalState'
// import Pakages2 from './Components/Hotel_Pakage_Management/mainpagesk/pakages/Pakages2'
// import NotFound from './Components/Hotel_Pakage_Management/mainpagesk/utils/not_found/NotFound'
// import DetailPakage from './Components/Hotel_Pakage_Management/mainpagesk/detailPakage/DetailPakage';

// import Footer from './Components/Hotel_Pakage_Management/headersk/Footer';
// import Users from './Components/Hotel_Pakage_Management/ReportView';
// import Pay from './pay'
// import Pakages21 from './Components/Hotel_Pakage_Management/mainpagesk/pakages/Pak';

// function App() {

//     return(
//         <BrowserRouter>
//     <DataProvider>

   
//    <DataProvider>
//           <Routes>
//               <Route path="/hek" element={<Header />} />
//               <Route path="/k" element={<Footer />} />
//               <Route path="/categoryreport" element={<Users/>} />
//               <Route path="/" exact element={<Pakages/>} />
//               <Route path="/paymentdemo" exact element={<Pay/>} />
              
//                  <Route path="/detail/:id"  element={<DetailPakage/>} />
//                  <Route path="/category"  element={ <Categories/> } />
//                 <Route path="/create_pakage"  element={<CreatePakage/> } />
//                 <Route path="/edit_pakage/:id"  element={ <CreatePakage/> } />
//                 <Route path="/cart"  element={<Cart/>} />
//                <Route path="*"  element={<NotFound/>} /> 
//                <Route path="/adminpro" exact element={<Pakages2/>} />

//                {/* <Route path="/packagereport" exact element={<Pakages21/>} /> */}
                
//                  <Route path="/addstaff" element={<Addstaff />} />
//                  <Route path="/addroom" element={<AddRoom />} />

              
//                  <Route  path="/updateroom/:id" element={<UpdateRoom />} />
//                  {/* <Route  path="/updatehall/:id" element={<UpdateHall />} /> */}
               
               

//                   <Route path="/viewRoom" element={<ViewRoom />} />
//                  <Route path='/viewstaff' element={ <ViewStaff /> } />
//                  <Route path='/editstaff/:id' element={ <EditStaff /> } />
//                  <Route path='/login' element={ <Login /> } />
//                  <Route path="/registration" element={<Registration />} />
//                  <Route path="/admindashboard" element={<AdminDashBoard />} />
//                   <Route path="/clientdashboard" element={<ClientDashboard />} />
//                  <Route path="/navbar" element={<Navbar />} />
//                  <Route path="/admin/restaurants/CreateRestaurant" element={<CreateRestaurant />} />
//                  <Route path="/admin/ALL" element={<AllRestaurantsContainer />} />
//                  <Route path="/user/ALL" element={<AllRestaurantsForUser />} />
//                  <Route path="/restaurants/:id" element={<ViewMoreRestaurant />} />
//                  <Route path="/admin/restaurants/EditRestaurant/:id" element={<UpdateRestaurant />} />
//                   <Route path="/adminfirst" element={<Adminfirst />} /> 
                 
//                   <Route path="/food"  element={<Foods/>} />
//                  <Route path="/detail/:id"  element={<DetailFood/>} />
//                  <Route path="/categoryF"  element={ <Categories/> } />
//                 <Route path="/create_food"  element={<CreateFood/> } />
//                 <Route path="/edit_food/:id"  element={ <CreateFood/> } />
//                 <Route path="/cart"  element={<Cart/>} />
//                <Route path="*"  element={<NotFound/>} /> 
//                <Route path="/allfood" exact element={<Foods2/>} />
//                <Route path="/customer" exact element={<Foods/>} />

//                    <Route path="/viewhall" element={<ViewHall />} />
//                    <Route path="/viewmorehall/:id" element={ <HallViewMore />}/>


//                  <Route path="/rooms" element={ <AllRoomForUser />}/>
//                  <Route path="/halls" element={ <AllHallForUser />}/>
//                   <Route path="/viewmore/:id" element={ <RoomViewMore />}/>
//                  <Route exact path="/register/:id/verify/:token/" element={ <EmailVerify />}/>



//                   <Route path="/addhall" element={<AddHall />} />
//                   <Route path="/updaterooms/:id" element={<UpdateRooms />} />
//                  <Route path="/dashboard" element={<ClientDashboard />} />
                          
//                   <Route path="/profileview/:id" element={<ProfileView />} />        
//                   <Route path="/useradminview" element={<UserAdminView />} />
//                   <Route path="/updatehall/:id" element={<UpdateHall />} />
//                   {/* <Route path="/" element={<Payment />} /> */}
           
              


//          </Routes>
                     

//          </DataProvider>
// </DataProvider>
//         </BrowserRouter>
//       );
//    }

// export default App;
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Addstaff from './Components/Staff_Management/AddStaff';
import ViewStaff from './Components/Staff_Management/StaffView/ViewStaff';
import EditStaff from './Components/Staff_Management/EditStaff';
//import Header from './Components/Hotel_Pakage_Management/headersk/Header'
import Categories from './Components/Hotel_Pakage_Management/mainpagesk/categories/Categories'
import CreatePakage from './Components/Hotel_Pakage_Management/mainpagesk/createPakage/CreatePakage'
import Cart from './Components/Hotel_Pakage_Management/mainpagesk/cart/Cart'
//import Pakages from './Components/Hotel_Pakage_Management/mainpagesk/pakages/Pakages'
import { DataProvider } from '../src/GlobalState'
import Pakages2 from './Components/Hotel_Pakage_Management/mainpagesk/pakages/Pakages2'
import NotFound from './Components/Hotel_Pakage_Management/mainpagesk/utils/not_found/NotFound'
import DetailPakage from './Components/Hotel_Pakage_Management/mainpagesk/detailPakage/DetailPakage';
import AddRoom from './Components/Hall_Rooms_Management/Room/RoomAdd';
import UpdateRoom from './Components/Hall_Rooms_Management/Room/EditRoom';
import ViewRoom from './Components/Hall_Rooms_Management/Room/RoomView';
import Login from './Components/User_Employee_Management/login';
import Registration from './Components/User_Employee_Management/Registration';
import AdminDashBoard from './Components/Dashboard/AdminDashboard';
import ClientDashboard from './Components/Dashboard/ClientDashboard';
import Navbar from './Components/Navbar/Navbar';
import CreateRestaurant from './Components/restaurants/create_restaurant/CreateRestaurant';
import AllRestaurantsForUser from './Components/restaurants/all_restaurants/restaurant_views/user/AllRestaurantsForUser';
import AllRestaurantsContainer from './Components/restaurants/all_restaurants/restaurant_views/admin/AllRestaurantsContainer';
import ViewMoreRestaurant from './Components/restaurants/all_restaurants/ViewMoreRestaurant';
import UpdateRestaurant from './Components/restaurants/update_restaurant/UpdateRestaurant';
import Adminfirst from './Components/restaurants/all_restaurants/restaurant_views/admin/Adminfirst';
import Foods from './Components/Hotel_Food_Management/mainpagesk/foods/Foods';
import DetailFood from './Components/Hotel_Food_Management/mainpagesk/detailFood/DetailFood';
import CreateFood from './Components/Hotel_Food_Management/mainpagesk/createFood/CreateFood';
import Foods2 from './Components/Hotel_Food_Management/mainpagesk/foods/Foods2';
import ViewHall from './Components/Hall_Rooms_Management/Hall/HallView/Hallview';
import HallViewMore from './Components/Hall_Rooms_Management/Hall/HallView/MoreDetailsView';
import AllHallForUser from './Components/Hall_Rooms_Management/Hall/HallView/Allhall';
import AllRoomForUser from './Components/Hall_Rooms_Management/Room/AllRoomView';
import RoomViewMore from './Components/Hall_Rooms_Management/Room/MoreDetailsView';
import AddHall from './Components/Hall_Rooms_Management/Hall/AddHalls';
import UpdateRooms from './Components/Hall_Rooms_Management/Room/EditRoom';
import ProfileView from './Components/User_Employee_Management/ProfileView';
import UserAdminView from './Components/User_Employee_Management/UserAdminView';
import EmailVerify from './Components/Emailverify/EmailVerify';
import UpdateHall from './Components/Hall_Rooms_Management/Hall/HallView/UpdateHall';
//import Footer from './Components/Hotel_Pakage_Management/headersk/Footer';
import Users from './Components/Hotel_Pakage_Management/ReportView';
import Pay from './pay'
import Pakages21 from './Components/Hotel_Pakage_Management/mainpagesk/pakages/Pak';
import Pakages from '../src/Components/Hotel_Pakage_Management/mainpagesk/pakages/Pakages'
function App() {

    return(
        <BrowserRouter>
    <DataProvider>

   
   <DataProvider>
          <Routes>
          
              <Route path="/categoryreport" element={<Users/>} />

              {/* namak damma */}
              <Route path="/AllPacakages" exact element={<Pakages/>} />
              <Route path="/paymentdemo" exact element={<Pay/>} />
              
                 <Route path="/detail/:id"  element={<DetailPakage/>} />
                 <Route path="/category"  element={ <Categories/> } />
                <Route path="/create_pakage"  element={<CreatePakage/> } />
                <Route path="/edit_pakage/:id"  element={ <CreatePakage/> } />
                <Route path="/cart"  element={<Cart/>} />
               <Route path="*"  element={<NotFound/>} /> 
               <Route path="/adminpro" exact element={<Pakages2/>} />

               <Route path="/packagereport" exact element={<Pakages21/>} />
                
                 <Route path="/addstaff" element={<Addstaff />} />
                 <Route path="/addroom" element={<AddRoom />} />

              
                 <Route  path="/updateroom/:id" element={<UpdateRoom />} />
                 {/* <Route  path="/updatehall/:id" element={<UpdateHall />} /> */}
               
                 <Route path="/allpackages" element={<Pakages/>} />
                  <Route path="/viewRoom" element={<ViewRoom />} />
                 <Route path='/viewstaff' element={ <ViewStaff /> } />
                 <Route path='/editstaff/:id' element={ <EditStaff /> } />
                 <Route path='/' element={ <Login /> } />
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
</DataProvider>
        </BrowserRouter>
      );
   }

export default App;

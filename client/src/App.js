import React,{useContext} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Addstaff from './Components/Staff_Management/AddStaff';
import ViewStaff from './Components/Staff_Management/ViewStaff';
import EditStaff from './Components/Staff_Management/EditStaff';
import Header from './Components/Hotel_Pakage_Management/headersk/Header'
import Categories from './Components/Hotel_Pakage_Management/mainpagesk/categories/Categories'
import CreatePakage from './Components/Hotel_Pakage_Management/mainpagesk/createPakage/CreatePakage'
import Cart from './Components/Hotel_Pakage_Management/mainpagesk/cart/Cart'
import Pakages from './Components/Hotel_Pakage_Management/mainpagesk/pakages/Pakages'
import { DataProvider } from '../src/GlobalState'
import Pakages2 from './Components/Hotel_Pakage_Management/mainpagesk/pakages/Pakages2'
import NotFound from './Components/Hotel_Pakage_Management/mainpagesk/utils/not_found/NotFound'
import DetailPakage from './Components/Hotel_Pakage_Management/mainpagesk/detailPakage/DetailPakage';
import {GlobalState} from '../src/GlobalState'
import PakageItem2 from './Components/Hotel_Pakage_Management/mainpagesk/utils/pakageItem/P';
import Footer from './Components/Hotel_Pakage_Management/headersk/Footer';
import Users from './Components/Hotel_Pakage_Management/ReportView';
import Pay from './pay'
import Pakages21 from './Components/Hotel_Pakage_Management/mainpagesk/pakages/Pak';

function App() {
  const state = useContext(GlobalState)
    return(
        <BrowserRouter>
    <DataProvider>

          <Routes>
              <Route path="/hek" element={<Header />} />
              <Route path="/k" element={<Footer />} />
              <Route path="/km" element={<Users/>} />
              <Route path="/" exact element={<Pakages/>} />
              <Route path="/kj" exact element={<Pay/>} />
              
                 <Route path="/detail/:id"  element={<DetailPakage/>} />
                 <Route path="/category"  element={ <Categories/> } />
                <Route path="/create_pakage"  element={<CreatePakage/> } />
                <Route path="/edit_pakage/:id"  element={ <CreatePakage/> } />
                <Route path="/cart"  element={<Cart/>} />
               <Route path="*"  element={<NotFound/>} /> 
               <Route path="/adminpro" exact element={<Pakages2/>} />

               <Route path="/a" exact element={<Pakages21/>} />
                
                 <Route path="/addstaff" element={<Addstaff />} />
                 <Route path='/viewstaff' element={ <ViewStaff /> } />
                 <Route path='/editstaff/:id' element={ <EditStaff /> } />

         </Routes>
                     

         </DataProvider>
        </BrowserRouter>
      );
   }

export default App;

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Addstaff from './Components/Staff_Management/AddStaff';
import ViewStaff from './Components/Staff_Management/ViewStaff';
import EditStaff from './Components/Staff_Management/EditStaff';


function App() {

    return(
        <BrowserRouter>
   

          <Routes>

                 <Route path="/addstaff" element={<Addstaff />} />
                 <Route path='/viewstaff' element={ <ViewStaff /> } />
                 <Route path='/editstaff/:id' element={ <EditStaff /> } />

         </Routes>
                     


        </BrowserRouter>
      );
   }

export default App;

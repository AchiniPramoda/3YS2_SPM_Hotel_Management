import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Addstaff from './Components/Staff_Management/AddStaff';


function App() {

    return(
        <BrowserRouter>
   

          <Routes>

                 <Route path="/addstaff" element={<Addstaff />} />

         </Routes>
                     


        </BrowserRouter>
      );
   }

export default App;

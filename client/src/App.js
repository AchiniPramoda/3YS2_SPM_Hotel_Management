import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Addstaff from './Components/Staff_Management/AddStaff';
import AddRoom from './Components/Hall_Rooms_Management/Room/RoomAdd';
import UpdateRoom from './Components/Hall_Rooms_Management/Room/UpdateRoom';
function App() {

    return(
        <BrowserRouter>
   

          <Routes>

                 <Route path="/addstaff" element={<Addstaff />} />
                 <Route path="/addroom" element={<AddRoom />} />
                 <Route  path="/updateroom/:id" 
                  component={(props) => (
                        <UpdateRoom {...props} key={window.location.pathname} />
                    )}
                  />

         </Routes>
                     


        </BrowserRouter>
      );
   }

export default App;

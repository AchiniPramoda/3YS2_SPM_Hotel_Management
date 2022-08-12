import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default class App extends React.Component {

 constructor(props) {
    super(props);
 }

 render() {
    return(
        <BrowserRouter>
    <h1>Hello to React APP</h1> 

         <Routes>

         
         </Routes>
                     


        </BrowserRouter>
      );
   }
}


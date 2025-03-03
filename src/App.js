
import { json, Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home';
import Movice from './Component/Movice';
import People from './Component/people';
import Tvshow from './Component/Tvshow';
import NOfound from './Component/NOfound';
import './App.css';
import Movied from './Component/Movied';
import Tvd from './Component/Tvd';

export default function App(){


  return (<>
  
  <Navbar  />

  <div className='container'>
       <Routes>
       <Route path='' element={<Home /> } ></Route>
        <Route path='Home' element={<Home />} ></Route>
        <Route path='Movied' element={<Movied /> }>
        <Route path=':id' element={<Movied /> }/>
        </Route>
        <Route path='Tvd' element={<Tvd /> } >
        <Route path=':id' element={<Tvd /> }  />
        </Route>
        <Route path='Movice' element={<Movice /> } ></Route>
        <Route path='People' element={<People />  } ></Route>
        <Route path='Tvshow' element={<Tvshow />  } ></Route>
        <Route path='*' element={ <NOfound />} ></Route>
       </Routes>
  </div>

  <Footer />    
     
  </>
 
  );
} 




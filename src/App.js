import React, {useState} from 'react';
import './App.css';
import LandingPage from './components/landingpage.jsx';
import Navbar from './components/navbar.jsx';
import AddBoat from './components/AddBoat.jsx';
import DeleteBoat from './components/DeleteBoat';


function App() {

  const [page, setPage] = useState('landingpage');


  /*pageCurrent does the navigation*/
  function pageCurrent(page) {

    if(page === 'landingpage'){

      setPage('landingpage')


    }
    else if (page === 'addPage') {

      setPage('addPage')


    }


  }
  return (
    <div className="App">

    <Navbar pageCurrent = {e => pageCurrent(e)}/>
        {
          page === 'landingpage' ?

        <LandingPage/>

      :
        <AddBoat/>
        <DeleteBoat/>
      }

    </div>
  );
}

export default App;

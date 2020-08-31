import React, {useState} from 'react';
import './App.css';
import LandingPage from './components/landingpage.jsx';
import Navbar from './components/navbar.jsx';
import Edit from './components/Edit.jsx';



function App() {

  const [page, setPage] = useState('landingpage');


  /*pageCurrent does the navigation*/
  function pageCurrent(page) {

    if(page === 'landingpage'){

      setPage('landingpage')


    }
    else if (page === 'editPage') {

      setPage('editPage')


    }


  }
  return (
    <div className="App">

    <Navbar pageCurrent = {e => pageCurrent(e)}/>
        {
          page === 'landingpage' ?

        <LandingPage/>

      :
        <Edit/>
        }

    </div>
  );
}

export default App;

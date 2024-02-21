import { AppContext } from './context/AppContext';
import { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { CoinsPage } from './pages/CoinsPage';
import { Profile } from './pages/Profile';

function App() {

  const { fetchCoinData, fetchNewData, currency } = useContext(AppContext);

  useEffect(() => {
    fetchCoinData();
    fetchNewData();
  }, [currency])



  return (

    <div className='w-full min-h-[100vh]'>
      
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/:id?' element={<CoinsPage />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>


    </div>

  );
}

export default App;

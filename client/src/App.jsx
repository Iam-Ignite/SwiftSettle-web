import { Routes, Route } from 'react-router-dom';

import './App.css';

import { Navigation } from './components';

import { Home, AboutUs, Faq, CreateAccount } from './pages';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} />
      <Route index element={<Home />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/signup' element={<CreateAccount />} />
      <Route path='*' element={"NOT FOUND"} />
    </Routes>
  )
}

export default App
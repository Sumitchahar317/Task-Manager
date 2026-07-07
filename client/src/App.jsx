import './App.css'
import Navbar from './assets/Navbar';
import NewtaskForm from './assets/NewtaskForm';
import EditPage from '../pages/EditPage';
import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      
      <BrowserRouter>   
        <div className="pages">
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Addtask' element={<NewtaskForm />} />
            <Route path='/task/:id' element={<EditPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  )
}

export default App

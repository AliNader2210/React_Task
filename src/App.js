import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tasks from './pages/tasks/Tasks';
import EditTask from './pages/editTask/EditTask';

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<Tasks/>}/>
          <Route path='/edit/:id' element={<EditTask/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

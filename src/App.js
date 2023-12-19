
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AllCourse from './AllCourse';
import FullStack from './FullStack';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={AllCourse}/>
        <Route path='/Fullstack' Component={FullStack}/>
        <Route path='/Datascience' Component={DataScience}/>
        <Route path='/Cybersecurity' Component={CyberSecurity}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

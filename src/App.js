import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';

function App() {
  return (
  <>
    <Topbar />
    <Header />
    <Home/>
    {/* <Navbar/> */}
  </>
  );
}

export default App;

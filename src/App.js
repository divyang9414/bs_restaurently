
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';

function App() {
  return (
  <>
    <Header />
    <Topbar />
    <Home/>
  </>
  );
}

export default App;

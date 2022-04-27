
import Header from '../components/header';
import MainPageContent from '../components/MainPageContent';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import JoinRoom from '../components/JoinRoom';
import CraeteRoom from '../components/CraeteRoom';
import PageFilms from '../components/PageWithFilms';

function App() {
  return (
    <div className="App">

      <Header/>
      <Routes>
        <Route  path="/" element={<MainPageContent/>}/>
        <Route  path="/create" element={<CraeteRoom/>}/>
        <Route  path="/join" element={<JoinRoom/>}/>
        <Route  path="/films" element={<PageFilms/>}/>
      </Routes>

    </div>
  );
}

export default App;



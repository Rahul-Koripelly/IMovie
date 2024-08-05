import { Allroutes } from './Routes/Allroutes';
import { Header } from './Components/Header';
import {Footer} from './Components/Footer'
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <Allroutes />
      <Footer/>
    </div>
  );
}

export default App;

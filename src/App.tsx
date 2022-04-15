import Header from './header';
import Navbar from './Navbar';
import SugBar from './SugBar';

import './style/App.scss'

function App() {
  
  return (
    <div className="App">
      <div className="top">
        <div className="head">
          <Header/>
          <SugBar/>
        </div>
        <Navbar/>
      </div>
    </div>
  )
}

export default App

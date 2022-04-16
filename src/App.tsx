import Header from './header';
import Navbar from './Navbar';
import SugBar from './SugBar';
import Video from './Video';

import './style/App.scss'

function App() {

  return (
    <div className="App">
      <div className="head">
        <Header />
        <SugBar />
        <Video/>
      </div>
      <Navbar />
      
    </div>
  )
}

export default App

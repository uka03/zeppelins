
import './App.css';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Catalog from './components/Catalog.jsx';
import BlogCards from './components/BlogCards';
import {Data} from './util/data.js'


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Catalog/>
        <BlogCards data={Data}/>

    </div>
  );
  
}

export default App;

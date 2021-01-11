import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from "./components/Home"
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Home/>
      <About />
      <Skills />
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;

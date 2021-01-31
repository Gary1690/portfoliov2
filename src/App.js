import './App.scss';

import Header from './components/layout/header'
import Home from './components/home/home'
import About from './components/about/about'
import Resume from './components/resume/resume'


function App() {
  return (
    <>
    <Header/>
    <Home/>
    <About/>
    <Resume/>

    <footer className="footer">
      <p>
        Author: Hege Refsnes <a href="mailto:hege@example.com">hege@example.com</a>
      </p>
    </footer>
    </>

    
  );
}

export default App;

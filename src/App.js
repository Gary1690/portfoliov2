import './App.scss';
import Home from './components/home/home';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Projects from './components/projects/projects';
import Layout from './components/layout/layout';


function App() {
  return (
    <Layout>
      <Home/>
      <About/>
      <Resume/>
      <Projects/>
    </Layout>
  );
}

export default App;

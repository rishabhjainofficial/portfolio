import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import GreetingSection from './components/GreetingSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Header />
      <GreetingSection />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;

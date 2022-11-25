
import './App.css';
import Experience from './Components/Experience';
import Hobbies from './Components/Hobbies';
import Myself from './Components/Myself';
import Skills from './Components/Skills';

function App() {
  return (
    <div className='App'>
        <Myself /> 
        <Experience/>
        <Skills/>
        <Hobbies/>
    </div>
  );
}

export default App;

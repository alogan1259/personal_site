import './App.css';
import Navbar from './components/Navbar/index.tsx';
import Body from './components/Body/index.tsx';

function App() {
  return (
    <div className="App">
      <div className='topbar'></div>
        <header><Navbar /></header>
        <main>
          <Body/>
        </main>
    </div>
  );
}

export default App;

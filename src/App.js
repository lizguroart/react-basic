import logo from './logo.svg';
import './App.css';
import SaludarNombre from './components/SaludarNombre';

function App() {
  const nombre = 'Diana';
  return (
    <SaludarNombre nombre={nombre} />
  );
}

export default App;

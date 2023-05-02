import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Vista from './components/Vista/Vista';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer saludo='RUCCI ELECTRONICA'/>
    <Vista/>
    <ItemCount/>
    </>
  );
}

export default App;

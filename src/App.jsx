import logo from './assets/img/logo.png';
import Categories from './pages/Categories';

function App() {
  return (
    <div className="App">
      <h1>squadstore sua loja de A a Z </h1>
      <img src={logo}/>
      <Categories/>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Kartya from "./component/Kartya";
import { lista } from "./model/adatok";

function App() {
  function kattintas(id){
    console.log("szülőkomponensben",id)
  }
  return (
    <>
      <header className="App-header">
        <h1>Első React projectem</h1>
      </header>
      <div className="card col-sm-2">
        <article className="row">
          {lista.map((elem, index) => {
            return <Kartya obj={elem} key={index} kattintas={kattintas} />;
          })}

          <p>Ez itt a tartalom helye</p>
        </article>
      </div>
    </>
  );
}

export default App;

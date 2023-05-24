import Navigation from "./Navigation";
import Contacting from "./Contacting";
import photo from "./imageR.jpeg";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navigation />
      <br></br>
      <img src={photo} alt="RImage" />
      <br></br>
      <br></br>
      <h2>Contact US</h2>
      <br></br>
      <Contacting />
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;

import "./App.css";
import Animation from "./component/Animation";
import Word from "./component/Word";
import Image from "./component/icon.png";
import Header from "./Header";
function App() {
  return (
    <div className="App">
      {/* <div className="header">
        <img src={Image} alt="cactus icon" />
        <Word className="word"></Word>
      </div> */}
      <Header className="header"></Header>
      <Animation className="animation"></Animation>
    </div>
  );
}

export default App;

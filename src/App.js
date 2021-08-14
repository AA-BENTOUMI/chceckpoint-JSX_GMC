import "./App.css";
import "./styles.css";
import imageInSrc from "./imageInSrc.jpg";
function App() {
  return (
    /*** JSX code***/
    <div className="App">
      {/* styling JSX */}
      <div style={{ border: "1px solid black", width: "100vw" }}>
        {/*styling with external file  */}
        <h1 className="titel red">Amen Allah Ben Toumi</h1>
        <br />
        {/* importing images from SRC */}
        <img src={imageInSrc} alt="fromsrc" />
        <br />
        {/* importing images from Public */}
        <img src="/imageInPublic.jpg" alt="frompublic" />
      </div>
      {/* importing video from Public */}
      <video style={{ width: "320", height: "240" }} controls>
        <source src="/myVideo.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default App;

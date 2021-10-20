import './App.css';
import imageInSrc from "./imageInSrc.jpg";
function App() {
  return (
    <div className="App">
     <div>
  <div style={{"border":"dashed 5px purple"}}>
    <h1 className="title red">My First React App</h1>
    <br />
    <video  autoPlay="true" loop='true' >
    <source  src="../myVideo.mp4" type="video/mp4" />
  </video>
    <div className='img'>
    <img style={{"height":"350","width":"550px"}} src={imageInSrc} />
    <br />
    <img src="/imageInPublic.jfif" />
    </div>
  
  
  </div>
</div>
    </div>
  );
}

export default App;

import BG from './bilder/andrew-neel-cckf4TsHAuw-unsplash.jpg';
import './App.css';

function App() {
  return (
    <div className="con">
      <img src={BG} alt="background image"/>
      <div className="window blur">
      <p className="vpil">VPIL</p>
      <h1 className="rubrik">Hej!</h1>
      <p className="desc">Desc: </p>
      <p className="time">Time: </p>
      <p className="inv">Invites: </p>
      </div>
    </div>
  );
}

export default App;
import BG from '../bilder/andrew-neel-cckf4TsHAuw-unsplash.jpg';
import ARROW from '../bilder/Vector.svg';
import '../App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="con">
      <img src={BG} alt="background image"/>
        <div className="window blur notlogin">
          <Link to='/Login' className="vpil"><img src={ARROW} alt="Go back"/></Link>
          <h1 className="rubrik">Rubrik!</h1>
          <p className="desc">Desc: </p>
          <p className="time">Time: </p>
          <p className="inv">Invites: </p>
        </div>
    </div>
  );
}

export default App;
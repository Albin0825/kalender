import { useNavigate } from "react-router-dom";
import ARROW from '../bilder/Vector.svg';

function Backbutton() {

    let navigate = useNavigate();
    return(
        <button onClick={() => navigate(-1)} id="backarrow">
            <img src = {ARROW} alt="back arrow"></img>
        </button> 
    );


}
export default Backbutton;

import Styles from './Button1.module.css';
import {useNavigate} from "react-router-dom";

const Button1 = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('./Login');
    }
    return (
        <center>
            <button type="button" className={Styles.But} onClick={handleClick}>
                ➔
            </button>
        </center>
    );
}

export default Button1;
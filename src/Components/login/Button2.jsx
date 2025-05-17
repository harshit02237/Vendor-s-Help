import Styles from './Button.module.css';
import { useNavigate } from "react-router-dom";

const Button = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <button className={Styles.align2} onClick={() => navigate('/signup')}>
                    Sign Up
                </button>
            </div>
        </>
    );
};

export default Button;

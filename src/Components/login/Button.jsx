import Styles from './Button.module.css';
import { useNavigate } from "react-router-dom";

const Button = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className={Styles.margin}>
                <button className={Styles.align} onClick={() => navigate('/login')}>
                    Login
                </button>
            </div>
            <h6 className={Styles.or}>or</h6>
            <div>
                <button className={Styles.align2} onClick={() => navigate('/signup')}>
                    Sign Up
                </button>
            </div>
        </>
    );
};

export default Button;

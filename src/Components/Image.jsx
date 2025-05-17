import Styles from './Image.module.css';
import logo from '../assets/logo.png';

const Image = () => {
    return (
        <center className={Styles.imageWrapper}>
            <img src={logo} alt="vendorAssist Logo" className={Styles.image}/>
        </center>
    );
}

export default Image;
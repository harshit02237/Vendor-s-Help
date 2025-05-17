import Styles from './PeopleImage.module.css';
import people from '../Image/people.png';

const PeopleImage = () => {
    return (
        <div className={Styles.logoWrapper}>
            <img src={people} alt="people logo" className={Styles.logo}/>
        </div>
    );
}

export default PeopleImage;
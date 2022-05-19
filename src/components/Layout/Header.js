import React,{Fragment} from 'react';
import classes from './Header.module.css';
import mealsimg from '../../assests/meals.jpg';
const Header = props =>{
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']} >
            <img src={mealsimg} alt='Table full of delicious food!'/>
        </div>
    </Fragment>
    );
};

export default Header;
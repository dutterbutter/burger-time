import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Layout/Logo/Logo';


const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <Logo />
            <div>LOGO</div>
            <nav>
                {/* <ul></ul>     */}
            </nav>
        </header>


    )
}

export default toolbar;
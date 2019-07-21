import React from 'react';
import cls from './layout.module.css';
import Auxiliary from '../../hoc/Auxiliary';



const layout = (props) => {
    return (
        <Auxiliary>
            <div>
                Toolbar, SideDrawer, Backdrop
            </div>

            <main className={cls.Content}>
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default layout;

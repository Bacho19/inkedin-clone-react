import React from 'react';
import s from './style/AuthTop.module.css'

const AuthTop = () => {
    return (
        <div>
            <div className={s.logo__wrapper}>
                <div className={s.logo}>
                    <span className={s.logo__text}>Linked</span>
                    <img className={s.logo__image}
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                         alt="logo"/>
                </div>
            </div>
            <div className={s.text}>
                <p>Achieve professional success</p>
            </div>
        </div>
    );
};

export default AuthTop;
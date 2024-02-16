import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <div >
            <div className={s.content}>
                <img
                    src="https://mykaleidoscope.ru/uploads/posts/2022-06/1656067874_66-mykaleidoscope-ru-p-tsveti-na-polu-krasivo-foto-77.jpg"
                    alt=""
                />
            </div>
            <div> ava + discription</div>
            <MyPosts/>
        </div>

    );
};


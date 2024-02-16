import React from 'react';
import s from "./Post.module.css";
import {message} from "antd";

type PostType = {
    message: string
    likesCounte:number
}
export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src='https://avatarko.ru/img/kartinka/3/luna_delfin_2246.jpg'/>
            {props.message}
            <div>
                <span>like {props.likesCounte}</span>
            </div>
        </div>
    );
};


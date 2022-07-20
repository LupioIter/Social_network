import React from 'react';
import classes from './Post.module.css';
type PostType={
    message: string;
}

const Post = (props:PostType) => {
    return <div className={classes.item}>
        <div>
            <img src="https://cn.i.cdn.ti-platform.com/content/20/the-amazing-world-of-gumball/showpage/za/gumball-carousel.a94b8e60.png" alt="avaPost"/>
            {props.message}
        </div>
        <div>
            <span>Like</span>
        </div>
    </div>

}

export default Post;
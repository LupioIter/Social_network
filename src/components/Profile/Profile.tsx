import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <div>
                <img className={classes.image}
                     src="https://www.greeningaustralia.org.au/wp-content/uploads/2021/01/Snow-gums_Credit-Rob-Jung_BANNER-1-e1645161446840.jpg"
                     alt="image"/>
            </div>
            <div>
                <img className={classes.avatar} src="https://i.pinimg.com/564x/ce/cc/c1/ceccc1fc6aebb4cd03a99dbdf027cce9.jpg"
                     alt="avatar"/>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;
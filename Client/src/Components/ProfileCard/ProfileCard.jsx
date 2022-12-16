// eslint-disable-next-line no-unused-vars
import React from "react";
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';
import './ProfileCard.css'

const ProfileCard = () => {
  return (
      <div className="ProfileCard">
        <div className="ProfileImages">
          <img src={Cover} alt="" />
          <img src={Profile} alt="" />
        </div>
        <div className="ProfileName">
            <span>Frank Ribery</span>
            <span>Senior UI/UX Designer</span>
        </div>
        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>3,264</span>
                    <span>Followings</span>
                </div>

                <div className="vl"></div>

                <div className="follow">
                    <span>1896</span>
                    <span>Followers</span>
                </div>
            </div>
            <hr />
        </div>
        <span>
            My Profile
        </span>
    </div>
  );
};

export default ProfileCard;
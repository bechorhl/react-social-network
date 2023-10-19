import React from 'react';
import headerImg from './../../assets/images/header-img.png';

const Profile = () => {
  return (
    <main className="content">
      <div>
        <img className="mainImage" src={headerImg} />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div>
          <ul>
            <li>Post1</li>
            <li>Post2</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Profile;

import React from 'react';
import styles from './ProfileInfo.module.css';

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <li className={styles.contactItem}>
      <a
        className={styles.contactLink}
        target="_blank"
        href={`https://${contactValue}`}
      >
        {contactTitle}
      </a>
    </li>
  );
};

const ProfileContactsBlock = ({ profile }) => {
  return (
    <ul>
      {Object.keys(profile.contacts)
        .filter((key) => profile.contacts[key])
        .map((key) => (
          <Contact
            key={key}
            contactTitle={key}
            contactValue={profile.contacts[key]}
          />
        ))}
    </ul>
  );
};

export default ProfileContactsBlock;

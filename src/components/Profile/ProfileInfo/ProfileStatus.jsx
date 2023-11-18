import React from 'react';
import styles from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode() {
    this.setState({
      editMode: true,
    });
  }

  deactivateEditMode() {
    this.setState({
      editMode: false,
    });
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <span
            onDoubleClick={this.activateEditMode.bind(this)}
            className={styles.status}
          >
            {this.props.status}
          </span>
        )}
        {this.state.editMode && (
          <input
            autoFocus="true"
            onBlur={this.deactivateEditMode.bind(this)}
            value={this.props.status}
          />
        )}
      </div>
    );
  }
}

export default ProfileStatus;

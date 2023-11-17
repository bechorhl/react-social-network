// ProfileContainer.jsx
import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };
  return ComponentWithRouterProp;
};

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  withAuthNavigate
)(ProfileContainer);

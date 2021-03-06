import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Avatar from '@material-ui/core/Avatar';
import firebase from 'firebase/app';
import 'firebase/auth';

class UserItem extends Component {
    googleSignOut = () => {
        firebase.auth().signOut().then(() => window.location.href = '/');
    }

    render() {
        const { classes, user } = this.props;
        const defaultUserName = 'Unknown';
        const defaultUserIcon = 'https://avatars1.githubusercontent.com/u/18323160?s=460&v=4';

        return (
            <div>
                <Button color="inherit" className={classes.button}>
                    <Avatar alt='profile image' src={`${user.photoURL || defaultUserIcon}`} className={classes.avatar} />
                    {user.displayName || defaultUserName}
                </Button>
                <Button color="inherit" className={classes.button} onClick={this.googleSignOut}>SignOut</Button>
                <Button variant="contained" color="default">
                    <Link to="/upload" className={classes.link}>Upload</Link>
                    <CloudUploadIcon className={classes.rightIcon} />
                </Button>
            </div>
        );
    }
}

UserItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default UserItem;
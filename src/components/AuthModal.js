import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import 'firebase/auth';

class AuthModal extends Component {
    state = {
        open: false,
    }

    handleClose = () => {
        this.props.onClose();
    }

    render() {
        const { classes, onClose, title, ...other} = this.props;

        return (
            <Dialog onClose={this.handleClose}
            aria-labelledby="login-dialog-title"
            {...other}
            >
                <DialogTitle id="login-dialog-title">{title}</DialogTitle>
                <DialogContent>
                </DialogContent>
            </Dialog>
        )
    }
}

AuthModal.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func
};

export default AuthModal;
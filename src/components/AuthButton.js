import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthModal from './AuthModal';
import Button from '@material-ui/core/Button';

class AuthButton extends Component {
    constructor(props) {
        super(props);

        this.state = { visibleModal: false, title: ''}
    }

    openModal = modalTitle => {
        this.setState({ visibleModal: true, title: modalTitle });
    }

    closeModal = () => {
        this.setState({ visibleModal: false, modalTitle: ''});
    }

    render() {
        return (
            <div>
                <Button color="inherit" onClick={() => this.openModal('SignUp')}>SignUp</Button>
                <Button color="inherit" onClick={() => this.openModal("Login")}>Login</Button>
                <AuthModal
                    open={this.state.visibleModal}
                    onClose={this.closeModal}
                    title={this.state.title}
                />
            </div>
        );

    }
}

AuthButton.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default AuthButton;
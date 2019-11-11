import React from 'react';
import UserItem from './UserItem';
import AuthButton from './AuthButton';

const NavigationItem = props => {
    const { auth, profile } = props;
    const authenticated = auth.isLoaded && !auth.isEmpty;

    const renderAuthButton = () => {
        return (
            <AuthButton />
        );
    }

    const renderUserItem = user => {
        return (
            <UserItem user={user} />
        );
    }

    return (
        authenticated ? renderUserItem(profile) : renderAuthButton()
    );

    // render() {
    //     const { auth, profile } = this.props;
    //     const authenticated = auth.isLoaded && !auth.isEmpty;

    //     if(authenticated) {
    //         return this.renderUserItem(profile);
    //     } else {
    //         return this.renderAuthButton();
    //     }
    // }
}

export default NavigationItem;
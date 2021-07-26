import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component
{

    componentDidMount()
    {
        window.gapi.load('client:auth2', () =>
        {
            window.gapi.client.init(
            { clientId: '166093254332-hkdt8400eu9bg8hp5hslbqjbjta8oluj.apps.googleusercontent.com',
                  scope: 'email'  
            }).then( () =>
                {
                //Executed only once the google library has been loaded.
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen( this.onAuthChange );
                })
        })
    }

    onAuthChange = isSignedIn =>
    {
        if(isSignedIn)
        {
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else
        {
            this.props.signOut(this.auth.currentUser.get().getId())
        }
    };

    onSignInClick = () =>
    {   
        this.auth.signIn();
    }

    onSignOutClick = () =>
    {
        this.auth.signOut();
    }

    renderAuthButton()
    {
        if(this.props.isSignedIn === null)
        {
            return
        }
        else if(this.props.isSignedIn)
        {
            return(
                <button className = "ui red google button" onClick = {this.onSignOutClick}>
                    <i className = "google icon" />
                    Sign Out
                </button>
            )
        }
        return (
            <button className = "ui red google button" onClick = {this.onSignInClick}>
                <i className = "google icon"/>
                Sign In
            </button>
        );
    }

    render()
    {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = state =>
{
    return {isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut }) (GoogleAuth);
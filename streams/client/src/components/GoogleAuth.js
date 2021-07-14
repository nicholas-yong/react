import React from 'react';

class GoogleAuth extends React.Component
{
    componentDidMount()
    {
        window.gapi.load('client:auth2', () =>
        {
            window.gapi.init(
                { clientId: '166093254332-hkdt8400eu9bg8hp5hslbqjbjta8oluj.apps.googleusercontent.com',
                  scope: 'email'  })
        });

    }

    render()
    {
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;
import React, { useEffect, useState } from 'react'
import Login from './Login'
import Register from './Register'
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


// Configure Firebase.
const config = {
    apiKey: 'AIzaSyDXwx_vc76nrXf_zd2nkmJbe_Ff_axr_UI',
    authDomain: 'bubbly-mission-313508.firebaseapp.com',
    // ...
};
firebase.initializeApp(config);

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    signInSuccessUrl: '/phimbo',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,

    ]
};
const UserPage = ({ isClick, clickLoginPage }) => {
    const [isHandleClick, setIsHandleClick] = useState(false)

    const handleClick = () => {
        setIsHandleClick(!isHandleClick)
    }

    ///handle firebase
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                return;
            }
            console.log('user :', user.displayName)
        });
        return () => unregisterAuthObserver();
    }, [])
    return (
        <div className='user-page' style={isClick ? { display: 'block' } : { display: 'none' }}>
            <div className='close-page' onClick={() => clickLoginPage()}>X</div>
            {isHandleClick ? <Register click={handleClick} /> : <Login click={handleClick} />}
            <div className='google-login'>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth() } className='login-google'
                />
            </div>

        </div>
    )
}

export default UserPage

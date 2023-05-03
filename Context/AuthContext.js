import React, {createContext, useContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import zxcvbn from 'zxcvbn';
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);
export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: '789085115298-qgs1agsbe8pqcmh11ttoqfnqrtsirn9g.apps.googleusercontent.com',
    });
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  function validatePassword(password) {
    const passwordStrength = zxcvbn(password);
    if (passwordStrength.score < 3) {
      throw new Error('Password is not strong enough');
    }
  }
  async function loginWithEmailPassword(email, password, navigation) {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const {user} = userCredential;
      setUser(user);
      console.log(`Logged in as ${user.email}`);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/wrong-password') {
        setErrorMessage('mot de passe ou email incorrect');
      }
    }
  }

  async function SignUpWithEmailPassword(email, password, navigation) {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const {user} = userCredential;
      setUser(user);
      console.log(`Logged in as ${user.email}`);
      navigation.navigate('Home');
    }catch (error) {
      console.log(error);
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('Cet email est déjà utilisé par un autre compte.');
      }
      else if (error.code === 'auth/weak-password') {
        setErrorMessage('Le mot de passe doit avoir au moins 6 caractères.');
      }
      else {
        setErrorMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
      }
    }
    
  }
  async function signInGoogle(navigation) {
    try {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
  
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  }

  async function signInWithFacebook(navigation) {
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
  
    if (result.isCancelled) {
      throw new Error('User cancelled the login process');
    }
  
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw new Error('Something went wrong obtaining access token');
    }
  
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    
    try {
      const { user } = await auth().signInWithCredential(facebookCredential);
      setUser(user);
      console.log(`Logged in as ${user.displayName}`);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      setErrorMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  }
  

  return (
    <AuthContext.Provider
      value={{
        loginWithEmailPassword,
        SignUpWithEmailPassword,
        signInGoogle,
        signInWithFacebook,
        user,
        errorMessage,
      }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

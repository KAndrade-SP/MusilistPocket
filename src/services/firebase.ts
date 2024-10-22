import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useEffect } from 'react'
import Config from 'react-native-config'

const initializeGoogleSignin = () => {
  GoogleSignin.configure({
    webClientId: Config.FIREBASE_WEB_CLIENT_ID,
  })
}

export const firebaseAuth = auth()

export const useFirebaseConfig = () => {
  useEffect(() => {
    initializeGoogleSignin()
  }, [])
}

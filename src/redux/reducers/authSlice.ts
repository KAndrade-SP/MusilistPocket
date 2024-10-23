import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth'
import { AuthState, User } from '../../types/UserTypes'

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  initializing: true,
}

export const loginWithGoogle = createAsyncThunk(
  'auth/loginWithGoogle',
  async (_, { rejectWithValue }) => {
    try {

      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      const idToken = userInfo.data?.idToken

      if (!idToken) {
        throw new Error('ID Token not available')
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken)
      const userCredential = await auth().signInWithCredential(googleCredential)
      const user = userCredential.user

      return {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      }
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await GoogleSignin.signOut()
      return null
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload
      state.initializing = false
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginWithGoogle.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(
        loginWithGoogle.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.loading = false
          state.user = action.payload
        }
      )
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

      .addCase(logout.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(logout.fulfilled, state => {
        state.loading = false
        state.user = null
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { setUser } = authSlice.actions
export default authSlice.reducer

import {
  ReactNode,
  useEffect,
  useState,
  useContext,
  createContext,
} from "react";
import { auth } from "../authConfig/config";
import {
  Auth,
  UserCredential,
  User,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

////////////////////////////////////////////////////////////////////////
export interface AuthContextModel {
  auth: Auth;
  user: User | null;
  login: (email: string, password: string) => Promise<UserCredential>;
  signup: (email: string, password: string) => Promise<UserCredential>;
  sendPasswordResetEmail?: (email: string) => Promise<void>;
  logout: () => void;
  loginWithGoogle: () => Promise<UserCredential>;
  loading: boolean;
}
export interface AuthProviderProps {
  children?: ReactNode;
}

export const authContext = createContext<AuthContextModel>(
  {} as AuthContextModel
);

export const useAuth = (): AuthContextModel => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Provider");
  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const signup = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    console.log(newUser.user.uid);
    return newUser;
  };
  const login = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);
  return (
    <authContext.Provider
      value={{ signup, login, user, auth, logout, loading, loginWithGoogle }}
    >
      {children}
    </authContext.Provider>
  );
};

///////////////////////////////////////////////////////////////////////////

// //interfaces

// export interface UserContextState {
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   id?: string;
// }
// /////
// const AuthContext = createContext<AuthContextModel>(
//   {} as AuthContextModel
// );

// export function useAuth1(): AuthContextModel {
//   return useContext(AuthContext);
// }
// ///
// export const AuthProvider1 = ({ children }: AuthProviderProps): JSX.Element => {
//   const [user, setUser] = useState<User | null>(null);

//   const signup = (email: string, password: string): Promise<UserCredential> => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   function signIn(email: string, password: string): Promise<UserCredential> {
//     return signInWithEmailAndPassword(auth, email, password);
//   }
//   function resetPassword(email: string): Promise<void> {
//     return sendPasswordResetEmail(auth, email);
//   }

//   useEffect(() => {
//     //function that firebase notifies you if a user is set
//     const unsubsrcibe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//     return unsubsrcibe;
//   }, []);

//   const values = {
//     signup,
//     user,
//     signIn,
//     resetPassword,
//     auth,
//   };
//   return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
// };

// //
// //
// ///
// ////
// /////

// export const UserStateContext = createContext<UserContextState>(
//   {} as UserContextState
// );

// export const useUserContext = (): UserContextState => {
//   return useContext(UserStateContext);
// };

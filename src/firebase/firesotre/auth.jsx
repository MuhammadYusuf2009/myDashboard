import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../config";
import { appActions } from "../../store/app";
import { store } from "../../store";
export const registerUser = async (user) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    if (response.user) {
      store.dispatch(appActions.setIsAuth(true));
      store.dispatch(appActions.setUser(response.user));
      alert("Successfully registered");
    }
  } catch (error) {
    alert("Invalid email or password" + error.message);
  }
};

export const loginUser = async (user) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    if (response.user) {
      store.dispatch(appActions.setIsAuth(true));
      store.dispatch(appActions.setUser(response.user));
    }
  } catch (error) {
    alert("Invalid email or password" + error.message);
  }
};

export const loginWithGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, provider);
    if (response.user) {
      store.dispatch(appActions.setIsAuth(true));
      store.dispatch(appActions.setUser(response.user));
    }
  } catch (error) {
    alert("Something went wrong" + error.message);
  }
};

export const logoutUser = async () => {
  await auth.signOut();
  store.dispatch(appActions.reset());
};

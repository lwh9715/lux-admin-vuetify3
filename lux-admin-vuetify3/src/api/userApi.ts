import type { User } from "firebase/auth";
import { doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";
import { user_request } from '../utils/request';

export const addUserToUsersCollection = async (user: User) => {
  const profile = {
    id: user.uid,
    name: user.displayName,
    avatar: user.photoURL,
    created: false,
  };

  try {
    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      avatar: user.photoURL,
    });
    profile.created = true;
  } catch (error) {
    console.error("Error adding document: ", error);
  }

  return profile;
};

/** 登录 */
export const authLogin = query => {
  return user_request({
    url: '/user/login',
    method: 'post',
    data: query
  });
};


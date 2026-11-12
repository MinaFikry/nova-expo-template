import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login, setUserInfo } from "@/redux/authReducer";
import clearStorage from "@/utils/clearStorage";
import { getSecureItem } from "@/utils/secureStorage";

export default function useCheckAuthTokenExistance() {
  const dispatch = useDispatch();

  const rememberMeCheck = async () => {
    const userToken = await getSecureItem("token");
    const userInfo = await AsyncStorage.getItem("userInfo");
    const user = userInfo ? JSON.parse(userInfo) : null;
    const rememberMe = await AsyncStorage.getItem("remember_me");
    if (rememberMe) {
      if (userToken && user) {
        dispatch(setUserInfo(user));
        dispatch(login(userToken));
      }
    } else if (!rememberMe && userToken && user) {
      dispatch(setUserInfo(user));
      dispatch(login(userToken));
      clearStorage();
    }
  };

  useEffect(() => {
    rememberMeCheck();
  }, [dispatch]);
}

import { defineStore } from "pinia";
import { AppStatusCode } from "~/models/ApiResponse";
import { loginResultDTo } from "~/models/auth/loginResultDTo";
import { UserDTo } from "~/models/users/userDTo";
import { GetCurrentUser } from "~/services/user.service";

export const useAuthStore = defineStore("auth", () => {
  const loginResult: Ref<loginResultDTo | null> = ref(null);
  const currentUser: Ref<UserDTo | null> = ref(null);
  const loading = ref(false);
  const isLogin = computed(() => loginResult.value !== null);
  const setCurrentUserValue = async () => {
    const localStorageData = localStorage.getItem("auth-data");
    if (!localStorageData) {
      return;
    }

    const loginData = JSON.parse(localStorageData);
    loginResult.value = loginData;
    loading.value = true;
    var result = await GetCurrentUser();
    if (result.auth_data) {
      currentUser.value = result.data;
    } else if (result.metaData.appStatusCode == AppStatusCode.UnAthorize) {
      loginResult.value = null;
      localStorage.removeItem("auth-data");
    }
    loading.value = false;
  };

  return { loading, loginResult, currentUser, setCurrentUserValue, isLogin };

});
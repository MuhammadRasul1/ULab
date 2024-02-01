import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";

class AuthStore {

  isAuth = false;

  userData = {
    id: "",
    name: "",
    email: "",
    access_token: "",
    refresh_token: "",
    user_type: ""
  };

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "auth",
      storage: window.localStorage,
      properties: ["isAuth", "userData"]
    });
  }

  updateUserData(data) {
    this.userData = data
  }

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
  }

};


export const authStore = new AuthStore();


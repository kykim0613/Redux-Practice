import { atom } from "recoil";

export const isDarkState = atom({
  key: "isDark",
  default: false,
});

export const IsLoggedIn = atom({
  key: "IsLoggedIn",
  default: false
})

export interface IUser {
  isLogIn: boolean
}
export interface IUserObj {
  userObj: object | null
}
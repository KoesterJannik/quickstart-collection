import { create } from "zustand";

import { getUserDetails } from "../api/auth";

interface UserState {
  user: {
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  } | null;
  getUserDetails: () => void;
  logOut: () => void;
}

export const userUserStore = create<UserState>((set) => ({
  user: null,
  getUserDetails: async () => {
    const response = await getUserDetails();
    console.log(response);
    set({ user: response.data });
  },
  logOut: () => {
    localStorage.removeItem("access_token");
    set({ user: null });
  },
}));

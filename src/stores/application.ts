import type { Application } from "@/types/application.type";
import { create } from "zustand";

type ApplicationStore = {
  openApps: Application[];
  openApp: (app: Application) => void;
  closeApp: (appId: string) => void;
  toggleMinimize: (appId: string) => void;
  focusApp: (appId: string) => void;
  getApp: (appId: string) => Application | undefined;
  getCurrentApp: () => Application | undefined;
};

export const useApplicationStore = create<ApplicationStore>((set, get) => ({
  openApps: [],
  openApp: (app) => {
    set((state) => {
      const alreadyOpen = state.openApps.find((a) => a.id === app.id);
      if (alreadyOpen) return state;
      return {
        openApps: [app, ...state.openApps],
      };
    });
    get().focusApp(app.id);
  },

  closeApp: (appId) =>
    set((state) => ({
      openApps: state.openApps.filter((a) => a.id !== appId),
    })),

  toggleMinimize: (appId) =>
    set((state) => ({
      openApps: state.openApps.map((a) =>
        a.id === appId ? { ...a, isFocused: !a.isFocused } : a
      ),
    })),

  focusApp: (appId) =>
    set((state) => ({
      openApps: state.openApps.map((a) => ({
        ...a,
        isFocused: a.id === appId,
      })),
    })),

  getApp: (appId) => {
    const currentApp = get().openApps.find((a) => a.id === appId);
    if (currentApp?.id) {
      get().focusApp(currentApp?.id);
    }
    return currentApp;
  },

  getCurrentApp: () => get().openApps.find((a) => a.isFocused),
}));

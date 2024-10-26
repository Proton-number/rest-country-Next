import { create } from 'zustand'

export const appStore = create((set)=>({
  
  darkMode: true,
 setDarkMode: (darkMode) => set(() => ({ darkMode })),

}))

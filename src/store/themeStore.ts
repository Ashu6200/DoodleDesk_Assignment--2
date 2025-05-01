import { themeConfig } from '@/configs/theme.config'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Theme, LayoutType, Direction, ThemeSpecialty } from '@/@types/theme'

type ThemeState = Theme

type ThemeAction = {
    setSchema: (payload: string) => void
    setMode: (payload: ThemeState['mode']) => void
    setSideNavCollapse: (payload: boolean) => void
    setDirection: (payload: Direction) => void
    setPanelExpand: (payload: boolean) => void
    setLayout: (payload: LayoutType) => void
    setPreviousLayout: (payload: LayoutType | '') => void
    setSpecialty: (specialty: ThemeSpecialty) => void
    increaseFontSize: () => void
    decreaseFontSize: () => void
    resetFontSize: () => void
}

const inititialThemeState = themeConfig
const DEFAULT_FONT_SIZE = 16

export const useThemeStore = create<ThemeState & ThemeAction>()(
    persist(
        (set) => ({
            ...inititialThemeState,
            setSchema: (payload) => set(() => ({ themeSchema: payload })),
            setMode: (payload) => set(() => ({ mode: payload })),
            setSideNavCollapse: (payload) =>
                set((state) => ({
                    layout: { ...state.layout, sideNavCollapse: payload },
                })),
            setDirection: (payload) => set(() => ({ direction: payload })),
            setPanelExpand: (payload) => set(() => ({ panelExpand: payload })),
            setLayout: (payload) =>
                set((state) => ({
                    layout: { ...state.layout, type: payload },
                })),
            setPreviousLayout: (payload) =>
                set((state) => ({
                    layout: { ...state.layout, previousType: payload },
                })),
            setSpecialty: (specialty) => set(() => ({ specialty: specialty })),
            increaseFontSize: () =>
                set((state) => ({ fontSize: state.fontSize + 1 })),
            decreaseFontSize: () =>
                set((state) => ({
                    fontSize: Math.max(state.fontSize - 1, 12),
                })),
            resetFontSize: () => set(() => ({ fontSize: DEFAULT_FONT_SIZE })),
        }),
        {
            name: 'theme',
        },
    ),
)

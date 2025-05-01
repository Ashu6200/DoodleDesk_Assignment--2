import React from 'react'
import {  useThemeStore } from '@/store/themeStore'
import { ThemeSpecialty } from '@/@types/theme'

const ThemeSelector: React.FC = () => {
    const { specialty, setSpecialty } = useThemeStore()

    const themes: { value: ThemeSpecialty; label: string }[] = [
        { value: 'default', label: 'Default Theme' },
        { value: 'theme1', label: 'Organ Transplant' },
        { value: 'theme2', label: 'Cosmetic Surgery' },
    ]
    return (
        <div className="flex items-center space-x-4">
            <div className="relative">
                <select
                    value={specialty}
                    className="appearance-none bg-primary-deep text-white px-4 py-2 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-mild"
                    onChange={(e) =>
                        setSpecialty(e.target.value as ThemeSpecialty)
                    }
                >
                    {themes.map((theme) => (
                        <option key={theme.value} value={theme.value}>
                            {theme.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <button
                    className="bg-primary-deep text-white p-2 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-mild"
                    aria-label="Decrease font size"
                    onClick={() => useThemeStore.getState().decreaseFontSize()}
                >
                    <span className="text-xs">A-</span>
                </button>
                <button
                    className="bg-primary-deep text-white p-2 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-mild"
                    aria-label="Reset font size"
                    onClick={() => useThemeStore.getState().resetFontSize()}
                >
                    <span className="text-xs">A</span>
                </button>
                <button
                    className="bg-primary-deep text-white p-2 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-mild"
                    aria-label="Increase font size"
                    onClick={() => useThemeStore.getState().increaseFontSize()}
                >
                    <span className="text-xs">A+</span>
                </button>
            </div>
        </div>
    )
}

export default ThemeSelector

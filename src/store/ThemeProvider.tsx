import React, { useEffect } from 'react'
import { useThemeStore } from './themeStore'

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const { specialty, fontSize } = useThemeStore()
    useEffect(() => {
        document.documentElement.className = `theme-${specialty}`
        document.documentElement.style.fontSize = `${fontSize}px`
        
    }, [fontSize, specialty])
    console.log('ThemeProvider', document.documentElement.className)
    return <>{children}</>
}

export default ThemeProvider

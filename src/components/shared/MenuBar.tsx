
import { useThemeStore } from '@/store/themeStore'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeSelector from './ThemeSelector'

const MenuBar: React.FC = () => {
    const location = useLocation()
    const { specialty } = useThemeStore()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return (
        <nav
            className={`bg-primary text-white p-4 ${specialty === 'theme1' ? 'theme1-nav' : specialty === 'theme2' ? 'theme2-nav' : ''}`}
        >
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
                <div className="flex justify-between items-center w-full md:w-auto">
                    <div className="mr-8 font-heading font-bold text-xl">
                        {specialty === 'theme1' && 'TransplantTech'}
                        {specialty === 'theme2' && 'AestheticMD'}
                        {specialty === 'default' && 'MedicalHub'}
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                            aria-expanded={mobileMenuOpen ? 'true' : 'false'}
                            onClick={toggleMobileMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon for menu - can be replaced with a proper SVG if preferred */}
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Desktop navigation */}
                <div className="hidden md:flex space-x-4 items-center md:flex-1 md:justify-between">
                    <div className="flex space-x-4">
                        <Link
                            to="/"
                            className={`px-3 py-2 rounded-md ${location.pathname === '/' ? 'bg-primary-deep' : ''}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/themes"
                            className={`px-3 py-2 rounded-md ${location.pathname === '/themes' ? 'bg-primary-deep' : ''}`}
                        >
                            Themes
                        </Link>
                    </div>
                    <ThemeSelector />
                </div>

                {/* Mobile navigation */}
                <div className={`${mobileMenuOpen ? 'block' : 'hidden'} w-full md:hidden mt-4`}>
                    <div className="flex flex-col space-y-2">
                        <Link
                            to="/"
                            className={`px-3 py-2 rounded-md ${location.pathname === '/' ? 'bg-primary-deep' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/themes"
                            className={`px-3 py-2 rounded-md ${location.pathname === '/themes' ? 'bg-primary-deep' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Themes
                        </Link>
                        <div className="pt-2">
                            <ThemeSelector />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MenuBar
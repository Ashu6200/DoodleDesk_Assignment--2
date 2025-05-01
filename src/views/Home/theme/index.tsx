export interface ThemeColors {
    primary: string
    primaryDeep: string
    primaryMild: string
    accent: string
    background: string
    surface: string
    text: {
        primary: string
        secondary: string
        accent: string
    }
    status: {
        success: string
        warning: string
        error: string
        info: string
    }
}

export interface ThemeTypography {
    fontFamily: {
        heading: string
        body: string
    }
    fontSize: {
        xs: string
        sm: string
        base: string
        lg: string
        xl: string
        '2xl': string
        '3xl': string
        '4xl': string
    }
    fontWeight: {
        light: number
        normal: number
        medium: number
        semibold: number
        bold: number
    }
    lineHeight: {
        none: number
        tight: number
        normal: number
        relaxed: number
    }
}

export interface ThemeLayout {
    spacing: {
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
    }
    borderRadius: {
        none: string
        sm: string
        md: string
        lg: string
        full: string
    }
    boxShadow: {
        none: string
        sm: string
        md: string
        lg: string
    }
}

export interface ThemeConfig {
    colors: ThemeColors
    typography: ThemeTypography
    layout: ThemeLayout
    marketing: {
        headline: string
        subheading: string
    }
}
export const defaultTheme: ThemeConfig = {
    colors: {
        primary: '#2563EB',
        primaryDeep: '#1d4ed8',
        primaryMild: '#60a5fa',
        accent: '#f59e0b',
        background: '#f3f4f6',
        surface: '#ffffff',
        text: {
            primary: '#111827',
            secondary: '#4b5563',
            accent: '#2563eb',
        },
        status: {
            success: '#10b981',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#3b82f6',
        },
    },
    typography: {
        fontFamily: {
            heading: "'Inter', sans-serif",
            body: "'Inter', sans-serif",
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
        },
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
        lineHeight: {
            none: 1,
            tight: 1.25,
            normal: 1.5,
            relaxed: 1.75,
        },
    },
    layout: {
        spacing: {
            xs: '0.5rem',
            sm: '1rem',
            md: '1.5rem',
            lg: '2rem',
            xl: '3rem',
            '2xl': '4rem',
        },
        borderRadius: {
            none: '0',
            sm: '0.125rem',
            md: '0.375rem',
            lg: '0.5rem',
            full: '9999px',
        },
        boxShadow: {
            none: 'none',
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
    },
    marketing: {
        headline: 'You Focus on Healing ',
        subheading: 'Upload Your Medical Reports to Explore the Best and Most Cost-Effective Treatments in Your Language ',
    },
}

// Organ Transplant Theme Configuration
export const organTransplantTheme: ThemeConfig = {
    colors: {
        primary: '#16a34a',
        primaryDeep: '#15803d',
        primaryMild: '#4ade80',
        accent: '#9333ea',
        background: '#f0fdf4',
        surface: '#ffffff',
        text: {
            primary: '#0f172a',
            secondary: '#334155',
            accent: '#166534',
        },
        status: {
            success: '#22c55e',
            warning: '#eab308',
            error: '#dc2626',
            info: '#0ea5e9',
        },
    },
    typography: {
        fontFamily: {
            heading: "'Montserrat', sans-serif",
            body: "'Open Sans', sans-serif",
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
        },
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
        lineHeight: {
            none: 1,
            tight: 1.25,
            normal: 1.5,
            relaxed: 1.75,
        },
    },
    layout: {
        spacing: {
            xs: '0.5rem',
            sm: '1rem',
            md: '1.5rem',
            lg: '2rem',
            xl: '3rem',
            '2xl': '4rem',
        },
        borderRadius: {
            none: '0',
            sm: '0.125rem',
            md: '0.5rem',
            lg: '0.75rem',
            full: '9999px',
        },
        boxShadow: {
            none: 'none',
            sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
    },
    marketing: {
        headline: 'Transplant Care Excellence',
        subheading:
            'Advanced solutions for organ transplant specialists and patients',
    },
}

// Cosmetic Surgery Theme Configuration
export const cosmeticSurgeryTheme: ThemeConfig = {
    colors: {
        primary: '#ec4899',
        primaryDeep: '#db2777',
        primaryMild: '#f472b6',
        accent: '#14b8a6',
        background: '#fdf2f8',
        surface: '#ffffff',
        text: {
            primary: '#18181b',
            secondary: '#52525b',
            accent: '#be185d',
        },
        status: {
            success: '#10b981',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#06b6d4',
        },
    },
    typography: {
        fontFamily: {
            heading: "'Playfair Display', serif",
            body: "'Lato', sans-serif",
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.5rem',
        },
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
        lineHeight: {
            none: 1,
            tight: 1.25,
            normal: 1.5,
            relaxed: 1.75,
        },
    },
    layout: {
        spacing: {
            xs: '0.5rem',
            sm: '1rem',
            md: '1.5rem',
            lg: '2rem',
            xl: '3rem',
            '2xl': '4rem',
        },
        borderRadius: {
            none: '0',
            sm: '0.25rem',
            md: '0.75rem',
            lg: '1rem',
            full: '9999px',
        },
        boxShadow: {
            none: 'none',
            sm: '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.04)',
            md: '0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
            lg: '0 12px 24px -3px rgba(0, 0, 0, 0.08), 0 8px 16px -2px rgba(0, 0, 0, 0.05)',
        },
    },
    marketing: {
        headline: 'Aesthetic Excellence',
        subheading:
            'Premium solutions for cosmetic surgery specialists and clinics',
    },
}

export const getThemeConfig = (specialty: string): ThemeConfig => {
    switch (specialty) {
        case 'theme1':
            return organTransplantTheme
        case 'theme2':
            return cosmeticSurgeryTheme
        default:
            return defaultTheme
    }
}

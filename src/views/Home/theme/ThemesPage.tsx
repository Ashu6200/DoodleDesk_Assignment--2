import { ThemeSpecialty } from "@/@types/theme"
import MenuBar from "@/components/shared/MenuBar"
import { useThemeStore } from "@/store/themeStore"
import { getThemeConfig } from "."

const ThemesPage: React.FC = () => {
    const { specialty, setSpecialty } = useThemeStore()

    const themes = [
        {
            specialty: 'default' as ThemeSpecialty,
            title: 'Default Medical Theme',
            description:
                'A clean, professional theme suitable for general medical practices and healthcare providers.',
        },
        {
            specialty: 'theme1' as ThemeSpecialty,
            title: 'Organ Transplant Specialty',
            description:
                'Focused on organ transplant centers with a soothing color palette and specialized UI elements for transplant care workflows.',
        },
        {
            specialty: 'theme2' as ThemeSpecialty,
            title: 'Cosmetic Surgery Specialty',
            description:
                'A premium aesthetic theme designed for cosmetic surgery practices with elegant typography and visual appeal.',
        },
    ]

    return (
        <main className='w-full'>
            <MenuBar />
            <div className="bg-background min-h-screen py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold text-text-primary mb-4 font-heading">
                            Theme Selection
                        </h1>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Choose a theme that best fits your medical specialty.
                            Each theme provides a unique experience tailored to
                            different healthcare contexts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {themes.map((theme) => (
                            <ThemeCard
                                key={theme.specialty}
                                specialty={theme.specialty}
                                title={theme.title}
                                description={theme.description}
                                isActive={specialty === theme.specialty}
                                onSelect={() => setSpecialty(theme.specialty)}
                            />
                        ))}
                    </div>

                    <div className="mt-16 p-6 bg-surface rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-text-primary mb-4 font-heading">
                            Current Theme:{' '}
                            {themes.find((t) => t.specialty === specialty)?.title}
                        </h2>
                        <p className="text-text-secondary mb-6">
                            The selected theme will be applied throughout the
                            application, affecting colors, typography, layout, and
                            UI components.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="p-4 bg-primary text-white rounded-md">
                                Primary Color
                            </div>
                            <div className="p-4 bg-primary-deep text-white rounded-md">
                                Primary deep Color
                            </div>
                            <div className="p-4 bg-primary-mild text-white rounded-md">
                                Primary mild Color
                            </div>
                            <div className="p-4 bg-primary-subtle text-white  rounded-md">
                                Primary Subtle Color
                            </div>
                            <div className="p-4 bg-success border text-white  rounded-md">
                                Success Color
                            </div>
                            <div className="p-4 bg-success-subtle text-white rounded-md">
                                Success subtle Color
                            </div>
                            <div className="p-4 bg-success border text-white rounded-md">
                                Success Color
                            </div>
                            <div className="p-4 bg-success-subtle text-white rounded-md">
                                Success subtle Color
                            </div>
                            <div className="p-4 bg-error border text-white  rounded-md">
                                Error Color
                            </div>
                            <div className="p-4 bg-error-subtle text-white rounded-md">
                                Error subtle Color
                            </div>
                            <div className="p-4 bg-warning border text-white rounded-md">
                                Warning Color
                            </div>
                            <div className="p-4 bg-warning-subtle text-white rounded-md">
                                Warning subtle Color
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-text-primary mb-4 font-heading">
                                Typography Sample
                            </h3>
                            <h1 className="text-3xl font-bold mb-2 font-heading">
                                Heading 1
                            </h1>
                            <h2 className="text-2xl font-bold mb-2 font-heading">
                                Heading 2
                            </h2>
                            <h3 className="text-xl font-bold mb-2 font-heading">
                                Heading 3
                            </h3>
                            <p className="mb-2 font-body">
                                This is a paragraph text in the body font. The quick
                                brown fox jumps over the lazy dog.
                            </p>
                            <p className="text-sm mb-2 font-body">
                                This is smaller text that might be used for captions
                                or notes.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-text-primary mb-4 font-heading">
                                Button Samples
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-deep transition-colors">
                                    Primary Button
                                </button>
                                <button className="bg-white border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary-mild hover:text-white transition-colors">
                                    Outlined Button
                                </button>
                                <button className="bg-success text-white px-4 py-2 rounded-md hover:opacity-90 transition-colors">
                                    Success Button
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ThemesPage

interface ThemeCardProps {
    specialty: ThemeSpecialty
    title: string
    description: string
    isActive: boolean
    onSelect: () => void
}

const ThemeCard: React.FC<ThemeCardProps> = ({
    specialty,
    title,
    description,
    isActive,
    onSelect,
}) => {
    const themeConfig = getThemeConfig(specialty)
    const cardStyle = {
        backgroundColor: themeConfig.colors.surface,
        borderColor: isActive ? themeConfig.colors.primary : 'transparent',
        borderRadius: themeConfig.layout.borderRadius.lg,
        boxShadow: isActive
            ? themeConfig.layout.boxShadow.lg
            : themeConfig.layout.boxShadow.md,
    }

    const buttonStyle = {
        backgroundColor: themeConfig.colors.primary,
        color: '#ffffff',
        borderRadius: themeConfig.layout.borderRadius.md,
    }

    return (
        <div
            className={`border-2 p-6 transition-all duration-300 hover:shadow-lg ${isActive ? 'border-primary scale-105' : 'border-transparent'}`}
            style={cardStyle}
        >
            <div className="flex flex-col h-full">
                <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden mb-4 bg-gray-200">
                    <div
                        className="flex items-center justify-center h-48"
                        style={{
                            backgroundColor: themeConfig.colors.background,
                        }}
                    >
                        <div className="text-center">
                            <div
                                className="mb-2 font-bold"
                                style={{
                                    color: themeConfig.colors.primary,
                                    fontFamily:
                                        themeConfig.typography.fontFamily
                                            .heading,
                                }}
                            >
                                {themeConfig.marketing.headline}
                            </div>
                        </div>
                    </div>
                </div>

                <h3
                    className="text-xl font-bold mb-2"
                    style={{
                        color: themeConfig.colors.text.primary,
                        fontFamily: themeConfig.typography.fontFamily.heading,
                    }}
                >
                    {title}
                </h3>

                <p
                    className="text-sm mb-6 flex-grow"
                    style={{
                        color: themeConfig.colors.text.secondary,
                        fontFamily: themeConfig.typography.fontFamily.body,
                    }}
                >
                    {description}
                </p>

                <div className="mt-auto">
                    <button
                        className="w-full py-2 px-4 font-medium transition-colors duration-200 hover:opacity-90"
                        style={buttonStyle}
                        onClick={onSelect}
                    >
                        {isActive ? 'Currently Active' : 'Activate Theme'}
                    </button>
                </div>
            </div>
        </div>
    )
}
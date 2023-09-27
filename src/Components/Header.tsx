import { Header as AppHeader } from '@aminzabardast/personal-page-components';

interface HeaderProps {
    toggleTheme: Function
}

const Header = ({ toggleTheme }: HeaderProps) => {
    return (
        <AppHeader
            title="Amin Zabardast"
            onThemeChange={() => toggleTheme()}
        />
    )
}

export default Header
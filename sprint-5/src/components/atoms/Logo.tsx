interface LogoProps {
    white?: boolean;
}

const Logo = ({white = false}: LogoProps) => {
    const logoSrc = white ? '/images/logo-bookmark-white.svg' : '/images/logo-bookmark.svg';

    return (
        <img src={logoSrc} alt="Bookmark Logo" className="h-8" />
    );
}

export default Logo;
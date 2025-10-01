import type { LogoProps } from "../../config/types";

const Logo = ({white = false}: LogoProps) => {
    const logoSrc = white ? '/images/logo-bookmark-white.svg' : '/images/logo-bookmark.svg';

    return (
        <a href='#' aria-label='Bookmark Home'>
            <img src={logoSrc} alt="Bookmark Logo" className="h-8" />
        </a>
    );
}

export default Logo;
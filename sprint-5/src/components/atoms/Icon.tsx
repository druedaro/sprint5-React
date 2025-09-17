interface IconProps {
    name: 'hamburguer' | 'close' | 'facebook' | 'twitter';
    onClick?: () => void;
}

const Icon = ({ name, onClick }: IconProps) => {
    const icons = {
        hamburguer: '/images/icon-hamburger.svg',
    close: '/images/icon-close.svg',
    facebook: '/images/icon-facebook.svg',
    twitter: '/images/icon-twitter.svg',
  };

  return (
    <img
      src={icons[name]}
      alt={name}
      className = "w-6 h-6"
      onClick = {onClick}
    />
  );
};

export default Icon;